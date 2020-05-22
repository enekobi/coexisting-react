import React, { useState } from "react"
import "./appContainer.css"

const COLORS = ["aquamarine", "sandybrown"]
export default () => {
  const [versions, setVersions] = useState({})
  const [color, setColor] = useState(COLORS[0])
  const handleClick = () => {
    const { version } = require("react")
    setVersions({})
    setVersions({ bundle: version, global: window.React.version })
    setColor(current => COLORS.find(c => c !== current))
    const event = new CustomEvent("trigger-app")
    window.dispatchEvent(event)
  }
  return (
    <>
      <h1>Click button to refresh React version logs:</h1>
      <div className="container">
        <div id="root" onClick={handleClick}>
          <div
            style={{
              backgroundColor: "lightgrey",
              marginBottom: "5px",
            }}
          >
            Click me for check local site!
          </div>
          <iframe
            src="https://simple-msg.netlify.app/index.html"
            style={{
              border: "solid green 5px",
              height: "300px",
              width: "100%",
            }}
          ></iframe>
        </div>
        <div id="nko-log" style={{ backgroundColor: color }}>
          <h3>Site: {versions?.bundle}</h3>
          <h3>Global: {versions?.global}</h3>
        </div>
      </div>
    </>
  )
}
