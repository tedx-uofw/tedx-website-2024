import React, {useState} from "react";
import temp from "./sponsors-img/temp.png";
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

  const [isHovered, setHover] = useState(true);
  const [isHovered2, setHover2] = useState(true);
  const [isHovered3, setHover3] = useState(true);
  const [isHovered4, setHover4] = useState(true);
  const [isHovered5, setHover5] = useState(true);
  const [isHovered6, setHover6] = useState(true);
  const [isHovered7, setHover7] = useState(true);
  const [isHovered8, setHover8] = useState(true);

  return (
      <div id="sponsors">
      <div id="sponsors-card">
        <h1>OUR SPONSORS</h1>
          <div id="sponsor-bucket">
            <a href="http://www.asuw.org/">
            <section className="sponsor-box"
                onMouseEnter={() => {setHover(false); setMyText('info info info info info info info info info info info info info info info info info info info info')}}
                onMouseLeave={() => {setHover(true); setMyText('')}}
                ><p>{myText}</p>
              <img className={isHovered ? "sponsor-logo" : "hover-sponsor-logo"} src={temp} alt="sponsor-logo"/>
            </section>
            </a>

            <a href="http://www.asuw.org/">
            <section className="sponsor-box"
              onMouseEnter={() => {setHover2(false); setMyText2('info info info info info info info info info info info info info info info info info info info info')}}
              onMouseLeave={() => {setHover2(true); setMyText2('')}}
            ><p>{myText2}</p>
              <img className={isHovered2 ? "sponsor-logo" : "hover-sponsor-logo"} src={temp} alt="sponsor-logo"/>
            </section>
            </a>

            <a href="http://www.asuw.org/">
            <section className="sponsor-box"
              onMouseEnter={() => {setHover3(false); setMyText3('info info info info info info info info info info info info info info info info info info info info')}}
              onMouseLeave={() => {setHover3(true); setMyText3('')}}
            ><p>{myText3}</p>
              <img className={isHovered3 ? "sponsor-logo" : "hover-sponsor-logo"} src={temp} alt="sponsor-logo"/>
            </section>
            </a>

            <a href="http://www.asuw.org/">
            <section className="sponsor-box"
              onMouseEnter={() => {setHover4(false); setMyText4('info info info info info info info info info info info info info info info info info info info info')}}
              onMouseLeave={() => {setHover4(true); setMyText4('')}}
            ><p>{myText4}</p>
              <img className={isHovered4 ? "sponsor-logo" : "hover-sponsor-logo"} src={temp} alt="sponsor-logo"/>
            </section>
            </a>


            <a href="http://www.asuw.org/">
            <section className="sponsor-box"
              onMouseEnter={() => {setHover5(false); setMyText5('info info info info info info info info info info info info info info info info info info info info')}}
              onMouseLeave={() => {setHover5(true); setMyText5('')}}
            ><p>{myText5}</p>
              <img className={isHovered5 ? "sponsor-logo" : "hover-sponsor-logo"} src={temp} alt="sponsor-logo"/>
            </section>
            </a>


            <a href="http://www.asuw.org/">
            <section className="sponsor-box"
              onMouseEnter={() => {setHover6(false); setMyText6('info info info info info info info info info info info info info info info info info info info info')}}
              onMouseLeave={() => {setHover6(true); setMyText6('')}}
            ><p>{myText6}</p>
              <img className={isHovered6 ? "sponsor-logo" : "hover-sponsor-logo"} src={temp} alt="sponsor-logo"/>
            </section>
            </a>


            <a href="http://www.asuw.org/">
            <section className= "sponsor-box"
              onMouseEnter={() => {setHover7(false); setMyText7('info info info info info info info info info info info info info info info info info info info info')}}
              onMouseLeave={() => {setHover7(true); setMyText7('')}}
            ><p>{myText7}</p>
              <img className={isHovered7 ? "sponsor-logo" : "hover-sponsor-logo"} src={temp} alt="sponsor-logo"/>
            </section>
            </a>


            <a href="http://www.asuw.org/">
            <section className="sponsor-box"
              onMouseEnter={() => {setHover8(false); setMyText8('info info info info info info info info info info info info info info info info info info info info')}}
              onMouseLeave={() => {setHover8(true); setMyText8('')}}
            ><p>{myText8}</p>
              <img className={isHovered8 ? "sponsor-logo" : "hover-sponsor-logo"} src={temp} alt="sponsor-logo"/>
            </section>
            </a>


          </div>
        </div>
      </div>
  )
}
export default Sponsors;