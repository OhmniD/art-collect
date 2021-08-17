import { TrashIcon } from "@heroicons/react/solid";
import { Storage } from "aws-amplify";
import { deleteImage } from "../../graphql/mutations";
import { deleteArtwork } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { ArtworksContext } from "../../providers/ArtworkProvider";
import { useContext } from "react";

const DeleteArtwork = ({ artworkImages, artwork }) => {
  const { artworks, setArtworks } = useContext(ArtworksContext);

  const handleDeleteClick = async () => {
    artworkImages.map(async (image) => {
      console.log(image);
      await Storage.remove(image.thumbnail.key.replace("public/", ""))
        .then(console.log("Thumbnail deleted"))
        .catch((err) => console.log(err));
      await Storage.remove(image.fullsize.key.replace("public/", ""))
        .then(console.log("Full size image deleted"))
        .catch((err) => console.log(err));
      await API.graphql({
        query: deleteImage,
        variables: { input: { id: image.id } },
      });
    });
    await API.graphql({
      query: deleteArtwork,
      variables: { input: { id: artwork.id } },
    });

    const tempArray = [...artworks];
    tempArray.splice(
      tempArray.findIndex((item) => item.id === artwork.id),
      1
    );
    setArtworks(tempArray);
  };

  return (
    <button
      type="button"
      onClick={handleDeleteClick}
      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      <TrashIcon className="mr-3 -ml-1 h-5 w-5" aria-hidden="true" />
      Delete
    </button>
  );
};

export default DeleteArtwork;
