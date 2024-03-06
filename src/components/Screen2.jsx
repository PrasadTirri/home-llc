import React from "react";
import "./Screen2.css";
import Cellular from "../assets/dark/Cellular Connection.png";
import Wifi from "../assets/dark/Wifi.png";
import Battery from "../assets/dark/Battery.png";
import Horizontaline from "../assets/dark/setting-slider-horizontal copy.png";
import Search from "../assets/dark/real-estate-search-house.png";
import Weather from "../assets/dark/weather-clouds.png";
import Bitmap from "../assets/dark/Bitmap.png";
import c1 from "../assets/dark/c-1.png";
import c3 from "../assets/dark/c-3.png";
import c4 from "../assets/dark/c-4.png";
import c5 from "../assets/dark/c-5.png";
import btn from "../assets/dark/btn.png";
import graph from "../assets/dark/graph.png";

const Screen2 = () => {
  return (
    <div className="main-container">
      <div className="content">
        <div className="header">
          <p>9 : 41</p>
          <div className="head_icons">
            <img src={Cellular} alt="" />
            <img src={Wifi} alt="" />
            <img src={Battery} alt="" />
          </div>
        </div>
        <div className="search">
          <img src={Horizontaline} alt="" />
          <img src={Search} alt="" />
        </div>
        <div className="new_york">
          <div className="heading">
            <h1>
              New York, <br /> United States
            </h1>
            <span>Oct 04, 2019</span>
            <div className="sub_heading">
              <img src={Weather} alt="" />
              <span>Cloudy</span>
            </div>
          </div>
          <div class="img-container">
            <img src={Bitmap} alt="" />
            <button class="btn">Live</button>
          </div>
        </div>
        <div className="weather_container">
          <div className="item-1">
            <p>12:00</p>
            <img src={c1} alt="" />
            <p>24</p>
          </div>
          <div className="item">
            <p>12:00</p>
            <img src={c3} alt="" />
            <p>24</p>
          </div>
          <div className="item">
            <p>12:00</p>
            <img src={c4} alt="" />
            <p>24</p>
          </div>
          <div className="item">
            <p>12:00</p>
            <img src={c1} alt="" />
            <p>24</p>
          </div>
          <div className="item">
            <p>12:00</p>
            <img src={c5} alt="" />
            <p>24</p>
          </div>
        </div>
        <hr />
        <p className="additional">Additional Info</p>
        <div className="info-container">
          <div className="info-item">
            <p className="one">Precipitation</p>
            <p className="two">3%</p>
          </div>
          <div className="info-item">
            <p className="one">Humidity</p>
            <p className="two">74%</p>
          </div>
          <div className="info-item">
            <p className="one">Windy</p>
            <p className="two">18 km/h </p>
          </div>
        </div>
        <hr />
        <div className="last_container">
          <p>Temperature</p>
          <img src={btn} alt="" />
        </div>
      </div>
      <div className="footer">
        <img className="graph" src={graph} alt="" />
      </div>
    </div>
  );
};

export default Screen2;
