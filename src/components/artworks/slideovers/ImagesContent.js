import S3ImageUpload from "./S3ImageUpload";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { useState, useEffect, useContext } from "react";
import { ImagesContext } from "../../../providers/ImageProvider";
import { ArtworkImagesContext } from "../../../providers/ArtworkImageProvider";

const ImagesContent = ({ artwork }) => {
	const [imageNodes, setImageNodes] = useState([]);
	const { images } = useContext(ImagesContext);
	const { artworkImages, setArtworkImages } = useContext(ArtworkImagesContext);

	useEffect(() => {
		const renderImages = artworkImages[artwork.id].map((image) => {
			return (
				<AmplifyS3Image
					style={{ "--height": "450px" }}
					key={image.fullsize.key}
					imgKey={image.fullsize.key.replace("public/", "")}
				/>
			);
		});
		setImageNodes(renderImages);
	}, [artworkImages, images]);

	return (
		<div>
			<S3ImageUpload
				artwork={artwork}
				artworkImages={artworkImages}
				setArtworkImages={setArtworkImages}
			/>
			<div className="bg-white shadow overflow-hidden sm:rounded-lg p-2">
				{imageNodes}
			</div>
		</div>
	);
};

export default ImagesContent;
