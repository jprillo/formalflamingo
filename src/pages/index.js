import React from "react"

import Layout from "../components/layout"
import CTA from "../components/cta"
import flamingo from  "../img/flamingo-illustration.svg"
import creatures from "../img/creatures.svg"
import car from "../img/flamingo-car.svg"
import content from "../img/change-content.svg"
import CardOne from "../components/cardone"
import CardTwo from "../components/cardtwo"
import boy from "../img/boy-on-computer.svg"
import design from "../img/design.svg"
import development from "../img/development.svg"
import maintenance from "../img/maintenance.svg"
import "../style/main.scss"
import Fade from 'react-reveal/Fade';
import SEO from "../components/seo"


const IndexPage = () => {
 
  return(
    <div>
      <Layout>
      <SEO title="Get the most out of your website"
           description="Give your business a leg up with a new website made the right way. Melbourne FL Web Design and Development"
          />
<div className='hero-page'>
  <div className="flex">
    <div className="col-6">    
      <h1>Web Design and Development</h1>     
      <h2>Give your business a leg up with a great website</h2> 
      <div className="btn-margin">
      <a className="primary-button" href="/contact">Learn More</a>
      </div>
    </div>
    <div className="col-6 hero-image">
    <img src={flamingo} alt="a flamingo with a tophat and bowtie"></img>
    </div>
  </div>  
  </div>
  


  <section className="hero-about light-back2">
<h3>We are passionate about building beautiful websites with modern technology</h3>
<div className="flex margin-top">
  <Fade left>
  <div className="col-6 hero-image">
<img src={creatures} alt="ok"></img>
  </div>  
  </Fade>
  <Fade right>
  <div className="col-6 text-left ">

<p>Our websites are ...</p>
<p>Fast</p>
<p>Secure</p>
<p>Reliable</p>
<p>Search Engine Friendly</p>

<p>We make the whole process as easy as possible so you can concentrate on your business. Set up a free consultation and see what solutions we come up with </p>
  <div className="btn-margin">
  <a className="primary-button" href="./contact">Learn More</a>
  </div>
  
  </div>
  </Fade> 
</div>
</section>

<section className="card-container">
  <h3>Services</h3>
  <p>We are online problem-solvers who specialize in getting the most from your business's website</p>

<div className="flex justify-center" style={{margin: "50px 0"}}>
  
<CardOne 
title= "Web Design"
description= "Designed with the latest trends in user experience and SEO our websites are converting machines"
image= {design}
alt= "bozo"


/>

<CardTwo
title= "Development"
description= "Custom programmed with modern technology to fit the needs of the project."
image= {development}
alt= "bozo"


/>

<CardOne 
title= "Maintenance"
description= "We take care of the hosting, security, updates and anything else you need to stay up and running"
image= {maintenance}
alt= "bozo"


/>

</div>
<div className="btn-margin">
<a className="primary-button" href="./contact">Find out what else we do.</a>
</div>
</section>

<section className="two-panel light-back2">
<Fade left>
  <h3 className="text-center" >Look at our SPEED!!! </h3>
  <div className="flex btn-margin">
    <div className="col-6">
      <p>Our websites are fast. Faster websites are a better experience for your users and lead to fewer people bouncing. Search engines like it when people get what they need from your site and don't leave because of slow load times. This is especially important for mobile users of your website. </p>

    </div>
    <div className="col-6">
     <img src={car} alt="test"></img>
      
    </div>
  </div>
  </Fade>
</section>

<CTA
title="Let's Work Together"
linkText="Contact Us"
link="/contact"
/>

<section className="two-panel">
  
  <div className="flex btn-margin">
  <div className="col-6">
     <img src={content} alt="test"></img>
      
    </div>
    <div className="col-6">
    <h5 >Does your content change a lot? </h5>
      <p>Whether you are adding a blog to promote your website, or just need to update a few things we offer content management. We use a headless content management system. That means that we can install the functionality of sites powered by WordPress or Drupal but still be faster, unique, and more secure.</p>

    </div>
  
  </div>

</section>
<section className="hero-about light-back2">
<h3>Is your website not performing the way you want?</h3>
<div className="flex margin-top">

  <div className="col-6 text-left ">
    <div className="space">
<h5>Ask us how we can help.</h5>
<p>If your website is old you may not be taking advantage of the latest trends and technology that make can make your site better. Contact us and we will show you where your current website could be better and how it could affect meeting your goals. </p>
</div>

 <div className="btn-margin" >
   
 <a className="primary-button" href="about">Learn More</a> 
 </div>
  </div>
  <div className="col-6">
<img src={boy} alt="ok"></img>
  </div>
</div>
</section>


    </Layout>
    </div>
  )
}

export default IndexPage
