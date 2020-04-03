/* eslint-disable */
let oldReactInjected = false
// let appInjected= false;

!(function() {
  if (!oldReactInjected) {
    console.log("[dbg]: injecting oldReact ")
    oldReactInjected = true
    var a = document.createElement("script")
    a.id = "ve-tag"
    a.type = "text/javascript"
    a.async = !0
    a.src = "//cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"
    var b = document.getElementsByTagName("head")[0]
    if (b) {
      // console.log("[dbg]: appending to <head>")
      b.appendChild(a, b)
    } else {
      // console.log("[dbg]: getting other <scripts>")
      var b = document.getElementsByTagName("script")[0]
      // console.log("[dbg]: other <scripts>", b)
      b.parentNode.insertBefore(a, b)
    }
  }
})()

!(function() {
  if (!appInjected) {
    console.log("[dbg]: injecting app ")
    appInjected = true
    var a = document.createElement("script")
    a.id = "ve-tag"
    a.type = "text/javascript"
    a.async = !0
    a.src = "//localhost:3000/static/js/bundle.js"
    var b = document.getElementsByTagName("head")[0]
    if (b) {
      // console.log("[dbg]: appending to <head>")
      b.appendChild(a, b)
    } else {
      // console.log("[dbg]: getting other <scripts>")
      var b = document.getElementsByTagName("script")[0]
      // console.log("[dbg]: other <scripts>", b)
      b.parentNode.insertBefore(a, b)
    }
  }
})()
