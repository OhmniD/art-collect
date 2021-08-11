import { useState, createContext, useEffect } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createCollection } from "../graphql/mutations";
import { listCollections } from "../graphql/queries";

export const CollectionContext = createContext();

export const CollectionProvider = (props) => {
	const [collection, setCollection] = useState([]);

	const getCollection = async () => {
		const owner = await Auth.currentAuthenticatedUser();
		const filter = { owner: { eq: owner } };

		const collection = await API.graphql(graphqlOperation(listCollections), {
			variables: { filter: filter },
		});

		if (collection.data.listCollections.scannedCount === 0) {
			//Test this with a new user!
			const newCollection = makeCollection();
			setCollection(newCollection.data.listCollections.items[0]);
		} else {
			setCollection(collection.data.listCollections.items[0]);
		}
	};

	const makeCollection = async () => {
		await API.graphql(graphqlOperation(createCollection, { input: {} }));
	};

	useEffect(() => {
		getCollection();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<CollectionContext.Provider value={{ collection, setCollection }}>
			{props.children}
		</CollectionContext.Provider>
	);
};
