import React from "react";
import Card from "../components/Card";
import "./Projects.css";
import memorygame from '../images/memorygame.PNG'
import phonebook from '../images/phonebook.PNG'
import portfolioimage from '../images/portfolioimage.PNG'

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="cardContainer">
        <Card
          title={"Memory Game"}
          description={
            "After spending some time in tutorial hell, I decided to let loose and get started on my first project. I pondered ways to include react and whilst playing with code and looking for inspiration, I made a basic card shuffle generator which i evolved over a couple of days in to this memory game."
          }
          codeLink={"View Code"}
          appLink={"View App"}
          image={memorygame}
          codehref={'https://github.com/Seanclifton/memory-game'}
          apphref={'https://seanclifton.github.io/memory-game/'}
        />
        <Card
          title={"Phonebook"}
          description={
            "I created this project while learning full stack development through the university of Helsinki's Full Stack Open course. I plan to improve this as my next project as a backend development refresher and to apply my improved CSS skills. Unfortunately i need to migrate this from Heroku so it is not operational at the moment."
          }
          codeLink={"View Code"}
          appLink={"View App"}
          image={phonebook}
          codehref={'https://github.com/Seanclifton/Phonebook'}
          apphref={''}
        />
        <Card
          title={"Portfolio"}
          description={
            "The web page which you are looking at right now! I wasnt going to display this originally but working on something like this really improved my UI development skills and taught me a lot about the quirks of CSS. As is the case with most personal websites, this will be an on going project which i hope to grow and improve over the years."
          }
          codeLink={"View Code"}
          appLink={"View App"}
          image={portfolioimage}
          codehref={'https://github.com/Seanclifton/personal-website'}
          apphref={'https://seanclifton.github.io/personal-website/'}
        />
      </div>
    </div>
  );
};

export default Projects;
