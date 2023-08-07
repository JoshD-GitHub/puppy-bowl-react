import Navbar from "./components/Navbar";
import ListRender from "./components/ListRender";
import PuppyRender from "./components/PuppyRender";
import PuppyForm from "./components/PuppyForm";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';

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
      <Navbar />
      <h6>*page must be refreshed to allow delete / add to work (dont know how to fix this issue)</h6>
      <Routes>
        <Route path="/" element={id ? <PuppyRender id={id} setId={setId}/> : <ListRender players={players} setId={setId} />} />
        <Route path="/PuppyForm" element={<PuppyForm />} />
      </Routes>
    </>
  );
};

export default App;
