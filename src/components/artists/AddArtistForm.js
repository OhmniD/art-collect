import { useState, useContext } from "react";
import { API } from "aws-amplify";
import { createArtist } from "../../graphql/mutations";
import { ArtistsContext } from "../../providers/ArtistProvider";

const AddArtist = ({ artists, setArtists, open, setOpen, cancelButtonRef }) => {
  const [formData, setFormData] = useState({});
  const { artistCount, setArtistCount } = useContext(ArtistsContext);

  const handleChange = (evt) => {
    formData[evt.target.id] = evt.target.value;
    setFormData(formData);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const artist = {
      name: formData.name,
      artistStartYear: formData.artistStartYear,
      artistEndYear: formData.artistEndYear,
    };

    const addedData = await API.graphql({
      query: createArtist,
      variables: { input: artist },
    });

    // await setFormData({});
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    Array.from(document.querySelectorAll("select")).forEach(
      (input) => (input.value = "default")
    );

    await setArtists([...artists, addedData.data.createArtist]);
    setArtistCount(artistCount + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="flex text-sm font-medium text-gray-700">
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
        className="flex text-sm font-medium text-gray-700 mt-1"
      >
        Artist start year
      </label>
      <div className="mt-1">
        <input
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
        className="flex text-sm font-medium text-gray-700 mt-1"
      >
        Artist end year
      </label>
      <div className="mt-1">
        <input
          onChange={handleChange}
          type="number"
          name="artistEndYear"
          id="artistEndYear"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="2021"
        />
      </div>

      <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <button
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
          onClick={() => setOpen(false)}
        >
          Add artist
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

export default AddArtist;
