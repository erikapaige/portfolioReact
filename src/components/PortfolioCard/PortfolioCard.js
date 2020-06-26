// bring in react
import React from 'react'
import './PortfolioCard.css'
// bring in reactstrap elements
import {
  Card, 
  CardHeader, 
  CardLink,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap'

// passing props from Portfolio
const PortfolioCard = (props) => {
  return (
        <Card style={{ width: '18rem' }}>
          <CardBody>
            <img width="100%" src={props.img} alt={props.imgText} />
          </CardBody>
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.text}</CardText>
            <CardText>{props.tech}</CardText>
            <CardLink href={props.link}>{props.linkText}</CardLink>
            <CardLink href={props.repo}>{props.repoText}</CardLink>
          </CardBody>
        </Card>
  )
}

export default PortfolioCard
