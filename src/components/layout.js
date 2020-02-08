import React from "react"
import NavBar from "./navbar" 





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
                   <p>A web design agency in Melbourne Florida specializing fucking up your shit.</p> 
          </div>

          <div className="col-6 ">
            <h5 className="align-center">Follow Us</h5>
            <div> 
             <a href="https://twitter.com/jasonprillo"><img alt="twitter icon" src="https://www.jasonprillo.com/img/twitter.png"></img></a>
             <a href="https://twitter.com/jasonprillo"><img alt="twitter icon" src="https://www.jasonprillo.com/img/facebook.png"></img></a>
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
