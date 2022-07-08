import "./error.css";
import { Header, Footer } from "../../components";
import { Link } from "react-router-dom"
import React from "react";

const Error = () => {
  return (
    <div className="errorPage_items_position">
      <Header />
      <div className="errorPage_text_items_position">
        <label className="errorPage_code_item">404</label>
        <label className="errorPage_mesage_item">Oups! La page que vous demandez n'existe pas.</label>
        <Link className="errorPage_backhome_link_position" to="/">
            <label className="errorPage_backhome_item">Retourner sur la page d'acceuil</label>
        </Link>
      </div>
        <Footer/>
    </div>
  );
}

export default Error;
