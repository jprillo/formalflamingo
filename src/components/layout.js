import React from "react"
import NavBar from "./navbar" 
import facebook from "../img/facebook.svg"
import twitter from "../img/twitter.svg"





class Layout extends React.Component {

  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const {  children } = this.props
   
    
    return (
      <div >    
        <header>  
                 
        <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
                
          </header>
        <main className="contain">{children}</main>   

        <section className="secondary-back flex align-center">
          <div className="col-6 ">
                    <h5 className="align-center">Formal Flamingo</h5>
                   <p>A web design agency in Melbourne Florida specializing in helping your business dominate the web.</p> 
          </div>

          <div className="col-6 ">
            <h5 className="align-center">Follow Us</h5>
            <div> 
             <a href="https://twitter.com/flamingodigital"><img alt=" pink and white twitter icon" src={twitter}></img></a>
             <a href="https://facebook.com/formalflamingo"><img alt="pink and white facebook icon" src={facebook}></img></a>
             <a href="https://twitter.com/jasonprillo"><img alt="twitter icon" src="https://www.jasonprillo.com/img/dribbble.png"></img></a>
            </div>
            </div>
          </section>     
        <footer className="secondary-back">
         


          <a  href="https://www.gatsbyjs.org">Formal Flamingo Web Design</a>
          © {new Date().getFullYear()}
        </footer>
      
      </div>
    )
  }
}

export default Layout
