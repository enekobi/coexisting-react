import React from "react"

const onClick = () => {
  const { version } = require("react")
  console.log("[dbg]: Site bundled React version", version)
  console.log("[dbg]: window's React version", window.React.version)

  const event = new CustomEvent("trigger-app")
  window.dispatchEvent(event)
}
export default () => (
  <button id="root" type="button" onClick={onClick}>
    Click me!
  </button>
)
