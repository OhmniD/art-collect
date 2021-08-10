const stats = [
	{ name: "Total Subscribers", stat: "71,897" },
	{ name: "Avg. Open Rate", stat: "58.16%" },
	{ name: "Avg. Click Rate", stat: "24.57%" },
];

export default function Dashboard() {
	return (
		<div>
			<header>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold leading-tight text-gray-900">
						Dashboard
					</h1>
				</div>
			</header>

			<main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<h3 className="text-lg leading-6 font-medium text-gray-900">
					Last 30 days
				</h3>
				<dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
					{stats.map((item) => (
						<div
							key={item.name}
							className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
						>
							<dt className="text-sm font-medium text-gray-500 truncate">
								{item.name}
							</dt>
							<dd className="mt-1 text-3xl font-semibold text-gray-900">
								{item.stat}
							</dd>
						</div>
					))}
				</dl>
			</main>
		</div>
	);
}
