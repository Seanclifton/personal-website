import React from 'react'
import './Footer.css'
import LI from '../images/LI.png'
import git from '../images/git.png'
import totop from '../images/totop.png'


const Footer = () => {
  return (
    <div className='footerContainer'>
      <img src={LI} className='liimage' onClick={() => window.open('https://www.linkedin.com/in/seanclifton91/', "_blank")}></img>
      <img src={git} className='gitimage' onClick={() => window.open('https://github.com/Seanclifton', "_blank")}></img>
      <img src={totop} onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }} className='totopimage'></img>
    </div>
  )
}

export default Footer
