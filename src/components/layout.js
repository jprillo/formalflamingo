import React from "react"
import NavBar from "./navbar"
import "../style/main.scss"
import Zoom from 'react-reveal/Zoom';


class Layout extends React.Component {
  render() {
    const {  children } = this.props
   
    
    return (
      <div>
        <header>  
          <Zoom>        
          <NavBar></NavBar>  
          </Zoom>        
          </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
