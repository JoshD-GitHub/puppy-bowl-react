import ListRender from "./components/ListRender";
import PuppyRender from "./components/PuppyRender";
import { useEffect, useState } from "react";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    const fetchAPI = async() => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players/${id}`);
      const data = await response.json();
      const puppies = data.data.players;
			console.log('players', puppies)
      setPlayers(puppies);
    };
    fetchAPI();
  }, []);

  return (
    <>
      
      {id ? <PuppyRender id={id} setId={setId}/> : <ListRender players={players} setId={setId} />}
    </>
  );
};

export default App;
