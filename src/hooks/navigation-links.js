import { useStaticQuery, graphql } from "gatsby"

export const useMenuLinks = () => {
    const { site } = useStaticQuery(
      graphql`
        query SiteMetaData {
          site {
            siteMetadata {
              menuLinks {
                link
                name
                id
                submenuLink {
                  link
                  name
                }
              }
            }
          }
        }
      `
    )
    return site.siteMetadata.menuLinks
  }