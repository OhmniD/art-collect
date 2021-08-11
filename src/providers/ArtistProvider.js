import { useState, createContext, useEffect } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listArtists } from "../graphql/queries";

export const ArtistsContext = createContext();

export const ArtistProvider = (props) => {
	const [artists, setArtists] = useState([]);

	const getArtists = async () => {
		const owner = await Auth.currentAuthenticatedUser();
		const filter = { owner: { eq: owner } };

		const artists = await API.graphql(graphqlOperation(listArtists), {
			variables: { filter: filter },
		});

		setArtists(artists.data.listArtists.items);
	};

	useEffect(() => {
		getArtists();
	}, []);

	return (
		<ArtistsContext.Provider value={{ artists }}>
			{props.children}
		</ArtistsContext.Provider>
	);
};
