import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"
import jason from "../img/jason.png"
import sara from "../img/sara.png"
import "../style/main.scss"


const AboutPage = () => {    
    return(
  
        <div>
           <Layout>

            
<div className='hero-page'>
  <div className="flex">
    <div className="col-7" style={{margin: "0 auto"}}>    
      <h1 className="align-center">About Us</h1>     
      <h2 className="align-center">We are passionate about modern web development and design</h2> 
      <div className="btn-margin align-center">
      <Link className="primary-button" to="/contact">Learn More</Link>
      </div>
    </div>   
  </div>  
  </div>

  <section className="light-back2">
      <h3>Meet Our Team.</h3>
      <div className="flex add-pad">
      
        <div className="col-5 align-center about-pad">
        <img src={jason} alt="jason prillo is a web developer from melbourne florida"/>
          </div>
          <div className="col-7">
        <h5>Jason Prillo</h5>
        <p style={{color: "#FF6AB2"}}>Developer</p>
        <p>Jason started Formal Flamingo in 2016.</p>
        
        <p> Jason likes Javascript and Table Tennis. </p>
           
        </div>
      </div>

      <div className="flex reverse add-pad">

      <div className="col-7">
      <h5>Sara Perno</h5>
      <p style={{color: "#FF6AB2"}}>Designer</p>
      <p>Sara is a web designer from Palm Bay, Florida.</p>
      <p>Sara likes Cats and Butterflies</p>
      </div>
   
      
      <div className="col-5 align-center about-pad">
        <img src={sara} alt="sara perno is a web designer from melbourne florida"/>
        </div>
   
        </div>
  </section>

  <section className="light-back1">
    <h3>Our goal is to deliver the fastest, highest performing websites available to businesses looking for an edge online. </h3>
    <div className="btn-margin align-center">
      <Link className="primary-button" to="/contact">Let's Talk</Link>
      </div>
  </section>
 


            </Layout>  
        </div>
    )
}
export default AboutPage

