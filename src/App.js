import "./App.css";
import { useState, useEffect, createContext } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Main from "./containers/shell/Main";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createCollection } from "./graphql/mutations";
import {
	listCollections,
	listArtworks,
	listArtists,
	listMediums,
} from "./graphql/queries";

export const CollectionContext = createContext();

function App() {
	const [collection, setCollection] = useState({});
	const [artworks, setArtworks] = useState([]);
	const [artists, setArtists] = useState([]);
	const [mediums, setMediums] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getCollection();
	}, []);

	const getCollection = async () => {
		const owner = await Auth.currentAuthenticatedUser();

		//change to use DataStore.query rather than API.graphql??
		const filter = { owner: { eq: owner } };

		const collection = await API.graphql(graphqlOperation(listCollections), {
			variables: { filter: filter },
		});

		const artworks = await API.graphql(graphqlOperation(listArtworks), {
			variables: { filter: filter },
		});

		const artists = await API.graphql(graphqlOperation(listArtists), {
			variables: { filter: filter },
		});

		const mediums = await API.graphql(graphqlOperation(listMediums), {
			variables: { filter: filter },
		});

		if (collection.data.listCollections.items.length === 0) {
			//Test this with a new user!
			const collection = makeCollection();
			setCollection(collection.data.listCollections.items[0]);
		} else {
			setCollection(collection.data.listCollections.items[0]);
			setArtworks(artworks.data.listArtworks.items);
			setArtists(artists.data.listArtists.items);
			setMediums(mediums.data.listMediums.items);
			setIsLoaded(true);
		}
	};

	// const getArtworks = () => {
	// 	const artworks = DataStore.query(Artwork, c => c.collectionID('eq', collection.id))
	// 	setArtworks(artworks)
	// }

	// const getArtists = () => {
	// 	const artists = DataStore.query(Artist, c => c.collectionID('eq', collection.id))
	// 	setArtists(artists)
	// 	console.log(artists)
	// }

	const makeCollection = async () => {
		await API.graphql(graphqlOperation(createCollection, { input: {} }));
	};

	return (
		<main>
			<CollectionContext.Provider
				value={{
					collection,
					artworks,
					artists,
					mediums,
					isLoaded,
					setArtworks,
					setArtists,
					setMediums,
				}}
			>
				<Main />
			</CollectionContext.Provider>
		</main>
	);
}

export default withAuthenticator(App);
