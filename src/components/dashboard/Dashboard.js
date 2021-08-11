import { useContext, useEffect, useState } from "react";
import { CollectionContext } from "../../App";
import DashboardStats from "./DashboardStats";

export default function Dashboard() {
	const { mediums, artists, artworks, isLoaded } =
		useContext(CollectionContext);

	const [dashboardNodes, setDashboardNodes] = useState([]);

	const getCounts = () => {
		const counts = [
			{ name: "Total Artworks", stat: artworks.length },
			{ name: "Total Artists", stat: artists.length },
			{ name: "Total Mediums", stat: mediums.length },
		];
		return counts.map((item, index) => {
			return <DashboardStats key={index} name={item.name} stat={item.stat} />;
		});
	};

	useEffect(() => {
		if (isLoaded !== false) {
			const dashboardNodes = getCounts();
			setDashboardNodes(dashboardNodes);
		}
	}, [isLoaded]);

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
