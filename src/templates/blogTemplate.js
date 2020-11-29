import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Img from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"

import Subheader from "../components/Subheader"
import ContaktForm from "../components/ContaktForm"
import UslugiNav from "../components/UslugiNav"
import Subservices from "../components/Subservices"

export default function Template(
  props, // this prop will be injected by the GraphQL query below.
) {
  const { markdownRemark } = props.data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  //links to other services
  const {services} = props.data.nav.edges[0].node.frontmatter;
  const {
    breadcrumb: { crumbs },
  } = props.pageContext;

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
      <section id="uslugi">
        <div className="container">
          <h2>{frontmatter.title}</h2>
          <div className="row">
            <div className="col-4 services-nav">
              <h4>Katalog usług</h4>
              <UslugiNav services={services} />
            </div>
            <div className="col-8">
              <div className="border-b">
                <p>{frontmatter.description}</p>
              </div>
              <Subservices subservices={frontmatter.subservices} />
            </div>
          </div>
        </div>
      </section>

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
        description
        subservices{
          title,
          description
        }
      }
    },
    imgContakt: file(relativePath: {eq: "kontakt-dog.png"}) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  nav : allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "uslugi"}}}) {
      edges {
        node {
          frontmatter {
            title
            services {
              title
            }
          }
        }
      }
    }
  }
`