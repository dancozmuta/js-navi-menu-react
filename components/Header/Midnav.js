import React from "react"

function Midnav() {
  return (
    <div className="navbar px-3">
        <div className="logo-container col-xl-2 col-lg-2 col-md-2 pl-0">
            <a className="menu__logo" href="#">Home</a>
        </div>
        <form className="form-inline col-xl-8 col-lg-6 col-md-5 l-max-700"> 
              <input className="form-control srch" type="search" placeholder="Was möchtest du erleben?" aria-label="Search" /> 
              <button type="submit">
            <i className="svg-icon">
            </i>
            </button>
          </form>
          <div className="nav justify-content-end col-xl-2 col-lg-4 col-md-5 pr-0">
                  <button className="redeem">
                      Gutschein einlösen
                  </button>
                  <div className="header__icon">
                        <i className="cart">
                        </i>
                  </div>
             </div>
    </div>
  )
}

export default Midnav