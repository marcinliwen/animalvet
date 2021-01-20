/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, pathname, subservices }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            logo
            siteURL
            city
            street
            post_code
            phone_display
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const seoData = { 
      "@context": "https://schema.org",
      "@type": "VeterinaryCare",
      "name": site.siteMetadata.title,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": site.siteMetadata.city,
        "postalCode": site.siteMetadata.post_code,
        "streetAddress": site.siteMetadata.street,
        "addressCountry" : "PL"
      },
      "name" :site.siteMetadata.title,
      "telephone": site.siteMetadata.phone_display,
      "description": site.siteMetadata.description,
      "image":"/img/animalvet.png",
      "url": site.siteMetadata.siteURL,
      "knowsLanguage": "de-DE",
      "knowsLanguage": "pl-PL",
      "logo": site.siteMetadata.logo,
      "isAcceptingNewPatients": true,
      "brand" : [
        {
          "@type":"Service",
          "serviceType" : "Pet care",
          "provider": {
            "@type": "VeterinaryCare",
            "name": site.siteMetadata.title
          }
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "10:00",
          "closes": "16:00"
        },
      ],
  }

  const seoLogo = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": site.siteMetadata.siteURL,
    "logo": site.siteMetadata.siteURL + site.siteMetadata.logo,
  };
  //breadcrumb seo
  
  
  
  var seo;
if(subservices){
  var urlSubs = pathname.substring(1, (pathname.lastIndexOf("/")));
  
   seo = { 
    url: `${site.siteMetadata.siteURL}${pathname.substring(0, (pathname.lastIndexOf("/"))) || ''}`,
    urlSubservices: `${site.siteMetadata.siteURL}${pathname || ''}`,
    titleSubservices: urlSubs.charAt(0).toUpperCase() + urlSubs.slice(1)
  };
} else{
 seo = { url: `${site.siteMetadata.siteURL}${pathname || ''}` };

} 
 

  // Initial breadcrumb list
  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': site.siteMetadata.siteURL,
        name: 'Homepage',
      },
      position: 1,
    },
  ];

  // Push current blogpost into breadcrumb list
  itemListElement.push({
    '@type': 'ListItem',
    item: {
      '@id': seo.url,
      name: seo.titleSubservices || title,
    },
    position: 2,
  });

  if(subservices){
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.urlSubservices,
        name: title,
      },
      position: 3,
    });
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(seoData)}</script>
      <script type="application/ld+json">{JSON.stringify(seoLogo)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
