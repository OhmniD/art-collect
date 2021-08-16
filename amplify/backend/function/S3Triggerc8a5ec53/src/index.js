const AWS = require("aws-sdk");

const DynamoDBDocClient = new AWS.DynamoDB.DocumentClient({
	apiVersion: "2012-08-10",
});
const { v4: uuidv4 } = require("uuid");

const DYNAMODB_IMAGES_TABLE_NAME =
	process.env.DYNAMODB_IMAGES_TABLE_ARN.split("/")[1];

const S3 = new AWS.S3({ signatureVersion: "v4" });
// Note: Sharp requires native extensions. To get sharp to install from NPM in a
// way that's compatible with the Amazon Linux environment that AWS runs Node.js
// on, we can use this command: docker run -v "$PWD":/var/task lambci/lambda:build-nodejs8.10 npm install
const Sharp = require("sharp");
// We'll expect these environment variables to be defined when the Lambda function is deployed
const THUMBNAIL_WIDTH = parseInt(process.env.THUMBNAIL_WIDTH, 10);
const THUMBNAIL_HEIGHT = parseInt(process.env.THUMBNAIL_HEIGHT, 10);
function thumbnailKey(filename) {
	return `public/resized/${filename}`;
}
function fullsizeKey(filename) {
	return `public/${filename}`;
}
function makeThumbnail(image) {
	return Sharp(image).resize(THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT).toBuffer();
}
async function resize(bucketName, key) {
	const originalImage = (
		await S3.getObject({ Bucket: bucketName, Key: key }).promise()
	).Body;
	const originalImageName = key.replace("uploads/", "");
	const originalImageDimensions = await Sharp(originalImage).metadata();
	const thumbnail = await makeThumbnail(originalImage);
	await Promise.all([
		S3.putObject({
			Body: thumbnail,
			Bucket: bucketName,
			Key: thumbnailKey(originalImageName),
		}).promise(),
		S3.copyObject({
			Bucket: bucketName,
			CopySource: bucketName + "/" + key,
			Key: fullsizeKey(originalImageName),
		}).promise(),
	]);
	await S3.deleteObject({
		Bucket: bucketName,
		Key: key,
	}).promise();
	return {
		imageId: originalImageName,

		thumbnail: {
			key: thumbnailKey(originalImageName),
			width: THUMBNAIL_WIDTH,
			height: THUMBNAIL_HEIGHT,
		},
		fullsize: {
			key: fullsizeKey(originalImageName),
			width: originalImageDimensions.width,
			height: originalImageDimensions.height,
		},
	};
}

function storeImagesInfo(item) {
	const params = {
		Item: item,
		TableName: DYNAMODB_IMAGES_TABLE_NAME,
	};
	return DynamoDBDocClient.put(params).promise();
}

async function getMetadata(bucketName, key) {
	const headResult = await S3.headObject({
		Bucket: bucketName,
		Key: key,
	}).promise();
	return headResult.Metadata;
}

async function processRecord(record) {
	const bucketName = record.s3.bucket.name;
	const key = record.s3.object.key;

	if (key.indexOf("uploads") !== 0) return;

	const metadata = await getMetadata(bucketName, key);
	const sizes = await resize(bucketName, key);
	const id = uuidv4();
	const item = {
		id: id,
		owner: metadata.owner,
		artworkID: metadata.artworkid,
		bucket: bucketName,
		thumbnail: sizes.thumbnail,
		fullsize: sizes.fullsize,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		_version: 1,
		_lastChangedAt: Date.now(),
	};
	await storeImagesInfo(item);
}

exports.handler = async (event, context, callback) => {
	try {
		event.Records.forEach(processRecord);
		callback(null, { status: "Image Processed" });
	} catch (err) {
		console.error(err);
		callback(err);
	}
};
