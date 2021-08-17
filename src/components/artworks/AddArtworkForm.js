import { useState, useContext } from "react";
import { API } from "aws-amplify";
import { createArtwork } from "../../graphql/mutations";
import S3ImageUpload from "./S3ImageUpload";
import { ArtworksContext } from "../../providers/ArtworkProvider";
// import { Artwork } from "../../models";

const AddArtwork = ({
  artists,
  mediums,
  collection,
  artworks,
  setArtworks,
  open,
  setOpen,
  cancelButtonRef,
}) => {
  const [formData, setFormData] = useState({});
  const { artworkCount, setArtworkCount } = useContext(ArtworksContext);

  const handleChange = (evt) => {
    formData[evt.target.id] = evt.target.value;
    setFormData(formData);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const artist = artists.find((artist) => artist.id === formData.artist);

    const randomNumber = Math.floor(Math.random() * 100000);
    const referenceNumber =
      artist.name
        .split(" ")
        .map((name) => name.substr(0, 2).toUpperCase())
        .reverse()
        .join("") + randomNumber;

    const artwork = {
      title: formData.title,
      dimensions: formData.dimensions,
      collectionID: collection.id,
      mediumID: formData.medium,
      artistID: formData.artist,
      referenceNumber: referenceNumber,
      year: formData.year,
      type: formData.type,
      signed: formData.signed === "on" ? true : false,
    };

    const addedData = await API.graphql({
      query: createArtwork,
      variables: { input: artwork },
    });

    // const addedData = await DataStore.save(new Artwork(artwork));

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    Array.from(document.querySelectorAll("select")).forEach(
      (input) => (input.value = "default")
    );

    setArtworks([...artworks, addedData.data.createArtwork]);
    setArtworkCount(artworkCount + 1);
  };

  const artistOptions = artists.map((artist, index) => {
    return (
      <option value={artist.id} key={index}>
        {artist.name}
      </option>
    );
  });

  const mediumOptions = mediums.map((medium, index) => {
    return (
      <option value={medium.id} key={index}>
        {medium.medium}
      </option>
    );
  });

  return (
    <form
      onSubmit={
        !formData.medium || !formData.artist
          ? () => alert("Must select an artist and medium")
          : handleSubmit
      }
    >
      <label
        htmlFor="title"
        className="flex text-sm font-medium text-gray-700t"
      >
        Title
      </label>
      <div className="mt-1">
        <input
          required
          onChange={handleChange}
          type="text"
          name="title"
          id="title"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="The Physical Impossibility of Death in the Mind of Someone Living"
        />
      </div>
      <label
        htmlFor="dimensions"
        className="flex text-sm font-medium text-gray-700 mt-1"
      >
        Dimensions
      </label>
      <div className="mt-1">
        <input
          required
          onChange={handleChange}
          type="text"
          name="dimensions"
          id="dimensions"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-auto sm:text-sm border-gray-300 rounded-md"
          placeholder="W mm x H mm x D mm"
        />
      </div>
      <label
        htmlFor="year"
        className="flex text-sm font-medium text-gray-700 mt-1"
      >
        Year
      </label>
      <div className="mt-1">
        <input
          required
          onChange={handleChange}
          type="number"
          name="year"
          id="year"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-auto sm:text-sm border-gray-300 rounded-md"
          placeholder="2021"
        />
      </div>
      <label
        htmlFor="type"
        className="flex text-sm font-medium text-gray-700 mt-1"
      >
        Type
      </label>
      <div className="mt-1">
        <input
          required
          onChange={handleChange}
          type="text"
          name="type"
          id="type"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-auto sm:text-sm border-gray-300 rounded-md"
          placeholder="Sculpture"
        />
      </div>
      <div className="relative flex items-start">
        <div className="mt-2 text-sm">
          <div className="flex items-center h-5">
            <input
              onChange={handleChange}
              id="signed"
              aria-describedby="signed-description"
              name="signed"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="signed" className="ml-3 font-sm text-gray-700">
              Signed by artist?
            </label>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="artist"
          className="flex text-sm font-medium text-gray-700 mt-1"
        >
          Artist
        </label>
        <select
          required
          onChange={handleChange}
          id="artist"
          name="artist"
          className="mt-1 block w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option disabled value selected required>
            -- Select an artist --
          </option>
          {artistOptions}
        </select>
      </div>
      <div>
        <label
          htmlFor="medium"
          className="flex text-sm font-medium text-gray-700 mt-1"
        >
          Medium
        </label>
        <select
          required
          onChange={handleChange}
          id="medium"
          name="medium"
          className="mt-1 block w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option disabled value selected required>
            -- Select a medium --
          </option>
          {mediumOptions}
        </select>
      </div>

      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <button
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
          onClick={() => setOpen(false)}
        >
          Add artwork
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
          onClick={() => setOpen(false)}
          ref={cancelButtonRef}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddArtwork;
