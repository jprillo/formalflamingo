import React from "react"
import {Link} from "gatsby"


const NavMenu = () => {
    return(
        <div>
        <Link to="/">
            HOME
        </Link>

        <Link to="/about">
        ABOUT
        </Link>

        <Link to="/blog">
        BLOG
        </Link>

        <Link to="/contact">
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
