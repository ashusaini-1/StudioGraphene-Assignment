import React from "react";
import "./topnav.css";
import truck from "../../assets/car.svg";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

function Topnav() {
  return (
    <div className="top-nav">
      <div className="nav-item">
        <div className="delivery">
          <img
            src={truck}
            alt=""
            style={{
              height: "13px",
              width: "21px",
              "@media all and (max-width: 429px)": {
                height: "8px",
                width: "15px",
              },
            }}
          />
          Free Delivery
        </div>
        <div className="return-policy">Return Policy</div>
      </div>
      <div className="nav-item">
        <div>Login</div>
        <div>follow Us</div>
        <div>
          <i className="social-img">
            <BsFacebook />
          </i>
        </div>
        <div>
          <i className="social-img">
            <AiFillLinkedin />
          </i>
        </div>
        <div>
          <i className="social-img">
            <BiLogoTwitter />
          </i>
        </div>
        <div>
          <i className="social-img">
            <BiLogoInstagram />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
