import { useContext } from "react";
import { CollectionContext } from "../../App";
import ArtworkListView from "./ArtworkListView";
import AddArtwork from "./AddArtwork";
import AddArtist from "./AddArtist";
import AddMedium from "./AddMedium";

export default function Artworks() {
  const { collection, mediums, artists, artworks, isLoaded } =
    useContext(CollectionContext);

  const artworkNodes = artworks.map((artwork) => {
    const artist = artists.find(function (artist) {
      return artist.id === artwork.artistID;
    });

    const medium = mediums.find(function (medium) {
      return medium.id === artwork.mediumID;
    });
    return (
      <ArtworkListView
        key={artwork.id}
        title={artwork.title}
        artist={artist}
        medium={medium}
      />
    );
  });

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Artist
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Medium
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TBC
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {artworkNodes}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddArtwork
        artists={artists}
        mediums={mediums}
        collection={collection}
        artworks={artworks}
      />

      <AddArtist artists={artists} />
      <AddMedium mediums={mediums} />
    </div>
  );
}
