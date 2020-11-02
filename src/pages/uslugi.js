import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Subscribe from "../components/Subscribe"
import Subheader from "../components/Subheader"
import UslugiSection from "../components/UslugiSection"

const Uslugi = (props) => {
  const {frontmatter} = props.data.markdownRemark;
  return(
    <Layout>
    <SEO title="Usługi" />
    <Subheader title={"Traktujemy z miłością"}/>
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