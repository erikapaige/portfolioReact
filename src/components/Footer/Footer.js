// bring in react
import React, { Component } from 'react'
// bring in react-dom needed for social-icons 
import ReactDOM from 'react-dom'
// bring in social icon package
import { SocialIcon } from 'react-social-icons'

import {
  Navbar, 
  Container,
  NavbarBrand
} from 'reactstrap'

var style = {
  color: "#FCFCF7",
  backgroundColor: "#1A1406",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '30px',
  width: '100%',
}

const Footer = ({ children }) => {
  // console.log(children)

  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        {/* {children} */}
        {/* ReactDOM.render(<SocialIcon url="http://twitter.com/erikapaigestyle" />, document.body)
        ReactDOM.render(<SocialIcon url="https://www.linkedin.com/in/ephandley/" />, document.body)
        ReactDOM.render(<SocialIcon url="https://www.instagram.com/erikapaigestyle/" />, document.body) */}
        <p>E.P.HANDLEY || Orange County, CA</p>
      </div>
    </div>
  )
}

// function Footer() {
//   return (
    // <div className="footer">
    //   <div className="container">
    //       <div className="row">
    //           <p className="col-sm">
    //             E.P.HANDLEY || Orange County, CA 
    //           </p>
    //       </div>
    //   </div>
    // </div>
//   )
// }

// class Footer extends Component {
//   render() {
//     return (
//       <div className="fixed-bottom">
//         <Navbar color="dark" dark>
//           <Container>
//             <NavbarBrand>Footer</NavbarBrand>
//           </Container>
//         </Navbar>
//       </div>
//     )
//   }
// }

export default Footer
