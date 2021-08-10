import { Route } from "react-router";
import Navbar from "./Navbar";
import Dashboard from "../../components/dashboard/Dashboard";
import Artworks from "../../components/artworks/Artworks";

export default function Main({ collection }) {
	return (
		<div>
			<nav>
				<Navbar collection={collection} />
			</nav>

			<div className="py-10">
				<Route path="/" exact component={Dashboard} />
				<Route path="/artworks" component={Artworks} />
			</div>
		</div>
	);
}
