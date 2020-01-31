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
   <NavMenu></NavMenu>    

    )
}
export default NavBar
