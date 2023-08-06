
const PuppyRender = ({ players }) => {
	return (players.map((player) => <>
        <h1 key={player.id}>{player.name}</h1>
        <img alt={player.name} src={player.imageUrl} />
        <h3>{player.breed}</h3>
        <h3>{player.status}</h3>
        <button>Learn More</button>
      </>)
  );
};

export default PuppyRender;