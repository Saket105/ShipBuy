import React from "react";
import "./Home.css";
import img from "../../assets/images/home-shoe-1.png";

function Home() {
  fetch("htpp")
  return (
    <div className="home">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="product">
        <h1>Product Name</h1>
        <h1>Product Name</h1>
        <h1>Product Name</h1>
        <h1>Product Name</h1>
      </div>
    </div>
  );
}

export default Home;
