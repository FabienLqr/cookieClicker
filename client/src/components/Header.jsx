import argent from "../assets/images/argent.png";

function Header() {
  return (
    <header>
      <img src={argent} alt="logo" className="logo" />
      <h1>Cookie Clicker</h1>
      <img src={argent} alt="logo" className="logo" />
    </header>
  );
}

export default Header;
