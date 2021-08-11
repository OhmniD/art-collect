import { useState } from "react";
import ArtistFormInput from "./ArtistFormInput";

const AddArtwork = ({ artists }) => {
	const [formData, setFormData] = useState({});

	const onChange = (evt) => {
		formData[evt.target.id] = evt.target.value;
		setFormData(formData);
	};

	const onChangeArtist = (evt) => {
		formData[evt.target.id] = evt.target.value;
		setFormData(formData);
	};

	return (
		<form autocomplete="off">
			<label
				htmlFor="title"
				className="block text-sm font-medium text-gray-700"
			>
				Title
			</label>
			<div className="mt-1">
				<input
					onChange={onChange}
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
					onChange={onChange}
					type="text"
					name="dimensions"
					id="dimensions"
					className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					placeholder="W mm x H mm x D mm"
				/>
			</div>
			<label
				htmlFor="artist"
				className="block text-sm font-medium text-gray-700"
			>
				Artist
			</label>
			<div className="mt-1">
				<input
					type="text"
					name="artist"
					id="artist"
					className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					placeholder="Tracy Emin"
				/>
			</div>
			<label
				htmlFor="medium"
				className="block text-sm font-medium text-gray-700"
			>
				Medium
			</label>
			<div className="mt-1">
				<input
					type="text"
					name="medium"
					id="medium"
					className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					placeholder="Oil on canvas"
				/>
			</div>
		</form>
	);
};

export default AddArtwork;
