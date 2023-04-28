import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div 
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)),
          url(${salmon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          height: '300px',
      }}
      className="adBanner"
    >
      <div className="ad_Text">
        <h3>New Recipe</h3>
        <h1>Pineapple Salmon</h1>
        {/* <div className="adText"> */}
          <h3>
            This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
            brown sugar rub, baked for 25 minutes on a bed of pineapple, and
            garnished in butter, garlic, and chives. You won’t want to miss it!
          </h3>
        {/* </div> */}
        <div className="adBtn">
          <Link to="/recipe/3">
            <button className="blue-btn">Check it out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
