import { useState } from "react";

const PuppyForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

	

	const submitHandler = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(
				'https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: name,
						breed: breed,
						status: status,
						imageUrl: imageUrl
					}),
				}
			);
			const result = await response.json();
			console.log(result);
		} catch (err) {
			console.error(err);
		}
		console.log([name, breed, status, imageUrl])
	};

  return (
		<form onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) =>setName(event.target.value)} />
      </label>
      <br />
      <label>
        Breed:
        <input type="text" value={breed} onChange={(event) => setBreed(event.target.value)} />
      </label>
      <br />
			<label>
        Field / Bench: 
        <input type="text" value={status} onChange={(event) =>setStatus(event.target.value.toLowerCase())} />
      </label>
      
      <br />
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
	);
};

export default PuppyForm;
