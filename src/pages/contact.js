import React from "react"
import Layout from "../components/layout"
import "../style/main.scss"
import SEO from "../components/seo"


const Contact = () => {    
    return(
   
        <div>
           <Layout>
           <SEO title="Contact Us"
           description="Are you ready to start making the most out of your online business. Let's talk about your new website. Melbourne FL."
          />
          
<div className='hero-page'>
  <div className="flex">
    <div className="col-7" style={{margin: "0 auto"}}>    
      <h1 className="align-center">Contact</h1>     
      <h2 className="align-center">Ready start maximizing your business online?</h2> 
    </div>  
    
     
  </div>  
  </div>

  <section className="flex light-back2">
      <div className="col-6">
<h3>Let's talk about it. </h3>
      <form name="formalflamingo" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/about">
    <input type="hidden" name="bot-field"/>
    
  
    <label>Your Name: <input type="text" name="name" required /></label>   
  
    <label>Your Email: <input type="email" name="email" required /></label>
  
 

    <label>Message: <textarea name="message" required></textarea></label>
  
  
    <button type="submit" >Send</button>
  
</form>


      </div>
      <div className="col-6">
        <h3>Located in Melbourne Florida</h3>
        <p>Dedicated to getting the most out of your online business.</p>
        
        </div>

  </section>
  
            </Layout>  
        </div>
    )
}
export default Contact
