import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Subscribe from "../components/Subscribe"
import Subheader from "../components/Subheader"
import UslugiSection from "../components/UslugiSection"

const Uslugi = (props) => (
    <Layout>
    <SEO title="Usługi" />
    <Subheader image={props.data.dogcare.childImageSharp.fluid} title={"Traktujemy z miłością"}/>
    <UslugiSection />
    <Subscribe  image={props.data.dog.childImageSharp.fluid}/>
  </Layout>
)

export default Uslugi

export const pageQuery = graphql`
query{
    dogcare : file(relativePath: {eq: "dog_care.png"}) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
    },
    dog : file(relativePath: {eq: "dog.png"}) {
        childImageSharp {
            fluid{
            ...GatsbyImageSharpFluid
            }
        }
      }
}
`