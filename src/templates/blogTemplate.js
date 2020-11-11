import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Img from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"

import Subscribe from "../components/Subscribe"
import Subheader from "../components/Subheader"
import ContaktForm from "../components/ContaktForm"


export default function Template(
  props, // this prop will be injected by the GraphQL query below.
) {
  const { markdownRemark } = props.data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const {
    breadcrumb: { crumbs },
  } = props.pageContext;
console.log(props.location);
  const customCrumbLabel = props.location.pathname.replace('/', ' ');
  const currentCrumbName = customCrumbLabel.slice(customCrumbLabel.lastIndexOf('/') + 1);
  return (
    <Layout>
    <SEO title={frontmatter.title} />
    <Subheader title={"Traktujemy z miłością"}/>
    <div className="container">
    <Breadcrumb
      crumbs={crumbs}
      crumbSeparator=" / "
      crumbLabel={currentCrumbName}
    />
    </div>
    

      <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <section id="kontakt-form" className="background__secondadry">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <ContaktForm />
              </div>
              <div className="col-4">
                <Img fluid={props.data.imgContakt.childImageSharp.fluid} className="main-background"/>
              </div>
            </div>       
          </div>
        </section>
  </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    },
    imgContakt: file(relativePath: {eq: "kontakt-dog.png"}) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`