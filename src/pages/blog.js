import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/main.scss"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        
<div className='hero-page'>
  <div className="flex">
    <div className="col-7">    
      <h1>Blog</h1>     
      <h2>Learn about our web design and development process </h2> 
    </div>   
  </div>  
  </div>
  
  <section className="flex blog-wrap" >
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article  className="col-5 blog-article" key={node.fields.slug}>
              <header >
              <small>{node.frontmatter.date}</small>
                <h3 style={{padding: "5px"}}>
                  <Link  to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
               
              </header>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
              <Link  to={node.fields.slug}>
                    Read More
                  </Link>
            </article>
          )
        })}</section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
