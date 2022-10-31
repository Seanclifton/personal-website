import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'


const Home = ({handleProjClick, handleContClick}) => {
  return (
      <div className="home">
        <Navbar handleProjClick={handleProjClick} handleContClick={handleContClick} />
        <div className="nameContainer">
          <div className="typewriter">
            <h2>Sean Clifton</h2>
          </div>
        </div>
        <p className="titles">
          Web Developer || Software Engineer || Tech Enthusiast
        </p>
        <p className="greeting">
          Take a look at my projects and contact me about anything tech related.
        </p>
      </div>
  )
}

export default Home
