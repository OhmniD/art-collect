const Medium = ({ medium, index, mediumWorks }) => {
	return (
		<tr key={medium.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
				{medium.medium}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
					{mediumWorks.length}
				</span>
			</td>
		</tr>
	);
};

export default Medium;
