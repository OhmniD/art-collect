import { useContext } from "react";
import ArtworkListView from "./ArtworkListView";
import AddArtwork from "./AddArtwork";
import { ArtistsContext } from "../../providers/ArtistProvider";
import { ArtworksContext } from "../../providers/ArtworkProvider";
import { MediumsContext } from "../../providers/MediumProvider";
import { CollectionContext } from "../../providers/CollectionProvider";

export default function Artworks() {
	const { artists } = useContext(ArtistsContext);
	const { artworks, setArtworks } = useContext(ArtworksContext);
	const { mediums } = useContext(MediumsContext);
	const collection = useContext(CollectionContext);

	const artworkNodes = artworks.map((artwork) => {
		const artist = artists.find(function (artist) {
			return artist.id === artwork.artistID;
		});

		const medium = mediums.find(function (medium) {
			return medium.id === artwork.mediumID;
		});
		return (
			<ArtworkListView
				key={artwork.id}
				title={artwork.title}
				artist={artist}
				medium={medium}
			/>
		);
	});

	return (
		<div className="flex flex-col">
			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Title
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Artist
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Medium
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										TBC
									</th>
									<th scope="col" className="relative px-6 py-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{artworkNodes}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<AddArtwork
				artists={artists}
				mediums={mediums}
				collection={collection}
				artworks={artworks}
				setArtworks={setArtworks}
			/>
		</div>
	);
}
