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
          <div class="aboutus-header">
            <img src={star} className="star-img" alt="Christmas Star"></img>
            <h1>ABOUT TED</h1>
          </div>
          <div class="content">
            <img src={ted} alt="TED Logo: Ideas worth spreading"></img>
            <p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in 
              California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual 
              TED conferences invite the world's leading thinkers and doers to Vancouver, British Columbia to speak for 18 minutes or less.</p>
            {/* <p>TED is on a mission to discover and spread ideas that spark imagination, embrace possibility and catalyze impact. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. 
              We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
              TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, 
              arts and global issues. In addition to the hundreds of TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons 
              (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, more than 3,000 independently run TEDx events bring people together to share 
              ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3 billion in funding for projects that seek to make the world more beautiful, sustainable and just. 
              In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future. View a full list of TED’s many programs and initiatives.
              <br></br><br></br>TED is owned by a nonprofit, nonpartisan foundation. Our aim is to help create a future worth pursuing for all.
              <br></br><br></br>Follow TED on Twitter, Facebook, Instagram, TikTok and on LinkedIn.</p> */}
          </div>
        </div>

        {/* About TEDx */}
        <div id="about_tedx">
          <div class="aboutus-header">
            <img src={star} className="star-img" alt="Christmas Star"></img>
            <h1>ABOUT TEDx</h1>
          </div>
          <div class="content">
            <img src={tedx} alt="TEDx Logo"></img>
            <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.<br></br><br></br>
              At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, 
              where x = independently organized TED event.<br></br><br></br>The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.</p>
          </div>
        </div>

        {/* About TEDxUofW */}
        <div id="about_tedxuofw">
          <div class="aboutus-header">
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
          <div class="aboutus-header">
            <img src={star} className="star-img" alt="Christmas Star"></img>
            <h1>CONTACT US</h1>
          </div>
            <div id="links">
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
  )
}
export default AboutUs;