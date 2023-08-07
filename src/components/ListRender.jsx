const ListRender = ({ players, setId }) => {
	return (
    <>
      {players.map((player) => <>
        <div id={player.id}>
          <h1 key={player.id}>{player.name}</h1>
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
