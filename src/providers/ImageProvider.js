import { useState, createContext, useEffect } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listImages } from "../graphql/queries";

export const ImagesContext = createContext();

export const ImageProvider = (props) => {
	const [images, setImages] = useState([]);

	const getImages = async () => {
		const owner = await Auth.currentAuthenticatedUser();
		const filter = { owner: { eq: owner } };

		const images = await API.graphql(graphqlOperation(listImages), {
			variables: { filter: filter },
		});

		setImages(images.data.listImages.items);
	};

	useEffect(() => {
		getImages();
	}, []);

	return (
		<ImagesContext.Provider value={{ images, setImages }}>
			{props.children}
		</ImagesContext.Provider>
	);
};
