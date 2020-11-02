import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Subscribe from "../components/Subscribe"
import Subheader from "../components/Subheader"
import UslugiSection from "../components/UslugiSection"

const Uslugi = (props) => {
  const {frontmatter} = props.data.markdownRemark;

  const {
    breadcrumb: { crumbs },
  } = props.pageContext;

  const customCrumbLabel = props.location.pathname.replace('/', ' ');

  return(
    <Layout>
    <SEO title="Usługi" />
    <Subheader title={"Traktujemy z miłością"}/>
    <div className="container">
    <Breadcrumb
      crumbs={crumbs}
      crumbSeparator=" / "
      crumbLabel={customCrumbLabel}
    />
    </div>
    
    <UslugiSection 
      title={frontmatter.title} 
      services={frontmatter.services}
      html={props.data.markdownRemark.html}
    />
    <Subscribe />
  </Layout>
)}

export default Uslugi

export const pageQuery = graphql`
query{
      markdownRemark{
        frontmatter {
          title,
          services{
            image,
            title,
            text
          },
        },
        html
      }
}
`
/*
export const productPageQuery = graphql`
  query ProductPage ($id: String!){
    markdownRemark (id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
*/