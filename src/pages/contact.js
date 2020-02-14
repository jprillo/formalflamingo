import React from "react"
import Layout from "../components/layout"
import "../style/main.scss"

const Contact = () => {    
    return(
   
        <div>
           <Layout>
          
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
    <input type="hidden" name="formalflamingo" value="contact"/>
  <div>
    <label>Your Name: <input type="text" name="name" /></label>   
  </div>
  <div>
    <label>Your Email: <input type="email" name="email" /></label>
  </div>
 
  <div>
    <label>Message: <textarea name="message"></textarea></label>
  </div>
  <div>
    <button type="submit" value="message">Send</button>
  </div>
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
