import React from "react";
import "./Card.css";

const Card = ({ title, description, codeLink, appLink, image, codehref, apphref }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})`}}>
        <div class="blur"></div>
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
        <div className="linkContainer">
          {/* <div className="codeLink" >{codeLink}</div> */}
          <a href={codehref} className="codeLink" >{codeLink}</a>
          <a href={apphref} className="appLink">{appLink}</a>
        </div>
    </div>
  );
};

export default Card;
