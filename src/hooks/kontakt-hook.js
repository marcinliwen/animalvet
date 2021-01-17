import { useStaticQuery, graphql } from "gatsby"

export const useKontaktInfo = () => {
    const { site } = useStaticQuery(
      graphql`
        query KontaktInfoData {
          site {
            siteMetadata {
                    phone_number,
                    phone_display,
                    whatsup_number,
                    address,
                    post_code,
                    mail,
                    open_day,
                    open_hours
            }
          }
        }
      `
    )
    return site.siteMetadata
  }