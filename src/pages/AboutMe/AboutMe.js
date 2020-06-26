//bring in react
import React from 'react'
// importing components
import AboutCardLeft from '../../components/AboutCardLeft'
import AboutCardRight from '../../components/AboutCardRight'
// bring in react elements
import {
  Container,
  Row
} from 'reactstrap'


const AboutMe = () => {
  return (
    <Container fluid>
      <Row>
        <AboutCardRight />
      </Row>
      <Row>
        <AboutCardLeft />
      </Row>
    </Container>
  )
}

export default AboutMe