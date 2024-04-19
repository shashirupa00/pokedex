import RegionCard from "./RegionCard";

import KantoRegion from "../assets/KantoRegion.jpg";
import JohtoRegion from "../assets/JohtoRegion.jpg";
import HoennRegion from "../assets/HoennRegion.jpg";
import SinnohRegion from "../assets/SinnohRegion.jpg";
import UnovaRegion from "../assets/UnovaRegion.jpg";
import KalosRegion from "../assets/KalosRegion.jpg";
import AlolaRegion from "../assets/AlolaRegion.jpg";
import GalarRegion from "../assets/GalarRegion.jpg";
import PaldeaRegion from "../assets/PaldeaRegion.jpg";

function RegionSelector({ regionClickHandler }) {
  return (
    <div className="region-selector">
      <div className="region-row-1">
        <RegionCard
          imageSource={KantoRegion}
          regionName={"Kanto"}
          regionClickHandler={regionClickHandler}
        />
        <RegionCard
          imageSource={JohtoRegion}
          regionName={"Johto"}
          regionClickHandler={regionClickHandler}
        />
        <RegionCard
          imageSource={HoennRegion}
          regionName={"Hoenn"}
          regionClickHandler={regionClickHandler}
        />
        <RegionCard
          imageSource={SinnohRegion}
          regionName={"Sinnoh"}
          regionClickHandler={regionClickHandler}
        />
      </div>
      <div className="region-row-2">
        <RegionCard
          imageSource={UnovaRegion}
          regionName={"Unova"}
          regionClickHandler={regionClickHandler}
        />
        <RegionCard
          imageSource={KalosRegion}
          regionName={"Kalos"}
          regionClickHandler={regionClickHandler}
        />
        <RegionCard
          imageSource={AlolaRegion}
          regionName={"Alola"}
          regionClickHandler={regionClickHandler}
        />
        <RegionCard
          imageSource={GalarRegion}
          regionName={"Galar"}
          regionClickHandler={regionClickHandler}
        />
      </div>
      <div className="region-row-3">
        <RegionCard
          imageSource={PaldeaRegion}
          regionName={"Paldea"}
          regionClickHandler={regionClickHandler}
        />
      </div>
    </div>
  );
}

export default RegionSelector;
