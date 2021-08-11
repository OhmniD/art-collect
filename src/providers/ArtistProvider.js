import { useState, createContext, useEffect } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listArtists } from "../graphql/queries";

export const ArtistsContext = createContext();

export const ArtistProvider = (props) => {
	const [artists, setArtists] = useState([]);
	const [artistCount, setArtistCount] = useState(0);

	const getArtists = async () => {
		const owner = await Auth.currentAuthenticatedUser();
		const filter = { owner: { eq: owner } };

		const artists = await API.graphql(graphqlOperation(listArtists), {
			variables: { filter: filter },
		});

		setArtistCount(artists.data.listArtists.scannedCount);
		setArtists(artists.data.listArtists.items);
	};

	useEffect(() => {
		getArtists();
	}, []);

	return (
		<ArtistsContext.Provider value={{ artists, setArtists, artistCount }}>
			{props.children}
		</ArtistsContext.Provider>
	);
};
