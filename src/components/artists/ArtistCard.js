import { LibraryIcon, PencilAltIcon } from "@heroicons/react/solid";
import { ArtworkProvider } from "../../providers/ArtworkProvider";
import { AmplifyS3Album, AmplifyS3Image } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import placeholder from "../../static/assets/thumbnail-placeholder.png";

const ArtistCard = ({ artist, artistWorks, artistImage }) => {
  const artworks = [...artistWorks];

  const artistActiveYears = () => {
    if (artist.artistStartYear && artist.artistEndYear) {
      return `${artist.artistStartYear} to ${artist.artistEndYear}`;
    } else if (artist.artistStartYear) {
      return `${artist.artistStartYear} to present`;
    } else {
      return "No active years entered";
    }
  };
  return (
    <li
      key={artist.id}
      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div className="flex-1 flex flex-col p-8">
        {artistImage ? (
          <AmplifyS3Image
            key={artistImage.thumbnail.key}
            imgKey={artistImage.thumbnail.key.replace("public/", "")}
          />
        ) : (
          <img src={placeholder} alt=""></img>
        )}
        <h3 className="mt-6 text-gray-900 text-sm font-medium">
          {artist.name}
        </h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-gray-500 text-sm">{artistActiveYears()}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
              {artistWorks.length} artworks
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <button className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <LibraryIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <Link
                to={{
                  pathname: `/artworks`,
                  state: { artworks },
                }}
              >
                <span className="ml-3">View artworks</span>
              </Link>
            </button>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <button className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <PencilAltIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">Edit details</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ArtistCard;
