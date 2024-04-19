import PokeCard from "./PokeCard";

function RegionPokemon({ regionPokemon }) {
  return (
    <div className="region-body">
      <div className="Info-bar">
        <div className="Info-bar-pnum">Pokedex Number</div>
        <div className="Info-bar-name">Name</div>
        <div className="Info-bar-type">Type</div>
        <div className="Info-bar-abilities">Abilities</div>
        <div className="Info-bar-stats">Stats</div>
      </div>
      <div>
        {regionPokemon.map((curPokemon) => (
          <PokeCard
            name={curPokemon.name}
            id={curPokemon.id}
            image={curPokemon.sprites.front_default}
            stats={curPokemon.stats}
            types={curPokemon.types}
            abilities={curPokemon.abilities}
          />
        ))}
      </div>
    </div>
  );
}

export default RegionPokemon;
