import React from 'react'

const Littlegems = () => {
  return(
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://www.erikapaige.github.io/LittleGems/" className="card-img-top" alt="Little Gems homepage" />
        <div className="card-body">
          <h5 className="card-title">Little Gems</h5>
        <p className="card-text">The “Little Gems” app is shining a spot light on local restaurants that often get overlooked on large food search applications due to lack of reviews. Using 3 APIs (Zomato, Google Maps, geolocation) the app can locate a user’s position and recommend local restaurants in their area.</p>
        </div>
        <div className="card-body">
        <a href="https://www.erikapaige.github.io/LittleGems/" className="card-link">Little Gems link</a>
        <br />
        <a href="https://www.github.com/erikapaige/LittleGems" className="card-link">Little Gems GitHub Repository</a>
        </div>
    </div>
  )
}

export default Littlegems