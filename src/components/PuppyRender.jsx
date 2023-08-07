import { useEffect, useState } from "react";

const PuppyRender = ({ id, setId }) => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchAPI = async() => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players/${id}`);
      const data = await response.json();
      const puppies = data.data.player;
      setPlayer(puppies);
    };
    fetchAPI();
  }, []);

	return (
    <>
      
        <div id={player.name}>
          <h1 key={player.name}>{player.name}</h1>
          <img alt={player.name} src={player.imageUrl} />
          <ul>
            <li>{player.breed}</li>
            <li>{player.status}</li>
          </ul>
          <button onClick={() => setId('')} >Go Back</button>
        </div>
    </>
  );
};

export default PuppyRender;