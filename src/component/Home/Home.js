import React from "react";
import "./Home.css";
import img from "../../assets/images/home-shoe-1.png";
import Heading from "../Heading/Heading";
import Offers from "../Offers/Offers";

function Home() {
  fetch("htpp");
  return (
    <div>
      <div className="home">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <hr />
        <Heading text="OFFERS" />
        <Offers />

        <Heading text="STAR PRODUCTS" />
      </div>
    </div>
  );
}

export default Home;
