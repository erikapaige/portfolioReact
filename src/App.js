import React from 'react';
import {Switch, 
  Link, 
  Route,
  BrowserRouter as Router}
  from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

const App = () => {
  return (
      <Router>
        <div>
          <nav>
            <Link to="/">Homepage</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </nav>
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

export default App;
