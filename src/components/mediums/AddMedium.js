import { useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Medium } from "../../models";

const AddMedium = ({ mediums, setMediums }) => {
	const [formData, setFormData] = useState({});

	const handleChange = (evt) => {
		formData[evt.target.id] = evt.target.value;
		setFormData(formData);
	};

	const handleSubmit = async () => {
		const medium = {
			medium: formData.medium,
		};
		const addedData = await DataStore.save(new Medium(medium));
		setFormData({});
		Array.from(document.querySelectorAll("input")).forEach(
			(input) => (input.value = "")
		);
		setMediums([...mediums, { ...addedData }]); //spread operater to convert Model to standard JS object
	};

	return (
		<form>
			<h2 className="py-3">Add a medium</h2>
			<label
				htmlFor="medium"
				className="block text-sm font-medium text-gray-700"
			>
				Medium
			</label>
			<div className="mt-1">
				<input
					required
					onChange={handleChange}
					type="text"
					name="medium"
					id="medium"
					className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					placeholder="Oil On Canvas"
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

export default AddMedium;
