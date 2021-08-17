import { v4 as uuid } from "uuid";
import Amplify, { Storage } from "aws-amplify";
import { useState, useContext, useEffect } from "react";
import { ArtworksContext } from "../../../providers/ArtworkProvider";
import { ImagesContext } from "../../../providers/ImageProvider";
import { API, graphqlOperation } from "aws-amplify";
import { listImages } from "../../../graphql/queries";

const S3ImageUpload = ({ artwork, artworkImages, setArtworkImages }) => {
	const { images, setImages } = useContext(ImagesContext);
	const [uploading, setUploading] = useState(false);
	const [lastImageUUID, setLastImageUUID] = useState("");

	useEffect(() => {
		if (uploading === false && lastImageUUID) {
			addImageToState(lastImageUUID);
		}
	}, [lastImageUUID]);

	const onChange = async (evt) => {
		const file = evt.target.files[0];
		const fileName = uuid();
		setUploading(true);
		const result = await Storage.put(fileName, file, {
			customPrefix: { public: "uploads/" },
			// level: "private",
			metadata: { artworkId: artwork.id, owner: artwork.owner },
		});
		console.log("Uploaded file: ", result);
		setUploading(false);
		setLastImageUUID(result);
	};

	const addImageToState = (lastImageUUID) => {
		// Forgive me father, for I have sinned.
		//This is awful, but without the time to work out how to subscribe the app to dynamodb ID of the S3 object it will have to do.
		//Another option might be to generate the S3 object ID here then pass it up as metadata for the Lambda function to suck in.
		setTimeout(async () => {
			const imageData = await API.graphql({
				query: listImages,
				variables: { filter: { artworkID: { eq: artwork.id } } },
			});
			const addedImage = imageData.data.listImages.items.find(
				(image) =>
					image.fullsize.key.replace("public/", "") === lastImageUUID.key
			);
			setImages([...images, addedImage]);
			setArtworkImages([...artworkImages, addedImage]);
			setLastImageUUID("");
		}, 3000);
	};

	return (
		<div className="my-4">
			<button
				onClick={() => document.getElementById("add-image-file-input").click()}
				disabled={uploading}
				icon="file image outline"
				content={uploading ? "Uploading..." : "Add Image"}
				type="button"
				className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Add image
			</button>
			<input
				id="add-image-file-input"
				type="file"
				accept="image/*"
				onChange={onChange}
				style={{ display: "none" }}
			/>
		</div>
	);
};

export default S3ImageUpload;
