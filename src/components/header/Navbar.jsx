import React from "react";
import "./navbar.css";
import data from "../data.json";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbody">
      <header style={{ backgroundColor: "black" }}>
        <div className="uppernavbar">
          <div className="upper-part">
            <p className="shopkart">ShopKart</p>
            <div className="right-section">
              <p className="wishlist">Wishlist (0)</p>
              <p className="bags">Bags (0)</p>
            </div>
          </div>
          <hr style={{ width: "100%", fontWeight: "bold" }}></hr>
        </div>
        <nav className="navb">
          {data.map((item) => (
            <div key={item.id}>
              <a href={`#${item.id}`}>{item.name}</a>
              {item.child && (
                <select
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    outline: "none",
                    border: "none",
                  }}
                >
                  {item.child.map((subItem) => (
                    <option key={subItem.id}>
                      {subItem.name.toUpperCase()}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </nav>
      </header>
      {menuOpen ? (
        <>
          <button className="nav-btn">
            <RxCross1 />
          </button>
          <nav>
            <div className="menu-content">
              {data.map((item) => (
                <div key={item.id} className="menu-item">
                  <a href="#">{item.name}</a>
                  {item.child && (
                    <select
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        outline: "none",
                        border: "none",
                        borderBottom: "1px solid white",
                      }}
                    >
                      {item.child.map((subItem) => (
                        <option key={subItem.id} value="">
                          {subItem.name.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </>
      ) : (
        <button className="nav-btn">
          <GiHamburgerMenu />
        </button>
      )}
    </div>
  );
};

export default Navbar;
