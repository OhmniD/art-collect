import { useContext, useState } from "react";
// import AddArtistModal from "./AddArtistModal";
import { ArtistsContext } from "../../providers/ArtistProvider";
import { ArtworksContext } from "../../providers/ArtworkProvider";
import AddArtistModal from "./AddArtistModal";
import ArtistCard from "./ArtistCard";

export default function Artists() {
  const { artists, setArtists } = useContext(ArtistsContext);
  const { artworks, setArtworks } = useContext(ArtworksContext);

  const [open, setOpen] = useState(false); //sets state of add artist modal

  const artistNodes = artists.map((artist) => {
    const artistWorks = artworks.filter(
      (artwork) => artwork.artistID === artist.id
    );
    return <ArtistCard artist={artist} artistWorks={artistWorks} />;
  });

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Artists
        </h1>

        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex items-center px-4 py-2 mb-5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add artist
        </button>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {artistNodes}
      </ul>
      <AddArtistModal
        artists={artists}
        setArtists={setArtists}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
