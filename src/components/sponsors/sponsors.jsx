import React, {useState, useLayoutEffect} from "react";
import asuw from "./sponsors-img/asuw.png";
import uwaa from "./sponsors-img/UWAA.jpg";
import wsecu from "./sponsors-img/WSECU.png";
import nekoCat from "./sponsors-img/neko-cat-logo.png";
import cotopaxi from "./sponsors-img/cotopaxi.png";
import bouldering from "./sponsors-img/bouldering.png";
import wLogo from "./sponsors-img/W-Logo.png";
import gpss from "./sponsors-img/GPSS.jpg";
import hub from "./sponsors-img/hub.png";
import { Helmet } from 'react-helmet';


import "./sponsors.css";

function Sponsors(){
  const [myText, setMyText] = useState(" ");
  const [myText2, setMyText2] = useState(" ");
  const [myText3, setMyText3] = useState(" ");
  const [myText4, setMyText4] = useState(" ");
  const [myText5, setMyText5] = useState(" ");
  const [myText6, setMyText6] = useState(" ");
  const [myText7, setMyText7] = useState(" ");
  const [myText8, setMyText8] = useState(" ");
  const [myText9, setMyText9] = useState(" ");


  const [isHovered, setHover] = useState(true);
  const [isHovered2, setHover2] = useState(true);
  const [isHovered3, setHover3] = useState(true);
  const [isHovered4, setHover4] = useState(true);
  const [isHovered5, setHover5] = useState(true);
  const [isHovered6, setHover6] = useState(true);
  const [isHovered7, setHover7] = useState(true);
  const [isHovered8, setHover8] = useState(true);
  const [isHovered9, setHover9] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
        let firstFriendsBox = document.getElementById("first-box");
        let rect = firstFriendsBox.getBoundingClientRect();
        let xPos = rect.left;
        let friendsHeader = document.getElementById("friends-header");
        friendsHeader.style.marginLeft = xPos + "px";
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (     
      <div id="friends">
        <Helmet>
          <title>Sponsors</title>
          <meta name="description" content="Explore the sponsors that made the 2024 TEDxUofW conference possible" />
          <meta name="keywords" content="the HUB, UW Alumni Association, Graduate and Professional Student Senate (GPSS), ASUW, University Marketing & Communications (UMAC), Cotopaxi, Seattle Bouldering Project (SBP), NEKO Cat Cafe, WSECU" />
        </Helmet>
      <div id="friends-card">
        <h1 id="friends-header">THANK YOU TO OUR SPONSORS</h1>
          <div id="friends-bucket">
          {/* <div id="cards"> */}

          <a href="http://www.asuw.org/" id="first-box">
            <section className="friends-box"
              onMouseEnter={() => {setHover4(false); setMyText4('The University of Washington is committed to providing access, equal opportunity and reasonable accommodation in its services, programs, activities, education and employment for individuals with disabilities. To request disability accommodation contact the Disability Services Office at least ten days in advance at: 206.543.6450/V, 206.543.6452/TTY, 206.685.7264 (FAX), or e-mail at dso@u.washington.edu.')}}
              onMouseLeave={() => {setHover4(true); setMyText4('')}}
            ><p id="long-text">{myText4}</p>
              <img className={isHovered4 ? "friends-logo" : "hover-friends-logo"} src={asuw} alt="logo"/>
            </section>
            </a>

            <a href="https://wsecu.org/">
            <section className="friends-box"
              onMouseEnter={() => {setHover9(false); setMyText9("We are a member-powered credit union that provides unparalleled service. From today’s small transactions to tomorrow’s big financial goals, we're the champion in your corner to help you every step of the way. We’re not-for-profit, so we can focus on you and on investing in the communities that make Washington such an amazing place to call home.")}}
              onMouseLeave={() => {setHover9(true); setMyText9('')}}
            ><p>{myText9}</p>
              <img className={isHovered9 ? "friends-logo" : "hover-friends-logo"} src={wsecu} alt="logo"/>
            </section>
            </a>

            <a href="https://www.washington.edu/brand/about/">
            <section className="friends-box"
              onMouseEnter={() => {setHover5(false); setMyText5('University Marketing & Communications (UMAC) is the University of Washington’s central branding, marketing and communications office. Based within University Advancement, UMAC brings together talented staff from across a range of marketing and communications disciplines in support of the UW’s highest priorities. At the center of our work is the Boundless brand, reflecting the optimistic spirit and extensive positive impact of the University on our students’ lives and on communities near and far.')}}
              onMouseLeave={() => {setHover5(true); setMyText5('')}}
            ><p id="long-text">{myText5}</p>
              <img className={isHovered5 ? "friends-logo" : "hover-friends-logo"} src={wLogo} alt="logo"/>
            </section>
            </a>

            <a href="https://depts.washington.edu/gpss/">
            <section className="friends-box"
              onMouseEnter={() => {setHover3(false); setMyText3('The Graduate and Professional Student Senate (GPSS) represents over 15,000 graduate and professional students at the University of Washington. Our Senators represent academic departments as well as non-academic programs and communities. GPSS hosts events and programming, provides opportunities for engagement through internal committees and university-wide liaison positions, and offers funding for academic and professional development.')}}
              onMouseLeave={() => {setHover3(true); setMyText3('')}}
            ><p id="long-text">{myText3}</p>
              <img className={isHovered3 ? "friends-logo" : "hover-friends-logo"} src={gpss} alt="logo"/>
            </section>
            </a>


            <a href="https://hub.washington.edu/">
            <section className="friends-box"
                onMouseEnter={() => {setHover(false); setMyText('The HUB supports the Husky Experience by enhancing UW community, providing a dynamic event center, and fostering student engagement. The HUB provided support on all printed and online promotional materials.')}}
                onMouseLeave={() => {setHover(true); setMyText('')}}
                ><p>{myText}</p>
              <img className={isHovered ? "friends-logo" : "hover-friends-logo"} src={hub} alt="logo"/>
            </section>
            </a>

            <a href="https://www.washington.edu/alumni/">
            <section className="friends-box"
              onMouseEnter={() => {setHover2(false); setMyText2('Founded in 1889, the UW Alumni Association has been the foundation of the UW alumni community for more than 125 years. UWAA’s mission is to support the University of Washington and higher education in the state of Washington. UWAA provided support on all printed and online promotional materials')}}
              onMouseLeave={() => {setHover2(true); setMyText2('')}}
            ><p>{myText2}</p>
              <img className={isHovered2 ? "friends-logo" : "hover-friends-logo"} src={uwaa} alt="logo"/>
            </section>
            </a>


            <a href="https://www.cotopaxi.com/">
            <section className="friends-box"
              onMouseEnter={() => {setHover6(false); setMyText6('Adventure inspires us to see the world and make it better. That’s why we build gear that fuels both outdoor experiences and global change. To achieve our mission, we dedicate at least 1% of our revenue to nonprofits that help communities experiencing poverty.')}}
              onMouseLeave={() => {setHover6(true); setMyText6('')}}
            ><p>{myText6}</p>
              <img className={isHovered6 ? "friends-logo" : "hover-friends-logo"} src={cotopaxi} alt="logo"/>
            </section>
            </a>


            <a href="https://boulderingproject.com/market/seattle-washington/">
            <section className= "friends-box"
              onMouseEnter={() => {setHover7(false); setMyText7('SBP creates fun, inspiring and inclusive climbing, movement, and community spaces.')}}
              onMouseLeave={() => {setHover7(true); setMyText7('')}}
            ><p>{myText7}</p>
              <img className={isHovered7 ? "friends-logo" : "hover-friends-logo"} src={bouldering} alt="logo"/>
            </section>
            </a>


            <a href="https://nekocatcafe.com/">
            <section className="friends-box"
              onMouseEnter={() => {setHover8(false); setMyText8('NEKO is a sanctuary for rescue cats and humans to relax and enjoy each others company. Through our shelter partnerships we are able to give kitties a place to find their purrrfect match. We invite you to grab a drink and kick back with our kitties, but watch out, you just might fall in love!')}}
              onMouseLeave={() => {setHover8(true); setMyText8('')}}
            ><p>{myText8}</p>
              <img className={isHovered8 ? "friends-logo" : "hover-friends-logo"} src={nekoCat} alt="logo"/>
            </section>
            </a>

          </div>
        </div>
      </div>
  )
}
export default Sponsors;