import React from "react"
import Topnav from "./Topnav"
import Midnav from "./Midnav"
import Mainnav from "./Mainnav/Mainnav"

function Header() {
  return(
    <nav className="nav-container container-fluid px-0">
        <Topnav />
        <Midnav />
        <Mainnav />
    </nav>
  )
}

export default Header