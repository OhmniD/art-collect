import { useState, createContext } from "react";

export const ArtworkImagesContext = createContext();

export const ArtworkImageProvider = (props) => {
	const [artworkImages, setArtworkImages] = useState([]);

	return (
		<ArtworkImagesContext.Provider value={{ artworkImages, setArtworkImages }}>
			{props.children}
		</ArtworkImagesContext.Provider>
	);
};
