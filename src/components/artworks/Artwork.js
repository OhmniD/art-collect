import { useLocation } from "react-router";
import { useState, useContext } from "react";
import Slideover from "./slideovers/Slideover";
import ImagesContent from "./slideovers/ImagesContent";
import ArtworkInfo from "./ArtworkInfo";
import { ArtworkImagesContext } from "../../providers/ArtworkImageProvider";

import {
	PhotographIcon,
	CashIcon,
	LocationMarkerIcon,
	CurrencyPoundIcon,
	LibraryIcon,
	DocumentTextIcon,
} from "@heroicons/react/outline";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Artwork() {
	const { artworkImages, setArtworkImages } = useContext(ArtworkImagesContext);

	const { artwork, artist, medium } = useLocation().state;

	const [navigation, setNavigation] = useState([
		{
			name: "Images",
			icon: PhotographIcon,
			current: false,
			id: "artwork-images",
			component: <ImagesContent artwork={artwork} />,
		},
		{
			name: "Loans & Consignment",
			icon: CashIcon,
			current: false,
			id: "loans-consignment",
		},
		{
			name: "Provenance",
			icon: LibraryIcon,
			current: false,
			id: "provenance",
		},
		{
			name: "Location & Shipping",

			icon: LocationMarkerIcon,
			current: false,
			id: "location-shipping",
		},
		{
			name: "Financial",
			icon: CurrencyPoundIcon,
			current: false,
			id: "financial",
		},
		{ name: "Notes", icon: DocumentTextIcon, current: false, id: "notes" },
	]);
	const [slideoverOpen, setSlideoverOpen] = useState(false);
	const [slideoverSection, setSlideoverSection] = useState({});

	const handleClick = async (evt) => {
		const item = await navigation.find(function (item) {
			return evt.target.id === item.id;
		});

		item.current = true;
		setNavigation([...navigation], item);

		await setSlideoverSection(item);
		await setSlideoverOpen(!slideoverOpen);
	};

	return (
		<div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
			<aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
				<nav className="space-y-1">
					{navigation.map((item) => (
						<button
							key={item.id}
							id={item.id}
							onClick={handleClick}
							className={classNames(
								item.current
									? "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white"
									: "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
								"group rounded-md px-3 py-2 flex items-center text-sm font-medium"
							)}
							aria-current={item.current ? "page" : undefined}
						>
							<item.icon
								className={classNames(
									item.current
										? "text-indigo-500 group-hover:text-indigo-500"
										: "text-gray-400 group-hover:text-gray-500",
									"flex-shrink-0 -ml-1 mr-3 h-6 w-6"
								)}
								aria-hidden="true"
							/>
							<span className="truncate" id={item.id}>
								{item.name}
							</span>
						</button>
					))}
				</nav>
			</aside>

			<div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
				<ArtworkInfo
					artwork={artwork}
					artist={artist}
					medium={medium}
					artworkImages={artworkImages}
				/>
				<Slideover
					slideoverOpen={slideoverOpen}
					setSlideoverOpen={setSlideoverOpen}
					slideoverSection={slideoverSection}
					setSlideoverSection={setSlideoverSection}
					navigation={navigation}
					setNavigation={setNavigation}
				/>
			</div>
		</div>
	);
}
