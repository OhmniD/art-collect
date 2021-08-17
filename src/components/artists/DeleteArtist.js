import { TrashIcon } from "@heroicons/react/solid";
import { deleteArtist } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { ArtworksContext } from "../../providers/ArtworkProvider";
import { ArtistsContext } from "../../providers/ArtistProvider";
import { useContext, useState } from "react";
import DeleteWarningModal from "./DeleteWarningModal";

const DeleteArtist = ({ artist }) => {
	const { artworks } = useContext(ArtworksContext);
	const [open, setOpen] = useState(false);
	const { artists, setArtists, artistCount, setArtistCount } =
		useContext(ArtistsContext);

	const handleDeleteClick = async () => {
		const artworksWithArtist = artworks.filter(
			(artwork) => artwork.artistID === artist.id
		);

		if (artworksWithArtist.length === 0) {
			await API.graphql({
				query: deleteArtist,
				variables: { input: { id: artist.id } },
			});

			const tempArray = [...artists];
			tempArray.splice(
				tempArray.findIndex((item) => item.id === artist.id),
				1
			);
			setArtists(tempArray);
			setArtistCount(artistCount - 1);
		} else {
			setOpen(true);
		}
	};

	return (
		<div>
			<button
				type="button"
				onClick={handleDeleteClick}
				className="mt-2 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
			>
				<TrashIcon className="mr-3 -ml-1 h-5 w-5" aria-hidden="true" />
				Delete
			</button>
			<DeleteWarningModal open={open} setOpen={setOpen} />
		</div>
	);
};

export default DeleteArtist;
