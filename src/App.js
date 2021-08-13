import { withAuthenticator } from "@aws-amplify/ui-react";
import { Route } from "react-router";
// import { useHistory } from "react-router-dom";
// import { useEffect, useState } from "react";
import Navbar from "./components/navigation/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Artworks from "./components/artworks/Artworks";
import Artwork from "./components/artworks/Artwork";
import Artists from "./components/artists/Artists";
import { CollectionProvider } from "./providers/CollectionProvider";
import { ArtworkProvider } from "./providers/ArtworkProvider";
import { ArtistProvider } from "./providers/ArtistProvider";
import { MediumProvider } from "./providers/MediumProvider";

function App() {
  //   const [locationKeys, setLocationKeys] = useState([]);
  //   const history = useHistory();

  //   useEffect(() => {
  //     return history.listen((location) => {
  //       if (history.action === "PUSH") {
  //         setLocationKeys([location.key]);
  //       }

  //       if (history.action === "POP") {
  //         if (locationKeys[1] === location.key) {
  //           setLocationKeys(([_, ...keys]) => keys);

  //           // Handle forward event
  //         } else {
  //           setLocationKeys((keys) => [location.key, ...keys]);

  //           // Handle back event
  //         }
  //       }
  //     });
  //   }, [locationKeys]);

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
                <Route path="/artists" component={Artists} />
              </main>
            </CollectionProvider>
          </ArtworkProvider>
        </ArtistProvider>
      </MediumProvider>
    </div>
  );
}

export default withAuthenticator(App);
