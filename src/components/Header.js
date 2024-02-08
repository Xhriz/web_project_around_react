import logo from "../images/logo.png";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Logo escrito Around The U.S."
      />
    </header>
  );
}
export default Header;
