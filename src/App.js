import React from 'react';
import Navbar from './components/Navbar'
import Littlegems from './components/LittleGems'
import Listivity from './components/Listivity'
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <Littlegems />
          </div>
          <div className="col-md-6">
              <Listivity />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
