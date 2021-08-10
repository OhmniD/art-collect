import "./App.css";
import { useState, useEffect, createContext } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Main from "./containers/shell/Main";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import {
	createCollection,
	createArtist,
	createArtwork,
	createMedium,
	updateArtwork,
} from "./graphql/mutations";
import { listCollections, listArtworks, listArtists, listMediums } from "./graphql/queries";
import { DataStore } from "@aws-amplify/datastore";
import { Medium, Artwork, Artist } from "./models";

export const CollectionContext = createContext();

function App() {
	const [collection, setCollection] = useState({});
	const [artworks, setArtworks] = useState([])
	const [artists, setArtists] = useState([])
	const [mediums, setMediums] = useState([])
	const [isLoaded, setIsLoaded] = useState(false)

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
			setCollection(collection.data.listCollections.items[0])
		} else {
			setCollection(collection.data.listCollections.items[0])
			setArtworks(artworks.data.listArtworks.items)
			setArtists(artists.data.listArtists.items)
			setMediums(mediums.data.listMediums.items)
			setIsLoaded(true)
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

	const handleClick = async () => {
		// await Auth.currentAuthenticatedUser().then((user) => {
		//   console.log(user.username);
		// });
		// await API.graphql(graphqlOperation(createCollection, {input: {}}));

		const medium1 = { medium: "Pen on paper, Gold leaf" };
		const artist1 = { name: "Becki Hiscocks", artistStartYear: 1998 };

		const medium = await DataStore.save(new Medium(medium1));

		const artist = await DataStore.save(new Artist(artist1));

		// const medium = await API.graphql(graphqlOperation(createMedium, {input: medium1}))
		// const artist =  await API.graphql(graphqlOperation(createArtist, {input: artist1}))
		// console.log(artist.data.createArtist)
		// await console.log(medium.id)
		const artwork1 = {
			title: "Dred God",
			collectionID: collection,
			mediumID: medium.id,
			artistID: artist.id,
		};
		// const artwork = await API.graphql(graphqlOperation(createArtwork, artwork1))
		await DataStore.save(new Artwork(artwork1));

		// await API.graphql(graphqlOperation(updateArtwork, {input: {title: "Cock, Muff, bumhole"}}))
	};

	return (
		<main>
			<CollectionContext.Provider value={{collection, artworks, artists, mediums, isLoaded}}>
			<Main />
			</CollectionContext.Provider>
			{/* <button onClick={handleClick}>Create Stuff</button> */}
		</main>
	);
}

export default withAuthenticator(App);
