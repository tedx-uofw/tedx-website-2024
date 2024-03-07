import React, {useState } from "react";
import logo from "./nav-img/logo.png";
import arrow from "./nav-img/arrow.png";
import exit from "./nav-img/close.png";
import arrowColor from "./nav-img/arrow-color.png";

// import line from "./nav-img/line.png";

// import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar(){

  const [isClicked, setClick] = useState(true);
  const [isHovered, setHover] = useState(false);

  function routeToTicketLink () {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScFKzPkloRcReyNhadtJzJZ9HuH_g9o7tsom5HJczat4zWp0A/viewform";
  }

  // let navigate = useNavigate();
  // const routeChange = (page) =>{
  //   let path = "/" + page;
  //   navigate(path);
  // }

  // const [width, setWidth] = useState(window.innerWidth);
  // adapt for touch
  let prevScroll = window.scrollY;
  window.onscroll = function() {
    let scroll = window.scrollY;
    if(document.getElementById("navbar") !== null) {
      if (prevScroll > scroll || scroll <= 0) {
        document.getElementById("navbar").style.top = "0px";
      } else {
        document.getElementById("navbar").style.top = "-150px";
      }
      prevScroll = scroll;
    }
  }

    const handleResize = () => {
      if(window.innerWidth > 1024) {
        setClick(true);
      }
    };

    window.addEventListener('resize', handleResize);

  return (
      <div id={isClicked ? "navbar" : "navbar-with-side-menu"}>
       <section id="left-nav" onClick={() => {setClick(true)}}>

        <a id={isClicked ? "logo" : "logo-clicked"} href="/">
          <img id={isClicked ? "nav-logo" : "nav-logo-clicked"} src={logo} alt="tedx-logo"/>
        </a>
       </section>

       <section id="right-nav">
        {/* links to all other pages */}
        <section id="right-nav-links">
          <a class="right-nav" id="first-link" href="/">HOME</a>
          <a class="right-nav" href="/speakers">SPEAKERS</a>
          <a class="right-nav" href="/sponsors">SPONSORS</a>

          <div class="dropdown" onMouseEnter={() => {setHover(true)}} onMouseLeave ={() => {setHover(false)}}>
            <section id="dropdown-arrow">
              <p class="drop-cover">ABOUT</p>
              <img className="arrow" src= {isHovered ? arrowColor : arrow} alt="arrow"/>
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
                    <button id="nav-button" className='btn'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLScFKzPkloRcReyNhadtJzJZ9HuH_g9o7tsom5HJczat4zWp0A/viewform' className='tickets-link'>GET TICKETS</a>
                    </button>
                </div>

       </section>
       <section id="small-screen">
       <svg id={isClicked ? "side-menu-icon" : "side-menu-icon-clicked"} onClick={() => {setClick(false)}} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"/></svg>
          {/* <img id={isClicked ? "side-menu-icon" : "side-menu-icon-clicked"} src={menu} onClick={() => {setClick(false)}} alt="side-menu-icon"/> */}
          <div className={isClicked ? "side-menu-content" : "side-menu-content-clicked"}>
          <div className="ticket-btn-row">
          <div className='ticket-btn'>
              <button id="nav-button" className='btn'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLScFKzPkloRcReyNhadtJzJZ9HuH_g9o7tsom5HJczat4zWp0A/viewform' className='tickets-link'>GET TICKETS</a>
                </button>
            </div>
            <img id="exit-button" src={exit} onClick={() => {setClick(true)}} alt="exit-button"/>

          </div>

            <a id="first-link" href="/">HOME</a>
            <a href="/speakers">SPEAKERS</a>
            <a href="/sponsors">SPONSORS</a>
            <a href="/about-tedx">ABOUT US</a>
            <a href="/team">TEAM</a>
            <a href="/past-events">PAST EVENTS</a>
          </div>
        </section>
      </div>
  )
}
export default Navbar;