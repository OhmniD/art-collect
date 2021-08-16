import S3ImageUpload from "../S3ImageUpload";
import { AmplifyS3Image } from "@aws-amplify/ui-react";

const ImagesContent = ({ artwork, artworkImages }) => {
  const renderImages = artworkImages.map((image) => {
    return (
      <AmplifyS3Image
        style={{ "--height": "450px" }}
        key={image.fullsize.key}
        imgKey={image.fullsize.key.replace("public/", "")}
      />
    );
  });
  return (
    <div>
      <S3ImageUpload artwork={artwork} />
      {renderImages}
    </div>
  );
};

export default ImagesContent;
