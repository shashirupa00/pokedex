import logo from "../assets/pokedexLogo.png";

function Header({ setCurRegion }) {
  return (
    <div className="header" onClick={() => setCurRegion("")}>
      <img src={logo} alt="" />
    </div>
  );
}

export default Header;
