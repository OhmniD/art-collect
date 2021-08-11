import { useState, createContext, useEffect } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listArtworks } from "../graphql/queries";

export const ArtworksContext = createContext();

export const ArtworkProvider = (props) => {
	const [artworks, setArtworks] = useState([]);

	const getArtworks = async () => {
		const owner = await Auth.currentAuthenticatedUser();
		const filter = { owner: { eq: owner } };

		const artworks = await API.graphql(graphqlOperation(listArtworks), {
			variables: { filter: filter },
		});

		setArtworks(artworks.data.listArtworks.items);
	};

	useEffect(() => {
		getArtworks();
	}, []);

	return (
		<ArtworksContext.Provider value={{ artworks }}>
			{props.children}
		</ArtworksContext.Provider>
	);
};
