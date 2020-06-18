import React from 'react'

const Listivity = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://radiant-woodland-54871.herokuapp.com/login.html" className="card-img-top" alt="Little Gems homepage" />
      <div className="card-body">
        <h5 className="card-title">Listivity</h5>
        <p className="card-text">Everyone hates the dreaded decision making questions: “what do you want to do? What restaurant should we go to? Where do you want to eat?” All too often the answers to these questions are “I don’t know." Our application seeks to provide an answer to these decision questions. As they think of them, users will input their data for date night activities they don’t want to forget. Using a login and saved password, each user will be able to access their ‘date night’ ideas they don’t want to forget. Then the next time a couple is stuck with “what do you want to do?” there is a list of options already generated with ideas.</p>
      </div>
      <div className="card-body">
        <a href="https://radiant-woodland-54871.herokuapp.com/login.html" className="card-link">Listivity link</a>
        <br />
        <a href="https://www.github.com/ShaneMit/Project2" className="card-link">Listivity GitHub Repository</a>
      </div>
    </div>
  )
}

export default Listivity