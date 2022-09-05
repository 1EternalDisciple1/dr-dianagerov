import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import "../scss/main.scss"
import SEO from "../components/seo"

function SectionAdvantage(prop) {
  const data = useStaticQuery(graphql`
    query AdvantageQuery {
      allStrapiAdvantages {
        edges {
          node {
            id
            TitleOne
            TitleTwo
            Text
            alternativeText
            Link {
              TextLink
            }
            mobileImage: Image {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
            desktopImage: Image {
              childImageSharp {
                fixed(width: 400) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
        }
      }
      seo: strapiTechnologyPageSeo {
        SEO_Technology {
          Description
          Image_Url
          Title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO seo={data.seo.SEO_Technology} />
      <div className="container sections-technology">
        {data.allStrapiAdvantages.edges.map((section, i) => {
          const titleOne = section.node.TitleOne || null
          const titleTwo = section.node.TitleTwo || null
          const text = section.node.Text || null
          const alt = section.node.AlternativeText || null

          return (
            <section
              key={section.node.id}
              className={`section-padding row ${
                i % 2 === 1 ? "row-reverse" : " "
              }`}
            >
              <div className="text-container">
                <h2 className="heading_text-container">{titleOne}</h2>
                <h3 className="heading_title">{titleTwo}</h3>
                {/*<p>{text}</p>*/}
                <ReactMarkdown source={text} />
                {section.node.Link === null ? (
                  " "
                ) : (
                  <Link to={`${section.node.Link.Link}`} className="learn_more">
                    {section.node.Link.TextLink}
                  </Link>
                )}
              </div>
              <div className="container-img">
                <Image
                  image={section.node.mobileImage.childImageSharp.fixed}
                  desktopImage={section.node.desktopImage.childImageSharp.fixed}
                  alt={alt}
                />
                {/* <img className={`lazyload`} data-src={img} alt={alt} /> */}
              </div>
            </section>
          )
        })}
      </div>
    </Layout>
  )
}

export default SectionAdvantage
