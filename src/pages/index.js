import React from "react"

import Layout from "../components/layout"
import flamingo from  "../img/flamingo-illustration.svg"

const IndexPage = () => {
 
  return(
    <div>
      <Layout>
      <section>
<div className='hero-page'>
  <div className="flex">
    <div className="col-6">    
      <h1>Web Design and Development</h1>     
      <h2>Give your business a leg up with a great website</h2> 
    </div>
    <div className="col-6 hero-image">
    <img src={flamingo}></img>
    </div>

  </div>
  
  </div>



</section>

    </Layout>
    </div>
  )
}

export default IndexPage
