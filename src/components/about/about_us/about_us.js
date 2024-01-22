import React from "react";

import star from "./assets/Star.svg";
import ted from "./assets/ted.png";
import tedx from "./assets/tedx.png";
import tedxuofw from "./assets/tedxuofw.png";
import email from "./assets/Email.svg";
import facebook from "./assets/Facebook.svg";
import instagram from "./assets/Instagram.svg";
import linkedin from "./assets/LinkedIn.svg";
import tiktok from "./assets/Tiktok.svg";
import "./about_us.css";

function AboutUs(){
  return (
      <div id="about_us">
        {/* About TED */}
        <div id="about_ted">
          <div class="header-box">
            <img src={star} className="star-img" alt="Christmas Star"></img>
            <h1>ABOUT TED</h1>
          </div>
          <div class="content">
            <img src={ted} alt="TED Logo: Ideas worth spreading"></img>
            <p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in 
              California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual 
              TED conferences invite the world's leading thinkers and doers to Vancouver, British Columbia to speak for 18 minutes or less.</p>
          </div>
        </div>

        {/* About TEDx */}
        <div id="about_tedx">
          <div class="header-box">
            <img src={star} className="star-img" alt="Christmas Star"></img>
            <h1>ABOUT TEDx</h1>
          </div>
          <div class="content">
            <img src={tedx} alt="TEDx Logo"></img>
            <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.<br></br>
              At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, 
              where x = independently organized TED event.<br></br>The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.</p>
          </div>
        </div>

        {/* About TEDxUofW */}
        <div id="about_tedxuofw">
          <div class="header-box">
            <img src={star} className="star-img" alt="Christmas Star"></img>
            <h1>ABOUT TEDxUofW</h1>
          </div>
          <div class="content">
            <img src={tedxuofw} alt="TEDxUofW Logo"></img>
            <p>TEDxUofW was established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our student-run organization has sought to give 
              amazing speakers a receptive audience to share their passions with. </p>
          </div>
        </div>
        
        {/* Contact Us */}
        <div id="contact">
          <div class="header-box">
            <img src={star} className="star-img" alt="Christmas Star"></img>
            <h1>CONTACT US</h1>
          </div>
          <div class="content">
            <div id="icons">
                {/* Mail */}
                <a href=""><img src={email}></img>tedxuofw@uw.edu</a>
                {/* Instagram */}
                <a href=""><img src={instagram}></img>@tedxuofw</a>
                {/* TikTok */}
                <a href=""><img src={tiktok}></img>@tedxuofw</a>                
                {/* Facebook */}
                <a href=""><img src={facebook}></img>@tedxuofw</a>
                {/* LinkedIn */}
                <a href=""><img src={linkedin}></img>@tedxuofw</a>
              </div>
          </div>
        </div>
      </div>
  )
}
export default AboutUs;