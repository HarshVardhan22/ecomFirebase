import React from "react";
import cover from "./assets/cover.png";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={cover} alt="" className="home__image" />
      </div>
      <div className="home__row">
        <Product title="new" rating="6"></Product>
        <Product></Product>
      </div>
      <div className="home__row">
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
      <div className="home__row">
      <Product></Product>
      </div>
    </div>
  );
}

export default Home;
