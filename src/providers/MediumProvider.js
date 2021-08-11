import { useState, createContext, useEffect } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listMediums } from "../graphql/queries";

export const MediumsContext = createContext();

export const MediumProvider = (props) => {
	const [mediums, setMediums] = useState([]);

	const getMediums = async () => {
		const owner = await Auth.currentAuthenticatedUser();
		const filter = { owner: { eq: owner } };

		const mediums = await API.graphql(graphqlOperation(listMediums), {
			variables: { filter: filter },
		});

		setMediums(mediums.data.listMediums.items);
	};

	useEffect(() => {
		getMediums();
	}, []);

	return (
		<MediumsContext.Provider value={{ mediums }}>
			{props.children}
		</MediumsContext.Provider>
	);
};
