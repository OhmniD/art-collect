import { withRouter } from "react-router";

const ArtworkListView = ({ key, title, artist, medium, history }) => {
	const handleNavClick = (page) => (event) => history.push(page);

	return (
		<tr key={key} onClick={handleNavClick("/artwork")}>
			<td className="px-6 py-4 whitespace-nowrap">
				<div className="flex items-center">
					<div className="flex-shrink-0 h-10 w-10">
						<img
							className="h-10 w-10 rounded-full"
							// src={person.image}
							alt=""
						/>
					</div>
					<div className="ml-4">
						<div className="text-sm font-medium text-gray-900">{title}</div>
						<div className="text-sm text-gray-500">{/* {artist.id} */}</div>
					</div>
				</div>
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<div className="text-sm text-gray-900">{artist.name}</div>
				<div className="text-sm text-gray-500">{/* {person.department} */}</div>
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
					{medium.medium}
				</span>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{/* {person.role} */}
			</td>
		</tr>
	);
};

export default withRouter(ArtworkListView);
