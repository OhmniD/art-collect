import { v4 as uuid } from "uuid";
import Amplify, { API, graphqlOperation, Storage } from "aws-amplify";
import { useState } from "react";

const S3ImageUpload = ({ artwork }) => {
	const [uploading, setUploading] = useState(false);

	const onChange = async (evt) => {
		const file = evt.target.files[0];
		const fileName = uuid();
		setUploading(true);
		const result = await Storage.put(fileName, file, {
			customPrefix: { public: "uploads/" },
			// level: "private",
			metadata: { artworkId: artwork.id },
		});
		console.log("Uploaded file: ", result);
		setUploading(false);
	};

	return (
		<div>
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
