import { useEffect, useState } from "react";

const PuppyRender = ({ id, setId }) => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players/${id}`
      );
      const data = await response.json();
      const puppies = data.data.player;
      console.log('prp', puppies)
      setPlayer(puppies);
    };
    fetchAPI();
  }, []);

  const deleteAPI = async () => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players/${id}`,
        {
          method: 'DELETE',
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div id={player.name}>
        <h1 key={player.name}>{player.name}</h1>
        <img alt={player.name} src={player.imageUrl} />
        <ul>
          <li>ID: {player.id}</li>
          <li>Breed: {player.breed}</li>
          <li>Status: {player.status}</li>
        </ul>
        <button onClick={() => setId('')}>Go Back</button>
				<button onClick={()=> {
          deleteAPI();
          setId('');
        }} >Delete</button>
      </div>
    </>
  );
};

export default PuppyRender;
