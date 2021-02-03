import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  pl: "Pl",
  de: "De",
}

const Language = () => {
    
  return (
    <div style={{marginRight: "8px"}}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language, index) => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `#F24C3D` : `black`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language