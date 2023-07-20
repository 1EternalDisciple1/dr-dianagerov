import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DQYTHSNFS4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DQYTHSNFS4');`,
          }}
        />

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="canonical" href="https://drdianagerov.com/" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TQM55RH"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Happy Smiles Dental",
          "image": "https://res.cloudinary.com/dwipih5iz/image/upload/v1605191765/20180815_124031_1_1_3f09f8541f.jpg",
          "@id": "",
          "url": "https://drdianagerov.com",
          "telephone": "(516) 354-7551",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1300 Union Turnpike, Suite 106",
            "addressLocality": "New Hyde Park",
            "addressRegion": "NY",
            "postalCode": "11040",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.7530009,
            "longitude": -73.69835239999999
          },
          "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Monday",
            "opens": "09:00",
            "closes": "18:00"
          },{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Tuesday",
            "opens": "09:00",
            "closes": "18:00"
          },{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Wednesday",
            "opens": "09:00",
            "closes": "14:00"
          },{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Thursday",
            "opens": "09:00",
            "closes": "18:00"
          },{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Friday",
            "opens": "09:00",
            "closes": "14:00"
          },{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }],
          "sameAs": "https://www.instagram.com/drdianagerov"
        }
        </script>`,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
