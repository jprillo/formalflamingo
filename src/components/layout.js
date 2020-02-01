import React from "react"
import NavBar from "./navbar"




class Layout extends React.Component {
  render() {
    const {  children } = this.props
   
    
    return (
      <div >    
        <header>  
                 
          <NavBar></NavBar>  
                
          </header>
        <main className="contain">{children}</main>        
        <footer className="secondary-back">
         


          <a  href="https://www.gatsbyjs.org">Formal Flamingo Web Design</a>
          © {new Date().getFullYear()}
        </footer>
      
      </div>
    )
  }
}

export default Layout
