import React from "react"
import NavBar from "./navbar"

import Zoom from 'react-reveal/Zoom';


class Layout extends React.Component {
  render() {
    const {  children } = this.props
   
    
    return (
      <div >    
        <header>  
          <Zoom>        
          <NavBar></NavBar>  
          </Zoom>        
          </header>
        <main className="contain">{children}</main>        
        <footer>
         


          <a href="https://www.gatsbyjs.org">Formal Flamingo Web Design</a>
          © {new Date().getFullYear()}
        </footer>
      
      </div>
    )
  }
}

export default Layout
