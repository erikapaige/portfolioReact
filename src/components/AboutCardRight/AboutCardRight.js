// bring in react
import React from 'react'
// bring in stylesheet
import './AboutCardRight.css'
// import image
import AboutMeImg from '../../assets/imgs/aboutMe.jpg'
// bring in reactstrap elements
import {
  Media
} from 'reactstrap'

// passing props from Portfolio
const AboutCardRight = () => {
  return (
    <Media>
      <Media left href="#">
        <Media className="aboutMe" src={AboutMeImg} alt="photo of me" />
      </Media>
      <Media body>
        <Media heading>
          About Me
        </Media>
        After spending 10+ years in the fashion industry, as a Wardrobe Stylist and an image consultant, I am looking to transfer my creative and critical analysis skills to the web development world.
      </Media>
    </Media>
  )
}

export default AboutCardRight