// bring in react
import React from 'react'
// bring in stylesheet
import './AboutCardLeft.css'
// bring in media image
import AboutMeHiImg from '../../assets/imgs/aboutMeHi.jpg'
// bring in reactstrap elements
import {
  Media
} from 'reactstrap'

// passing props from Portfolio
const AboutCardLeft = () => {
  return (
    <Media>
      <Media body>
        Working as a freelance creative, I often have a vision that I am eager to execute. When creating a look or collaborating with production to build a story; I have the knowledge and tools it takes to turn the vision into a reality. I am looking to apply those tools and knowledge into technology, in particular website development.
      </Media>
      <Media left href="#">
        <Media className="aboutMe" src={AboutMeHiImg} alt="waiving hello" />
      </Media>
    </Media>
  )
}

export default AboutCardLeft
