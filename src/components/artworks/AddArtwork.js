import { useState } from "react";
import ArtistFormInput from "./ArtistFormInput";
import { DataStore } from "@aws-amplify/datastore";
import { Medium, Artwork, Artist } from "../../models";

const AddArtwork = ({ artists, mediums, collection, artworks }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (evt) => {
    formData[evt.target.id] = evt.target.value;
    setFormData(formData);
  };

  const handleSubmit = async () => {
    const artwork = {
      title: formData.title,
      dimensions: formData.dimensions,
      collectionID: collection.id,
      mediumID: formData.medium,
      artistID: formData.artist,
    };
    const addedData = await DataStore.save(new Artwork(artwork));
    setFormData({});
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    artworks = [...artworks, { ...addedData }]; //spread operater to convert Model to standard JS object
    console.log(artworks);
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
    <form autocomplete="off">
      <h2 class="py-3">Add an artwork</h2>
      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700"
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
        className="block text-sm font-medium text-gray-700"
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
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="W mm x H mm x D mm"
        />
      </div>

      <div>
        <label
          htmlFor="artist"
          className="block text-sm font-medium text-gray-700"
        >
          Artist
        </label>
        <select
          required
          onChange={handleChange}
          id="artist"
          name="artist"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {artistOptions}
        </select>
      </div>

      <div>
        <label
          htmlFor="medium"
          className="block text-sm font-medium text-gray-700"
        >
          Medium
        </label>
        <select
          required
          onChange={handleChange}
          id="medium"
          name="medium"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {mediumOptions}
        </select>
      </div>

      <button
        onClick={handleSubmit}
        type="button"
        className="inline-flex items-center px-4 py-2 mt-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default AddArtwork;
