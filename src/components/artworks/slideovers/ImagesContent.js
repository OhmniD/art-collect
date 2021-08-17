import S3ImageUpload from "../S3ImageUpload";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import { useState, useEffect, useContext } from "react";

const ImagesContent = ({ artwork, artworkImages }) => {
  const [imageNodes, setImageNodes] = useState([]);

  useEffect(() => {
    const renderImages = artworkImages.map((image) => {
      return (
        <AmplifyS3Image
          style={{ "--height": "450px" }}
          key={image.fullsize.key}
          imgKey={image.fullsize.key.replace("public/", "")}
        />
      );
    });
    setImageNodes(renderImages);
  }, [artworkImages]);

  return (
    <div>
      <S3ImageUpload artwork={artwork} artworkImages={artworkImages} />
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-2">
        {imageNodes}
      </div>
    </div>
  );
};

export default ImagesContent;
