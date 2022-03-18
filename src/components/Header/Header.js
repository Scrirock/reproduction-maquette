import './Header.css';
import logo from "../../assets/images/logo.png";

export function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="logo of the site" />
    </nav>
  );
}