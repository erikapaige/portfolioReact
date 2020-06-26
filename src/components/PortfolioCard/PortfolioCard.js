// bring in react
import React from 'react'
import './PortfolioCard.css'
// bring in reactstrap elements
import {
  Card, 
  CardHeader, 
  CardLink,
  CardBody,
  CardText
} from 'reactstrap'

// passing props from Portfolio
const PortfolioCard = (props) => {
  return (
        <Card style={{ width: '18rem' }}>
          <CardHeader><h5>{props.title}</h5></CardHeader>
          <CardBody>
            <img width="100%" src={props.img} alt={props.imgText} />
          </CardBody>
          <CardBody>
            <CardText>{props.text}</CardText>
            <CardText>{props.tech}</CardText>
            <CardLink href={props.link}>{props.linkText}</CardLink>
            <CardLink href={props.repo}>{props.repoText}</CardLink>
          </CardBody>
        </Card>
  )
}

export default PortfolioCard
