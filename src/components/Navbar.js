import React from "react";
import Me from "../images/Me.png";
import "./Navbar.css";

const Navbar = ({handleProjClick, handleContClick}) => {
  return (
    <div className="navContainer">
      <img src={Me} alt="me" className="image" />
      <button
        className="homeButton"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        Home
      </button>
      <button className="projectsButton" onClick={handleProjClick}>Projects</button>
      <button className="contactButton" onClick={handleContClick}>Contact</button>
    </div>
  );
};

export default Navbar;
