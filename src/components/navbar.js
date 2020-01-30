import React from "react"
import {Link} from "gatsby"
const NavBar = () => {    
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
export default NavBar
