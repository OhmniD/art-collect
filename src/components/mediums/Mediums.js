import { useContext, useState } from "react";
import { MediumsContext } from "../../providers/MediumProvider";
import { ArtworksContext } from "../../providers/ArtworkProvider";
import Medium from "./Medium";
import AddMediumModal from "./AddMediumModal";

export default function Mediums() {
	const { mediums, setMediums } = useContext(MediumsContext);
	const { artworks } = useContext(ArtworksContext);

	const [open, setOpen] = useState(false); //sets state of add medium modal

	const mediumNodes = mediums.map((medium, index) => {
		const mediumWorks = artworks.filter(
			(artwork) => artwork.mediumID === medium.id
		);

		return (
			<Medium
				medium={medium}
				key={medium.id}
				index={index}
				mediumWorks={mediumWorks}
			/>
		);
	});

	return (
		<div className="flex flex-col">
			<div className="flex justify-between">
				<h1 className="text-3xl font-bold leading-tight text-gray-900">
					Mediums
				</h1>

				<button
					onClick={() => setOpen(!open)}
					type="button"
					className="inline-flex items-center px-4 py-2 mb-5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Add medium
				</button>
			</div>
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
										Medium
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Number of artworks
									</th>
								</tr>
							</thead>
							<tbody>{mediumNodes}</tbody>
						</table>
					</div>
				</div>
			</div>
			<AddMediumModal
				mediums={mediums}
				setMediums={setMediums}
				open={open}
				setOpen={setOpen}
			/>
		</div>
	);
}
