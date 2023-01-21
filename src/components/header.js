import Logo from "../assets/logo-header.png";
import "./header.css";

export default function App() {
  return (
    <div className="header-wrapper">
      <img src={Logo} alt="Logo" />
      <div className="header-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
