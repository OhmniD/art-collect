import { withAuthenticator } from "@aws-amplify/ui-react";
import { Route } from "react-router";
// import { useHistory } from "react-router-dom";
// import { useEffect, useState } from "react";
import Navbar from "./components/navigation/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Artworks from "./components/artworks/Artworks";
import Artwork from "./components/artworks/Artwork";
import Artists from "./components/artists/Artists";
import Mediums from "./components/mediums/Mediums";
import { CollectionProvider } from "./providers/CollectionProvider";
import { ArtworkProvider } from "./providers/ArtworkProvider";
import { ArtistProvider } from "./providers/ArtistProvider";
import { MediumProvider } from "./providers/MediumProvider";
import { ImageProvider } from "./providers/ImageProvider";

function App() {
  return (
    <div>
      <ImageProvider>
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
                  <Route path="/mediums" component={Mediums} />
                </main>
              </CollectionProvider>
            </ArtworkProvider>
          </ArtistProvider>
        </MediumProvider>
      </ImageProvider>
    </div>
  );
}

export default withAuthenticator(App);
