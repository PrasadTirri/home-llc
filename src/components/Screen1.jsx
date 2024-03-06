import React from "react";
import Cellular from "../assets/Cellular Connection.png";
import Wifi from "../assets/Wifi.png";
import Battery from "../assets/Battery.png";
import close from "../assets/close.png";
import Shape from "../assets/Shape.png";
import "./Screen1.css";

const Screen1 = () => {
  return (
    <div className="main-container-1">
      <div className="content">
        <div className="header">
          <p>9 : 41</p>
          <div className="head_icons">
            <img src={Cellular} alt="" />
            <img src={Wifi} alt="" />
            <img src={Battery} alt="" />
          </div>
        </div>
        <div className="close_live">
          <img src={close} alt="" />
          <button className="livebtn">Live</button>
        </div>
        <div className="main">
          <div className="location">
            <img src={Shape} alt="" />
            <p>CURRENT LOCATION</p>
          </div>
          <h1 className="country">
            New York, <br /> United States
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Screen1;
