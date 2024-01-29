import React, {useState} from "react";
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
  const [isHovered, setHover] = useState(true);


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
        <section id="right-nav-links">
          <a class="right-nav" id="first-link" href="/speakers">SPEAKERS</a>
          <a class="right-nav" href="/sponsors">SPONSORS</a>

          {/* add onClick functions for these frop down options */}
          {/* <select id="nav-dropdown" class="right-nav" onChange={e => routeChange(e.target.value)}>
              <option value="about-tedx" id="dropdown-default">ABOUT US</option>
              <option value="team">TEAM</option>
              <option value="past-events">PAST EVENTS</option>
          </select> */}

          <div class="dropdown">
            <section id="dropdown-arrow">
              <p class="dropbtn" onMouseEnter={() => {setHover(false)}} onMouseLeave={() => {setHover(true)}}>ABOUT</p>
              <img className={isHovered ? "arrow"  : "rotated-arrow"} src= {arrow} alt="arrow"/>
            </section>
            <div className={isHovered ? "dropdown-content" : "hover-dropdown-content"}>
              <a href="/about-tedx" onMouseEnter={() => {setHover(false)}} onMouseLeave={() => {setHover(true)}}>ABOUT US</a>
              <a href="/team" onMouseEnter={() => {setHover(false)}} onMouseLeave={() => {setHover(true)}}>TEAM</a>
              <a href="/past-events" onMouseEnter={() => {setHover(false)}} onMouseLeave={() => {setHover(true)}}>PAST EVENTS</a>
            </div>
          </div>


        </section>




        {/* add on click functionality when tix page up */}
        <div className='ticket-btn'>
                    <button>GET TICKETS</button>
                </div>

       </section>
      </div>
  )
}
export default Navbar;