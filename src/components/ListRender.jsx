import { useEffect, useState } from "react";

const ListRender = ({ players, setId }) => {
	const [userInput, setUserInput] = useState('');

	const inputHandler = (event) => {
    const input = event.target.value;
    setUserInput(input);
	};

	const playersFilter = () => {
		const setFilter = players.filter(
			(item) => item.name.toLowerCase().includes(userInput.toLowerCase())
		)

		if (setFilter.length > 0) {
			setId(setFilter[0].id);
		} else {
			alert('No Dogs Found...');
		};
	};

	// console.log(playersFilter[0].id)
	return (
    <>
			<div>
				<input
					type="text"
					placeholder="Search Dogs..."
					value={userInput}
        	onChange={inputHandler}
				/>
				<button onClick={() => playersFilter()} >Search</button>
			</div>

      {players.map((player) => <>
        <div id={player.id}>
          <h1 key={player.name}>{player.name}</h1>
          <img alt={player.name} src={player.imageUrl} />
          <ul>
            <li>{player.breed}</li>
            <li>{player.status}</li>
          </ul>
					<button onClick={()=> setId(player.id)} >Learn More</button>
					<button>Delete</button>
        </div>
      </>)}
    </>
  );
};

export default ListRender;
