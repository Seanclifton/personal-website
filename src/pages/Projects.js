import React from "react";
import Card from "../components/Card";
import "./Projects.css";
import memorygame from '../images/memorygame.PNG'
import phonebook from '../images/phonebook.PNG'
import portfolioimage from '../images/portfolioimage.PNG'
import notesimage from '../images/Note.PNG'

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="cardContainer">
        <Card
          title={"Memory Game"}
          description={
            "Test your memory with this fun little memory game. I created this application while practicing CSS and DOM manipulation. This originally started as a basic card shuffler app and evolved in to the memory game we see here today. This was built using HTML, CSS and REACT and then deployed to Github Pages."
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
            "This project was created to test the knowledge I had obtained through the University of Helisinki's Full Stack Open course. The front end was created using HTML, CSS and REACT. The backend uses NODE.js, Express and MongoDB. This is currently deployed with Heroku."
          }
          codeLink={"View Code"}
          appLink={"View App"}
          image={phonebook}
          codehref={'https://github.com/Seanclifton/Phonebook'}
          apphref={'https://fathomless-tor-81639.herokuapp.com/'}
        />
        <Card
          title={"Portfolio"}
          description={
            "The web page which you are looking at right now! I wasnt going to display this originally but working on something like this really improved my UI development skills and taught me a lot about the quirks of CSS. As is the case with most personal websites, this will be an on going project which i hope to grow and improve."
          }
          codeLink={"View Code"}
          appLink={"View App"}
          image={portfolioimage}
          codehref={'https://github.com/Seanclifton/personal-website'}
          apphref={'https://seanclifton.github.io/personal-website/'}
        />
        <Card
          title={"Notes"}
          description={
            "Oh yes, the clichè notes app. This was one of the first full stack applications that I pieced together using the MERN stack. I plan to make a few more small improvements to this to improve the user interface. The front end was created using HTML, CSS and REACT. The backend uses NODE.js, Express and MongoDB. This is currently deployed with Heroku. "
          }
          codeLink={"View Code"}
          appLink={"View App"}
          image={notesimage}
          codehref={'https://github.com/Seanclifton/Notes'}
          apphref={'https://dazzling-great-basin-54374.herokuapp.com/'}
        />
      </div>
    </div>
  );
};

export default Projects;
