import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { withRouter } from "react-router";
import { useState } from "react";
import logo from "../../static/assets/art-collect-logo.png";
import { Auth, Hub } from "aws-amplify";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = (props) => {
	const [navigation, setNavigation] = useState([
		{ name: "Dashboard", page: "/", current: true, id: "dashboard-nav-button" },
		{
			name: "Artworks",
			page: "/artworks",
			current: false,
			id: "artworks-nav-button",
		},
		{
			name: "Artists",
			page: "/artists",
			current: false,
			id: "artists-nav-button",
		},
		{
			name: "Mediums",
			page: "/mediums",
			current: false,
			id: "mediums-nav-button",
		},
	]);

	const [currentPage, setCurrentPage] = useState(navigation[0]);

	// even though this works it is absolutely terrible - find a better way to do it
	const handleNavClick = (page) => async (evt) => {
		currentPage.current = false;
		setNavigation([...navigation], currentPage);
		const item = await navigation.find(function (item) {
			return evt.target.id === item.id;
		});

		item.current = true;
		setNavigation([...navigation], item);
		setCurrentPage(item);
		props.history.push(page);
	};

	const handleSignOutButtonClick = async () => {
		try {
			await Auth.signOut();
			Hub.dispatch("UI Auth", {
				// channel must be 'UI Auth'
				event: "AuthStateChange", // event must be 'AuthStateChange'
				message: "signedout", // message must be 'signedout'
			});
		} catch (error) {
			console.log("error signing out: ", error);
		}
	};

	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex px-2 lg:px-0">
								<div className="flex-shrink-0 flex items-center">
									<img
										className="block lg:hidden h-6 w-auto"
										src={logo}
										alt="Art Collect Logo"
									/>
									<img
										className="hidden lg:block h-9 w-auto mr-2"
										src={logo}
										alt="Art Collect Logo"
									/>
								</div>
								<div className="hidden lg:ml-6 lg:flex lg:space-x-8">
									{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

									{navigation.map((item) => (
										<button
											key={item.id}
											id={item.id}
											onClick={handleNavClick(item.page)}
											className={classNames(
												item.current
													? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium mt-1"
													: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium mt-1"
											)}
											aria-current={item.current ? "page" : undefined}
										>
											{item.name}
										</button>
									))}
								</div>
							</div>
							<div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
								{/* <div className="max-w-lg w-full lg:max-w-xs">
									<label htmlFor="search" className="sr-only">
										Search
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
											<SearchIcon
												className="h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</div>
										<input
											id="search"
											name="search"
											className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											placeholder="Search"
											type="search"
										/>
									</div> 
											</div>*/}
							</div>
							<div className="flex items-center lg:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="hidden lg:ml-4 lg:flex lg:items-center">
								{/* Profile dropdown */}
								<Menu as="div" className="ml-4 relative flex-shrink-0">
									{({ open }) => (
										<>
											<div>
												<Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none">
													<span className="sr-only">Open user menu</span>
													<MenuIcon
														className="block h-7 w-7 mt-1.5"
														aria-hidden="true"
													/>
												</Menu.Button>
											</div>
											<Transition
												show={open}
												as={Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items
													static
													className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
												>
													<Menu.Item>
														{({ active }) => (
															<button
																className={classNames(
																	active ? "bg-gray-100" : "",
																	"flex px-4 py-2 text-sm text-gray-700"
																)}
															>
																Your Profile
															</button>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<button
																className={classNames(
																	active ? "bg-gray-100" : "",
																	"block px-4 py-2 text-sm text-gray-700"
																)}
															>
																Settings
															</button>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<button
																onClick={handleSignOutButtonClick}
																className={classNames(
																	active ? "bg-gray-100" : "",
																	"block px-4 py-2 text-sm text-gray-700"
																)}
															>
																Sign out
															</button>
														)}
													</Menu.Item>
												</Menu.Items>
											</Transition>
										</>
									)}
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="lg:hidden">
						<div className="pt-2 pb-3 space-y-1">
							{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}

							{navigation.map((item) => (
								<button
									key={item.id}
									id={item.id}
									onClick={handleNavClick(item.page)}
									className={classNames(
										item.current
											? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
											: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</button>
							))}
						</div>
						<div className="pt-4 pb-3 border-t border-gray-200">
							<div className="flex items-center px-4"></div>
							<div className=" space-y-1">
								<button className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
									Your Profile
								</button>
								<button className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
									Settings
								</button>
								<button
									onClick={handleSignOutButtonClick}
									className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
								>
									Sign out
								</button>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default withRouter(Navbar);
