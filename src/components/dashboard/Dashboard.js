import { useContext } from "react";
import DashboardStats from "./DashboardStats";
import { ArtistsContext } from "../../providers/ArtistProvider";
import { ArtworksContext } from "../../providers/ArtworkProvider";
import { MediumsContext } from "../../providers/MediumProvider";

export default function Dashboard() {
	const { artistCount } = useContext(ArtistsContext);
	const { artworkCount } = useContext(ArtworksContext);
	const { mediumCount } = useContext(MediumsContext);

	const counts = [
		{ name: "Total Artworks", count: artworkCount },
		{ name: "Total Artists", count: artistCount },
		{ name: "Total Mediums", count: mediumCount },
	];

	const dashboardNodes = counts.map((item, index) => {
		return <DashboardStats key={index} name={item.name} count={item.count} />;
	});

	return (
		<div>
			<header>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold leading-tight text-gray-900">
						Dashboard
					</h1>
				</div>
			</header>
			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
					{dashboardNodes}
				</dl>
			</div>
		</div>
	);
}
