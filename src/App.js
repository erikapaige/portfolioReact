// bring react router and useState
import React, { useState } from 'react'
// bring in react router
import {Switch, 
  Route,
  BrowserRouter as Router}
  from 'react-router-dom'
// bring in bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// bring in css for page
import './App.css'
// importing pages
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
// importing elements from reactstrap
import {
  Collapse, 
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink
} from 'reactstrap'


const App = () => {

  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
      <Router>
        <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">ERIKA PAIGE HANDLEY</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/aboutme">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
          <Switch>

            <Route exact path='/'>
              <Homepage />
            </Route>

            <Route exact path='/aboutme'>
              <AboutMe />
            </Route>

            <Route exact path='/portfolio'>
              <Portfolio />
        
            </Route>

            <Route exact path='/contact'>
              <Contact />
            </Route>

          </Switch>
        </div>
      </Router>
  )
}

export default App
