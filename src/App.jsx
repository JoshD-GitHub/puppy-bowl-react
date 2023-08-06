import { useEffect, useState } from "react";
// import PuppyRender from "./components/PuppyRender";

const App = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchAPI = async() => {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players');
      const data = await response.json();
      const puppies = data.data.players;
      setPlayers(puppies);
    };
    fetchAPI();
  }, []);

  console.log('players', players)

  return (
    <>
      {players.map((player) => <>
        <h1 key={player.id}>{player.name}</h1>
        <img alt={player.name} src={player.imageUrl} />
        <h3>{player.breed}</h3>
        <h3>{player.status}</h3>
        <button>Learn More</button>
      </>)}
    </>
  );
};

export default App;
