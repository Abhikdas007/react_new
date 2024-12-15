import React from 'react'
import { NavLink, Link } from "react-router";
import logo from "../assets/images/logo-bold-white.png";

function Header() {
  return (
    <>
      <header>

        <div className="top-header-area bg-transparent ">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="header-top-text">123, Wall Street, 5th Ave, New York
                </div>
              </div>
              <div className="col-md-6">
                <div className="header-top-text text-end">
                  <NavLink src="/" className=" me-3"><i className="fa fa-mobile me-2"></i>0200 456 7890</NavLink>
                  <NavLink src="/" className=""><i className="fa fa-comment-o me-2"></i>Contact@wexim.com</NavLink>
                </div>
              </div>
            </div>
          </div>

        </div>


        <nav className="navbar navbar-top-default navbar-expand-lg navbar-gradient gradient-bg1 nav-box-round">
          <div className="container">
            <NavLink to="/" title="Logo" className="logo scroll">
              <img src={logo} alt="logo" className="logo-dark default" />
            </NavLink>


            <div className="collapse navbar-collapse" id="wexim">
              <div className="navbar-nav ms-auto">
                <NavLink className="nav-link scroll" to="/">Home</NavLink>
                <NavLink className="nav-link scroll" to="/about">About</NavLink>
                <NavLink className="nav-link scroll" to="/team">Team</NavLink>
                <NavLink className="nav-link scroll" to="/portfolio">Work</NavLink>
                <NavLink className="nav-link scroll" to="/price">Pricing</NavLink>
                <NavLink className="nav-link scroll" to="/contact">Contact</NavLink>
              </div>
            </div>


            <a to="/" className="d-inline-block sidemenu_btn" id="sidemenu_toggle">
              <span></span>
              <span></span>
              <span></span>
            </a>

          </div>
        </nav>


        <div className="side-menu">
          <div className="inner-wrapper">
            <span className="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
            <nav className="side-nav w-100">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/team">Team</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/portfolio">Work</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/price">Pricing</NavLink>
                </li>
               
                <li className="nav-item">
                  <NavLink className="nav-link scroll" to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>

            <div className="side-footer text-white w-100">
              <p className="text-white">&copy; 2021 Wexim. Made With Love by Themesindustry</p>
            </div>
          </div>
        </div>
        {/* <a id="close_side_menu" to="/;"></a> */}
      </header>
    </>
  )
}


export default Header;