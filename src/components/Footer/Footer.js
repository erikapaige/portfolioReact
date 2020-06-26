// bring in react
import React from "react"
// bring in stylesheet
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          {/* Col 1 */}
          <div className="col">
            <h4>E.P.HANDLEY</h4>
            <ul className="list-unstyled">
              <li>513-646-8965</li>
              <li>Orange County, CA</li>
              <li>Blah Blah Blah</li>
            </ul>
          </div>
          {/* Col 2 */}
          <div className="col">
            <h4>STUFF</h4>
            <ul className="list-unstyled">
              <li>513-646-8965</li>
              <li>Orange County, CA</li>
              <li>Blah Blah Blah</li>
            </ul>
          </div>
          {/* col 3 */}
          <div className="col">
            <h4>STUFF</h4>
            <ul className="list-unstyled">
              <li>513-646-8965</li>
              <li>Orange County, CA</li>
              <li>Blah Blah Blah</li>
            </ul>
          </div>
        </div>
        <hr />
          <div>
            <div className="row">
              <p className="col-sm">
                E.P.HANDLEY || Orange County, CA 
              </p>
              <p className="col-sm">
              E.P.HANDLEY || Orange County, CA
              </p>
              <p className="col-sm">
              E.P.HANDLEY || Orange County, CA
              </p>
               <p className="col-sm">
                E.P.HANDLEY || Orange County, CA 
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer