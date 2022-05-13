import React from "react";
import "./Offers.css";
import img from "../../assets/images/home-shoe-1.png";
import img1 from "../../assets/images/home-shoe-2.png";
import img2 from "../../assets/images/home-shoe-3.png";
import img3 from "../../assets/images/product-1.png";

const Offers = () => {
  return (
    <div className="offersSection">
      <img src={img} alt="one" />
      <img src={img1} alt="two" />
      <img src={img2} alt="three" />
      <img src={img3} alt="four" />
    </div>
  );
};

export default Offers;
