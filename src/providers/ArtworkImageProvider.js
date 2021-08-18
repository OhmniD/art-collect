import { useState, createContext, useContext, useEffect } from "react";
import { ImagesContext } from "./ImageProvider";
import { ArtworksContext } from "./ArtworkProvider";
export const ArtworkImagesContext = createContext();

export const ArtworkImageProvider = (props) => {
  const [artworkImages, setArtworkImages] = useState([]);

  const { images } = useContext(ImagesContext);
  const { artworks } = useContext(ArtworksContext);

  const generateArtworkImages = () => {
    const artworkImages = {};
    artworks.forEach((artwork) => {
      const imagesArray = images.filter(
        (image) => image.artworkID === artwork.id
      );
      artworkImages[artwork.id] = imagesArray;
    });
    setArtworkImages(artworkImages);
  };

  useEffect(() => {
    generateArtworkImages();
  }, [images, artworks]);

  return (
    <ArtworkImagesContext.Provider value={{ artworkImages, setArtworkImages }}>
      {props.children}
    </ArtworkImagesContext.Provider>
  );
};
