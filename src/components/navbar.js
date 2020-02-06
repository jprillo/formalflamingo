import React from "react"
import {Link} from "gatsby"

const activeStyle = {
    color: '#FF1988',
  }
  import React from "react"
  import {Link} from "gatsby"
  
  const activeStyle = {
      color: '#FF6AB2',
    }
  
  
  const NavBar = ({ toggleNavbar, isActive }) => {    
      return(
          <div className={` navagation-wrap col-12 ${isActive ? 'mobile-wrap' : ''}`}> 
  
              <div id="main-nav-wrap">
                  <div class="logo-wrap">
                      <Link href="/">
                    <span style={{color: "black", fontWeight: "bold"}}>Formal</span><span className="primary-color">Flamingo</span> </Link>
  
                  </div>
                  <div >
                      <div  className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                          <ul class="nav">
                              <li><Link class="hack" activeStyle={activeStyle} to="/">Home</Link></li>
                              <li><Link to="/about" activeStyle={activeStyle} class="hack">About</Link></li>
                              <li><Link to="/blog" activeStyle={activeStyle} class="hack">Blog</Link></li>
                              <li><Link to="/contact" activeStyle={activeStyle} class="hack">Contact</Link></li>
                           
  
                            
                          </ul>
                      </div>
                   
                  </div>
                  <div id="hamburger-wrap">
                      <div  className={` burger-open ${isActive ? 'burger-close' : ''}`}
              
              data-target='nav-menu'
              onClick={toggleNavbar}
              aria-hidden={true}>
                          <span class="line line01"></span>
                          <span class="line line02"></span>
                          <span class="line line03"></span>
                      </div>
                  </div>
              </div>
          </div>
  
      )
  }
  export default NavBar
