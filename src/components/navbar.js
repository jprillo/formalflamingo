import React from "react"
import {Link} from "gatsby"



const NavMenu = () => {
    return(
        
        <div className="nav-menu">
        <Link className="link" to="/">
            HOME
        </Link>

        <Link className="link" to="/about">
        ABOUT
        </Link>

        <Link className="link" to="/blog">
        BLOG
        </Link>

        <Link className="link" to="/contact">
        CONTACT
        </Link>

        </div>
       
    )
}
const NavBar = () => {    
    return(
        <nav className="top-nav">
            <Link to="/">
            <p style={{fontSize: '24px'}}> <span style={{color: 'black', fontWeight: 'bold'}}>Formal</span><span className="primary-color">Flamingo</span></p>
            </Link>

   <NavMenu></NavMenu> 
   <div id="hamburger-wrap">
    <div 
     className="burger-open"
            
     data-target='navMenu'
     
    >
        
        <span className="line line01"></span>
        <span className="line line02"></span>
        <span className="line line03"></span>
    </div>
</div>


   
   </nav>   

    )
}
export default NavBar
