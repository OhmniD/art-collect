import { useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Artist } from "../../models";

const AddArtist = ({ artists }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (evt) => {
    formData[evt.target.id] = evt.target.value;
    setFormData(formData);
  };

  const handleSubmit = async () => {
    const artist = {
      name: formData.name,
      artistStartYear: formData.artistStartYear.parseInt,
      artistEndYear: formData.artistEndYear.parseInt,
    };
    const addedData = await DataStore.save(new Artist(artist));
    setFormData({});
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("select")).forEach(
      (input) => (input.value = "default")
    );
    artists = [...artists, { ...addedData }]; //spread operater to convert Model to standard JS object
    console.log(artists);
  };

  return (
    <form>
      <h2 class="py-3">Add an artist</h2>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name
      </label>
      <div className="mt-1">
        <input
          required
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Takashi Murakami"
        />
      </div>

      <label
        htmlFor="artistStartYear"
        className="block text-sm font-medium text-gray-700"
      >
        Artist start year
      </label>
      <div className="mt-1">
        <input
          required
          onChange={handleChange}
          type="number"
          name="artistStartYear"
          id="artistStartYear"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="1998"
        />
      </div>

      <label
        htmlFor="artistEndYear"
        className="block text-sm font-medium text-gray-700"
      >
        Artist end year
      </label>
      <div className="mt-1">
        <input
          required
          onChange={handleChange}
          type="number"
          name="artistEndYear"
          id="artistEndYear"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="2021"
        />
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

export default AddArtist;
