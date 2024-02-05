import React from "react";
import logo from "./nav-img/logo.png";
import arrow from "./nav-img/arrow.png";

// import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar(){

  // let navigate = useNavigate();
  // const routeChange = (page) =>{
  //   let path = "/" + page;
  //   navigate(path);
  // }


  return (
      <div id="navbar">
       <section id="left-nav">

        <a id='logo' href="/">
          <img id="nav-logo" src={logo} alt="tedx-logo"/>
        </a>
       </section>

       <section id="right-nav">
        {/* links to all other pages */}
        <section id="right-nav-links">
          <a class="right-nav" id="first-link" href="/speakers">SPEAKERS</a>
          <a class="right-nav" href="/sponsors">SPONSORS</a>

          <div class="dropdown">
            <section id="dropdown-arrow">
              <p class="drop-cover">ABOUT</p>
              <img className="arrow" src= {arrow} alt="arrow"/>
            </section>
            <div className="dropdown-content">
              <a href="/about-tedx">ABOUT US</a>
              <a href="/team">TEAM</a>
              <a href="/past-events">PAST EVENTS</a>
            </div>
          </div>


        </section>




        {/* add on click functionality when tix page up */}
        <div className='ticket-btn'>
                    <button id="nav-button">GET TICKETS</button>
                </div>

       </section>
      </div>
  )
}
export default Navbar;