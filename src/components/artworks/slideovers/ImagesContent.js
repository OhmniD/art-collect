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
      {imageNodes}
    </div>
  );
};

export default ImagesContent;
