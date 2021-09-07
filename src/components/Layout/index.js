import * as React from "react"
import Header from "../Header"
import Footer from "../Footer"

const divStyles = {
  background: "#c71919",
  color: "#ffffff",
}

export default function Layout({ children }) {
  return <div style={divStyles}><Header/>{children}<Footer/></div>
}