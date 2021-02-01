import React from "react"
import {graphql, StaticQuery, Link} from "gatsby"
import Img from "gatsby-image"
import SocialMedia from "./SocialMedia"
import WorkingHours from "./WorkingHours"
import MiddleRating from "./midleRating"
import MakeAnAppointment from "./MakeAnAppointment"


const FooterContact = () =>(

  <StaticQuery
  query={graphql`
    query ContactFooterQuery{
      contact:   allStrapiContacts {
    edges {
      node {
        Link_Make_An_Appointment
        NumberPhone
        Location {
          Text
          Link
          id
        }
      }
    }
  }
  logoFooter: allStrapiSiteLogo {
    edges {
      node {
        AdaptiveLogo {
          url
          alternativeText
        }
      }
    }
  }
    }
  `}
  render={data =>(
    <section className="section-footer_contact">
      <div className="container row adaptive-footer">
        <div className="footer-logo">

          <Link
            to={`/`}
          >
            {/*<Img*/}
            {/*  className="logo-link"*/}
            {/*  fixed={data.logoFooter.edges[0].node.AdaptiveLogo[0].url}*/}
            {/*/>*/}
            <img className="logo-link" src={data.logoFooter.edges[0].node.AdaptiveLogo[0].url} alt={data.logoFooter.edges[0].node.AdaptiveLogo[0].alternativeText} />
          </Link>
          {/*<a href="#" className="logo-link"><img src="/assets/img/adaptive_logo.png" alt=""></a>*/}
          <div className="footer-copyright">©Copyright 2020. All rights reserved</div>
        </div>
        <div className="footer-location">
          <div className="row">
            <a href={data.contact.edges[0].node.Location.Link}><span className="icon fa fa-map-marker"></span>{data.contact.edges[0].node.Location.Text}</a>
            <div className="footer-list_time">

              <WorkingHours />

            </div>

          </div>

          <a className="footer-contact"
             href={`tel:${data.contact.edges[0].node.NumberPhone}`}>{data.contact.edges[0].node.NumberPhone}</a>
          <MakeAnAppointment
            classItem="footer-appointment"
          />
        </div>
        <div className="footer-social">
          <SocialMedia />
          <div className="mt">
            <MiddleRating />
            <div className="powered">Powered by <a href="#">Meva ©</a></div>
          </div>
        </div>
      </div>
    </section>
  )}
  />
  

)



export default FooterContact