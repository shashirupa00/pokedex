import Stat from "./Stat";

function PokeCard({ name, id, image, stats, types, abilities }) {
  let totalStats = [];
  totalStats = stats.map((stat) => [...totalStats, stat.base_stat]);

  return (
    <div className="pokecard">
      <span className="pokecard-id">{id} </span>
      <img src={image} className="pokecard-img" />
      <span className="pokecard-name">{name} </span>
      <span className="pokecard-type">
        {types.map((type) => (
          <div key={type.type.name} className={`type-${type.type.name}`}>
            {type.type.name}{" "}
          </div>
        ))}
      </span>
      <span className="pokecard-ability">
        {abilities.map((ability) => (
          <div>
            {ability.ability.name} {ability.is_hidden && <span>(hidden)</span>}
          </div>
        ))}
      </span>
      <span className="pokecard-stats">
        <Stat idx={totalStats[0]}>Hp</Stat>
        <Stat idx={totalStats[1]}>Atk</Stat>
        <Stat idx={totalStats[2]}>Def</Stat>
        <Stat idx={totalStats[3]}>Sp. Atk</Stat>
        <Stat idx={totalStats[4]}>Sp. Def</Stat>
        <Stat idx={totalStats[5]}>Speed</Stat>
      </span>
    </div>
  );
}

export default PokeCard;
