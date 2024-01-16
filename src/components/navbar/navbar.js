import React from "react";
import logo from "./nav-img/logo.png";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar(){

  let navigate = useNavigate();
  const routeChange = (page) =>{
    let path = "/" + page;
    navigate(path);
  }

  return (
      <div id="navbar">
       <section id="left-nav">
        {/* add image and then on click have it go to home page */}
        <a id='logo' href="/">
          <img id="nav-logo" src={logo} alt="tedx-logo"/>
        </a>
       </section>

       <section id="right-nav">
        {/* links to all other pages */}
          <a class="right-nav" href="/speakers">SPEAKERS</a>
          <a class="right-nav" href="/sponsors">SPONSORS</a>

          {/* add onClick functions for these frop down options */}
          <select id="nav-dropdown" class="right-nav" onChange={e => routeChange(e.target.value)}>
              <option value="about-tedx">ABOUT US</option>
              <option value="team">TEAM</option>
              <option value="past-events">PAST EVENTS</option>
          </select>

        {/* add on click functionality when tix page up */}
        <button id="tix-button" class="right-nav" type="button">GET TICKETS</button>

       </section>
      </div>
  )
}
export default Navbar;