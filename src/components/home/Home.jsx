import React from "react";
import "./home.css";
import artist from "../../assets/boy.svg";
import { BsArrowUpRight } from "react-icons/bs";
import star from "../../assets/star.svg";
import shine from "../../assets/starone.svg";

const Home=()=>{
  return (
    <div className="main-page">
      <div className="content-box">
        <div className="content-box-1">
          <h1 className="title">Fresh</h1>
          <h1 className="year">2022</h1>
          <h1 className="subtitle">Look</h1>
        </div>
        <div className="content-box-2">
          <img className="star-image" src={star} alt="" />
          <img className="boy-image" src={artist} alt="" />
        </div>
      </div>
      <div className="orange-box"></div>
      <div className="line-divider"></div>
      <img className="star-image-3" src={shine} alt="star" />
      <div className="see-more">
        <div className="see-more-text">See more</div>
      </div>
      <i className="arrow-icon">
        <BsArrowUpRight />
      </i>
    </div>
  );
}

export default Home;
