/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "../components/Footer"
import MobileContact from "../components/MobileContact"
import MessengerCustomerChat from 'react-messenger-customer-chat';
import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          logo
        }
      },
      file(absolutePath: {regex: "/images/logo.png/"}) {
        absolutePath
        relativePath
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} logo={data.site.siteMetadata.logo}/>
      <div>
        <main>{children}</main>
        {/*<MessengerCustomerChat
          pageId="1480527812217145"
          appId="296614704926289"
              page_id="1480527812217145"
        theme_color="#F24C3D"
        logged_in_greeting="Dzień dobry, jak możemy Ci pomóc?"
        logged_out_greeting="Dzień dobry, jak możemy Ci pomóc?"

        />*/}
        <MobileContact />
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
