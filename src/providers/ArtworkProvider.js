import { useState, createContext, useEffect } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listArtworks } from "../graphql/queries";

export const ArtworksContext = createContext();

export const ArtworkProvider = (props) => {
	const [artworks, setArtworks] = useState([]);
	const [artworkCount, setArtworkCount] = useState(0);

	const getArtworks = async () => {
		const owner = await Auth.currentAuthenticatedUser();
		const filter = { owner: { eq: owner } };

		const artworks = await API.graphql(graphqlOperation(listArtworks), {
			variables: { filter: filter },
		});

		setArtworkCount(artworks.data.listArtworks.scannedCount);

		setArtworks(artworks.data.listArtworks.items);
	};

	useEffect(() => {
		getArtworks();
	}, []);

	return (
		<ArtworksContext.Provider value={{ artworks, setArtworks, artworkCount }}>
			{props.children}
		</ArtworksContext.Provider>
	);
};
