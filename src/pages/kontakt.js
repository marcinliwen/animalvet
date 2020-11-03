import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Subscribe from "../components/Subscribe"
import Subheader from "../components/Subheader"
import Gmap from "../components/Gmap"
import ContaktForm from "../components/ContaktForm"

const Kontakt = (props) => {

    const {
      breadcrumb: { crumbs },
    } = props.pageContext;
  
    const customCrumbLabel = props.location.pathname.replace('/', ' ');
  
    return(
      <Layout>
      <SEO title="Kontakt" />
      <Subheader title={"Traktujemy z miłością"}/>
      <div className="container">
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator=" / "
        crumbLabel={customCrumbLabel}
      />
       </div>
        <section id="kontakt">
            <div className="container">
                <div className="col-12">
                    <h2>Kontakt</h2>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>Zasieki 4B</p>
                        <p>68-343 Zasieki</p>
                    </div>
                    <div className="col-8">
                    <Gmap />
                    </div>
                </div>
                <ContaktForm />
            </div>
        </section>
      <Subscribe />
    </Layout>
  )}
  
  export default Kontakt
  