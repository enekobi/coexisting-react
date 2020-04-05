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
          Click me!
        </div>
        <div id="nko-log" style={{ backgroundColor: color }}>
          <h3>Site: {versions?.bundle}</h3>
          <h3>Global: {versions?.global}</h3>
        </div>
      </div>
    </>
  )
}
