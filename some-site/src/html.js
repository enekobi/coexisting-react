import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          id="app"
          src="http://localhost:3000/static/js/bundle.js"
          type="text/javascript"
          async
        />
        <script
          id="chunk"
          src="http://localhost:3000/static/js/0.chunk.js"
          type="text/javascript"
          async
        />
        <script
          id="chunk"
          src="http://localhost:3000/static/js/1.chunk.js"
          type="text/javascript"
          async
        />
        <script
          id="main-chunk"
          src="http://localhost:3000/static/js/main.chunk.js"
          type="text/javascript"
          async
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
