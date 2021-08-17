import { useContext, useEffect, useState } from "react";
import ArtworkListView from "./ArtworkListView";
import { ArtistsContext } from "../../providers/ArtistProvider";
import { ArtworksContext } from "../../providers/ArtworkProvider";
import { MediumsContext } from "../../providers/MediumProvider";
import { CollectionContext } from "../../providers/CollectionProvider";
import { ImagesContext } from "../../providers/ImageProvider";
import AddArtworkModal from "./AddArtworkModal";
import { useLocation } from "react-router";

export default function Artworks(props) {
  const { artists } = useContext(ArtistsContext);
  const { artworks, setArtworks } = useContext(ArtworksContext);
  const { mediums } = useContext(MediumsContext);
  const { collection } = useContext(CollectionContext);
  const { images } = useContext(ImagesContext);
  // const linked = useLocation().state;

  const [open, setOpen] = useState(false); //sets state of add artwork modal
  const [artworkNodes, setArtworkNodes] = useState([]);
  // if (linked.artworks != null) {
  //   console.log("Artwork props here!");
  // } else {
  //   console.log("No props passed down");
  // }

  useEffect(() => {
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
          artwork={artwork}
          artist={artist}
          medium={medium}
          images={images}
        />
      );
    });
    setArtworkNodes(artworkNodes);
  }, [images, artworks, mediums, artists]);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Artworks
        </h1>

        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex items-center px-4 py-2 mb-5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add artwork
        </button>
      </div>
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
                      Image
                    </th>
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
                      Dimensions
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
        <AddArtworkModal
          artists={artists}
          mediums={mediums}
          collection={collection}
          artworks={artworks}
          setArtworks={setArtworks}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
}
