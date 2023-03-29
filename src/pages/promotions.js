import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SectionHeaderPromotions from "../components/Promotions/SectionHeaderPromotions"
import SectionPromotions from "../components/Promotions/SectionPromotions"
import "../scss/main.scss"
import SEO from "../components/seo"

const Promotions = ({ data }) => {
  return (
    <Layout>
      <SEO seo={data.strapiPromotionsPage.SEO_Promotions} />
      <section className={"section_current_promotions"}>
        <div className="container row current_promotions_column">
          <p className={"current_promotions"}>
            Please contact the office for current promotions
          </p>
          <a className="appointment" href="tel:516-354-7551">Contact Us</a>
        </div>

      </section>
      {/* <SectionHeaderPromotions /> */}
      {/* <SectionPromotions /> */}
    </Layout>
  )
}

export default Promotions
export const query = graphql`
  {
    strapiPromotionsPage {
      SEO_Promotions {
        Description
        Image_Url
        Title
      }
    }
  }
`
