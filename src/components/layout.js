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
import MessengerCustomerChat from 'react-messenger-customer-chat';
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <MessengerCustomerChat
    pageId="1480527812217145"
    appId="296614704926289"
        page_id="1480527812217145"
  theme_color="#ff6290"
  logged_in_greeting="Dzień dobry, jak możemy Ci pomóc?"
  logged_out_greeting="Dzień dobry, jak możemy Ci pomóc?"

  />
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
