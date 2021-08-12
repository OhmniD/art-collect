import { withAuthenticator } from "@aws-amplify/ui-react";
import { Route } from "react-router";
import Navbar from "./components/navigation/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Artworks from "./components/artworks/Artworks";
import Artwork from "./components/artworks/Artwork";
import { CollectionProvider } from "./providers/CollectionProvider";
import { ArtworkProvider } from "./providers/ArtworkProvider";
import { ArtistProvider } from "./providers/ArtistProvider";
import { MediumProvider } from "./providers/MediumProvider";

function App() {
	return (
		<div>
			<MediumProvider>
				<ArtistProvider>
					<ArtworkProvider>
						<CollectionProvider>
							<nav>
								<Navbar />
							</nav>

							<main className="py-10 px-10">
								<Route path="/" exact component={Dashboard} />
								<Route path="/artworks" component={Artworks} />
								<Route
									path="/artwork"
									render={(props) => <Artwork {...props} />}
								/>
							</main>
						</CollectionProvider>
					</ArtworkProvider>
				</ArtistProvider>
			</MediumProvider>
		</div>
	);
}

export default withAuthenticator(App);
