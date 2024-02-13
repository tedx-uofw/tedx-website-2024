import React, {useState} from "react";
import logo from "./nav-img/logo.png";
import arrow from "./nav-img/arrow.png";
import menu from "./nav-img/menu.png";
import exit from "./nav-img/close.png";



// import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar(){

  const [isClicked, setClick] = useState(true);

  // let navigate = useNavigate();
  // const routeChange = (page) =>{
  //   let path = "/" + page;
  //   navigate(path);
  // }


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
       <section id="small-screen">
          <img id={isClicked ? "side-menu-icon" : "side-menu-icon-clicked"} src={menu} onClick={() => {setClick(false)}} alt="side-menu-icon"/>
          <div className={isClicked ? "side-menu-content" : "side-menu-content-clicked"}>
            <div className='ticket-btn'>
                <button id="nav-button">GET TICKETS</button>
                <img id="exit-button" src={exit} onClick={() => {setClick(true)}} alt="exit-button"/>
            </div>
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