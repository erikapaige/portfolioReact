// bring in react
import React from 'react'
// bring in component to render
import PortfolioCard from '../../components/PortfolioCard'
// bring in elements from react
import { 
  Container,
  Row,
  Col
} from 'reactstrap'

// array with portfolio projects
const portfolioList = [
  {
    idCol1: 1,
    title: 'Little Gems',
    link: 'https://erikapaige.github.io/LittleGems/',
    linkText: 'View App',
    repo: 'https://github.com/erikapaige/LittleGems',
    repoText: 'View Repo',
    text: 'An application that helps users search for local restaurants that have high ratings with little reviews.',
    tech: 'Built with: Api Zomato, GoogleMaps Api, Materialize as well as Javascript, CSS and HTML.',
    img: require('../../assets/imgs/fitnessTracker.png'),
    imgText: 'image of homepage'
  },
  {
    idCol1: 1,
    title: 'Listivity',
    link: 'https://radiant-woodland-54871.herokuapp.com/',
    linkText: 'View App',
    repo: 'https://github.com/ShaneMit/Project2',
    repoText: 'View Repo',
    text: 'Allows users to create, save and delete activities.',
    tech: 'Built Using: Api Zomato, GoogleMaps Api, Materialize as well as Javascript, CSS and HTML.',
    img: require('../../assets/imgs/project2Listivity.png'),
    imgText: 'image of homepage'
  },
  {
    idCol2: 2,
    title: 'Note Taker',
    link: 'https://quiet-gorge-31706.herokuapp.com/',
    linkText: 'View App',
    repo: 'https://github.com/erikapaige/noteTakerApp',
    repoText: 'View Repo',
    text: 'An interactive note taker application that allows users to write, save and delete notes.',
    tech: 'Built Using: Javascript, Node.js, NPM Express, FS, HTML and Bootstrap.',
    img: require('../../assets/imgs/noteTaker.png'),
    imgText: 'image of homepage'
  },
  {
    idCol2: 2,
    title: 'Fitness Tracker',
    link: 'https://tranquil-hollows-63682.herokuapp.com/',
    linkText: 'View App',
    repo: 'https://github.com/erikapaige/workoutTracker',
    repoText: 'View Repo',
    text: 'An interactive note taker application that allows users to write, save and delete notes.',
    tech: 'Built Using: Mongo database with a Mongoose schema and Express to handle routes.',
    img: require('../../assets/imgs/fitnessTracker.png'),
    imgText: 'image of homepage'
  },
  {
    idCol2: 2,
    title: 'Budget Tracker',
    link: 'https://nameless-mesa-29263.herokuapp.com/',
    linkText: 'View App',
    repo: 'https://github.com/erikapaige/progressiveBudget',
    repoText: 'View Repo',
    text: 'Budget Tracker allows users to track withdrawals and deposits. The application works with and without an internet or cellular data, so users can always have their most up to date balance.',
    tech: 'Built Using: Mongo database with a Mongoose schema and Express to handle routes.',
    img: require('../../assets/imgs/budgetTracker.png'),
    imgText: 'image of homepage'
  }
]

// grid 
const Portfolio = () => {
  return (
    <Container fluid>
      <Row>
        <Col>{portfolioList.map(portfolio => (<PortfolioCard key={portfolio.idCol2} {...portfolio} />))}</Col>
        <Col>{portfolioList.map(portfolio => (<PortfolioCard key={portfolio.idCol1} {...portfolio} />))}</Col>
      </Row>
    </Container>
  )
}
export default Portfolio