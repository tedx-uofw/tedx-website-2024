import React from "react";
import logo from "./nav-img/logo.png";
import { useNavigate } from "react-router-dom";

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
        <a href="/">
          <img class="nav-logo" src={logo} alt="tedx-logo"/>
        </a>
       </section>

       <section id="right-nav">
        {/* links to all other pages */}
        <a href="/speakers">Speakers</a>
        <a href="/sponsors">Sponsors</a>

        {/* add onClick functions for these frop down options */}
        <select id="nav-dropdown" onChange={e => routeChange(e.target.value)}>
          <option value="about-tedx">About Us</option>
          <option value="team">Team</option>
          <option value="past-events">Past Events</option>
        </select>

        {/* add on click functionality when tix page up */}
        <button id="tix-button" type="button">Get Tickets</button>

       </section>
      </div>
  )
}
export default Navbar;