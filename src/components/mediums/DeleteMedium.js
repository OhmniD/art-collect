import { TrashIcon } from "@heroicons/react/solid";
import { deleteMedium } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { ArtworksContext } from "../../providers/ArtworkProvider";
import { MediumsContext } from "../../providers/MediumProvider";
import { useContext, useState } from "react";
import DeleteWarningModal from "./DeleteWarningModal";

const DeleteMedium = ({ medium }) => {
	const { artworks } = useContext(ArtworksContext);
	const [open, setOpen] = useState(false);
	const { mediums, setMediums, mediumCount, setMediumCount } =
		useContext(MediumsContext);

	const handleDeleteClick = async () => {
		const artworksWithMedium = artworks.filter(
			(artwork) => artwork.mediumID === medium.id
		);

		if (artworksWithMedium.length === 0) {
			await API.graphql({
				query: deleteMedium,
				variables: { input: { id: medium.id } },
			});

			const tempArray = [...mediums];
			tempArray.splice(
				tempArray.findIndex((item) => item.id === medium.id),
				1
			);
			setMediums(tempArray);
			setMediumCount(mediumCount - 1);
		} else {
			setOpen(true);
		}
	};

	return (
		<div>
			<button
				type="button"
				onClick={handleDeleteClick}
				className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
			>
				<TrashIcon className="mr-3 -ml-1 h-5 w-5" aria-hidden="true" />
				Delete
			</button>
			<DeleteWarningModal open={open} setOpen={setOpen} />
		</div>
	);
};

export default DeleteMedium;
