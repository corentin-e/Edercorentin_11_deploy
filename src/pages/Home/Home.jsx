import "./home.css";
import { Banner, Card, Header, Footer } from "../../components";
import data from "../../data.json"
import React from "react";
import WelcomeImage from "../../assets/welcome_image.jpg";

const Home = () => {
  return (
    <div className="homePage_items_position">
      <Header />
      <Banner image={WelcomeImage} textWelcome="Chez vous, partout et ailleurs" />
      <div className="homePage_housing_position">
        {data.housings.map(housing => (
          <Card key={housing.id} title={housing.title} image_source={housing.cover} id={housing.id}/>
        ))}
      </div>
      <div className="homePage_footer_position"/>
        <Footer/>
      <div/>
    </div>
  );
}

export default Home;
