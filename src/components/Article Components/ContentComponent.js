import React from "react"
import ReactMarkdown from "react-markdown"

const ContentComponent = props => {
  return (
    <article>
      <div className="data_article">{props.dataArticle}</div>
      <ReactMarkdown source={props.contentArticle} escapeHtml={false} />
    </article>
  )
}

export default ContentComponent
