import React from "react";
import logo from "./assets/logo.png";
import email from "./assets/Email.svg";
import facebook from "./assets/Facebook.svg";
import instagram from "./assets/Instagram.svg";
import linkedin from "./assets/LinkedIn.svg";
import tiktok from "./assets/Tiktok.svg";

import "./footer.css";

function Footer(){
  return (
      <div id="footer">
        <footer>
          {/* 1st half of footer */}
          <div id="top">
            {/* Logo */}
            <a href=""><img src={logo} alt="Logo of TEDxUofW" id="logo" hfref="/"></img></a>
            {/* Sitemap */}
            <div id="pages">
              {/* Events Section */}
              <div class="section">
                <p class="header">EVENT</p>
                <a href="/">Home</a>
                <a href="/speakers">Speakers</a>
                <a href="/sponsors">Sponsors</a>
              </div>
              {/* About Section */}
              <div class="section">
                <p class="header">ABOUT</p>
                <a href="/about-tedx">About Us</a>
                <a href="/team">Team</a>
                <a href="/past-events">Past Events</a>
              </div>
            </div>
          </div>

          {/* 2nd half of footer */}
          <div id="bottom">
            {/* Copyright */}
            <p id="copyright">©TEDxUofW 2023 | Crossroads</p>
            {/* Logos */}
            <div id="icons">
              {/* Mail */}
              <a href=""><img src={email}></img></a>
              {/* Facebook */}
              <a href=""><img src={facebook}></img></a>
              {/* Instagram */}
              <a href=""><img src={instagram}></img></a>
              {/* TikTok */}
              <a href=""><img src={tiktok}></img></a>
              {/* LinkedIn */}
              <a href=""><img src={linkedin}></img></a>
            </div>
          </div>
        </footer>
      </div>
  )
}
export default Footer;