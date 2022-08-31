import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import StarOffSvg from "../images/off.svg"

const Rating = () => {
  return (
    <div
      className="rating_group"
      style={{
        background: `url(${StarOffSvg})`,
        backgroundSize: `20px auto`,
        backgroundRepeat: `repeat-x`,
      }}
    >
      {/* <label className="ratingLabel" htmlFor="one">
        rating star one
      </label> */}
      <input
        aria-label="rating star one"
        id="one"
        type="radio"
        className="rating_star"
        name="rating"
        value="1"
      />
      {/* <label className="ratingLabel" htmlFor="two">
        rating star two
      </label> */}
      <input
        aria-label="rating star two"
        id="two"
        type="radio"
        className="rating_star"
        name="rating"
        value="2"
      />
      {/* <label className="ratingLabel" htmlFor="three">
        rating star three
      </label> */}
      <input
        aria-label="rating star three"
        id="three"
        type="radio"
        className="rating_star"
        name="rating"
        value="3"
      />
      {/* <label className="ratingLabel" htmlFor="four">
        rating star four
      </label> */}
      <input
        aria-label="rating star four"
        id="four"
        type="radio"
        className="rating_star"
        name="rating"
        value="4"
      />
      {/* <label className="ratingLabel" htmlFor="five">
        rating star five
      </label> */}
      <input
        aria-label="rating star five"
        id="five"
        type="radio"
        className="rating_star"
        name="rating"
        value="5"
      />
    </div>
  )
}

export default Rating
