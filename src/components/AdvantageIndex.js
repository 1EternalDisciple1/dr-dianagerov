import React, { useState } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Image from "../components/image"

function SectionAdvantageIndex() {
  const [link, setLink] = useState(null)
  const [textLink, setTextLink] = useState(null)

  return (
    <StaticQuery
      query={graphql`
        query AdvantageIndexQuery {
          allStrapiAdvantages {
            edges {
              node {
                id
                TitleOne
                TitleTwo
                Text
                alternativeText
                Link {
                  Link
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
        }
      `}
      render={data => (
        <>
          {data.allStrapiAdvantages.edges[
            data.allStrapiAdvantages.edges.length - 1
          ].node.Link !== null
            ? setLink(
                data.allStrapiAdvantages.edges[
                  data.allStrapiAdvantages.edges.length - 1
                ].node.Link.Link
              )
            : setLink("")}
          {data.allStrapiAdvantages.edges[
            data.allStrapiAdvantages.edges.length - 1
          ].node.Link !== null
            ? setTextLink(
                data.allStrapiAdvantages.edges[
                  data.allStrapiAdvantages.edges.length - 1
                ].node.Link.TextLink
              )
            : setTextLink("")}

          <section
            key={
              data.allStrapiAdvantages.edges[
                data.allStrapiAdvantages.edges.length - 1
              ].node.id
            }
            className="section-padding row"
          >
            <div className="text-container">
              <h2 className="heading_text-container">
                {
                  data.allStrapiAdvantages.edges[
                    data.allStrapiAdvantages.edges.length - 1
                  ].node.TitleOne
                }
              </h2>
              <h3 className="heading_title">
                {
                  data.allStrapiAdvantages.edges[
                    data.allStrapiAdvantages.edges.length - 1
                  ].node.TitleTwo
                }
              </h3>
              <p>
                {
                  data.allStrapiAdvantages.edges[
                    data.allStrapiAdvantages.edges.length - 1
                  ].node.Text
                }
              </p>
              {link !== "" ? (
                <Link to={`/${link}`} className="learn_more">
                  {textLink}
                </Link>
              ) : null}
            </div>
            <div className="container-img">
              {/*<Img*/}
              {/*  fluid={data.allStrapiAdvantages.edges[0].node.Image.childImageSharp.fluid}*/}
              {/*/>*/}
              <Image
                image={
                  data.allStrapiAdvantages.edges[
                    data.allStrapiAdvantages.edges.length - 1
                  ].node.mobileImage.childImageSharp.fixed
                }
                desktopImage={
                  data.allStrapiAdvantages.edges[
                    data.allStrapiAdvantages.edges.length - 1
                  ].node.desktopImage.childImageSharp.fixed
                }
                alt={
                  data.allStrapiAdvantages.edges[
                    data.allStrapiAdvantages.edges.length - 1
                  ].node.AlternativeText
                }
              />
              {/* <img
                className={`lazyload`}
                data-src={data.allStrapiAdvantages.edges[0].node.Image[0].url}
                alt={
                  data.allStrapiAdvantages.edges[0].node.Image[0]
                    .alternativeText
                }
              /> */}
            </div>
          </section>
        </>
      )}
    />
  )
}

export default SectionAdvantageIndex
