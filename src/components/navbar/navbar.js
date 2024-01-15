import React from "react";
import logo from "./nav-img/logo.png";
import { Link } from 'react-router-dom';

function Navbar(){
  const getTix = () => {
    console.log("add ticket page when up");
    // window.location = "url"
  };

  return (
      <div id="navbar">
       <section class="left-nav">
        {/* add image and then on click have it go to home page */}
        <a href="/">
          <img class="nav-logo" src={logo} alt="tedx-logo"/>
        </a>
       </section>
       <section class="right-nav">
        {/* links to all other pages */}
        <a href="/speakers">Speakers</a>
        <a href="/sponsors">Sponsors</a>

        {/* add onClick functions for these frop down options */}
        <select id="nav-dropdown">
          <option value="about"><a href="/about-tedx">About Us</a></option>
          <option value="team"><a href="/team">Team</a></option>
          <option vale="past-events">Past Events</option>
        </select>

        <button id="get-tix-button" type="button" onClick={getTix}>Get Tickets</button>

       </section>
      </div>
  )
}
export default Navbar;