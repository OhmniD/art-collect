import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { AmplifyS3Image } from "@aws-amplify/ui-react";
import DeleteArtwork from "./DeleteArtwork";
import placeholder from "../../static/assets/thumbnail-placeholder.png";
import { useContext } from "react";
import { ArtworkImagesContext } from "../../providers/ArtworkImageProvider";

const ArtworkListView = ({ key, artwork, artist, medium }) => {
  // const handleNavClick = (page) => (event) => history.push(page);

  const { artworkImages, setArtworkImages } = useContext(ArtworkImagesContext);

  <ArtworkImagesContext.Provider
    value={{ artworkImages, setArtworkImages }}
  ></ArtworkImagesContext.Provider>;
  return (
    <tr key={key}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-15 w-15">
            {artworkImages[artwork.id].length ? (
              <AmplifyS3Image
                key={artworkImages[artwork.id][0].thumbnail.key}
                imgKey={artworkImages[artwork.id][0].thumbnail.key.replace(
                  "public/",
                  ""
                )}
              />
            ) : (
              <img src={placeholder} alt=""></img>
            )}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <Link
              to={{
                pathname: `/artwork`,
                state: {
                  artwork,
                  artist,
                  medium,
                },
              }}
            >
              <div className="text-sm font-medium text-gray-900">
                {artwork.title}
              </div>
            </Link>
            <div className="text-sm text-gray-500">{/* {artist.id} */}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {artist ? artist.name : null}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {medium ? medium.medium : null}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {artwork.dimensions}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <DeleteArtwork artwork={artwork} artworkImages={artworkImages} />
      </td>
    </tr>
  );
};

export default withRouter(ArtworkListView);
