import "./header.css";
import logo from "../../assets/Logo_kasa.jpg";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_items_position">
      <img src={logo} alt="Logo_kasa" className="header_logo" />
      <div className="header_navbar">
        <Link to="/" className="header_link">
          <label className="header_navbar_items">Acceuil</label>
        </Link>
        {/* <Link to="error">
          <label className="header_navbar_items">Erreur</label>
        </Link> */}
        <Link to="about" className="header_link">
          <label className="header_navbar_items">À Propos</label>
        </Link>
      </div>
    </div>
  );
}

export default Header;
