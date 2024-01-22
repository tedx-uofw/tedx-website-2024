import React, {useState} from "react";
import temp from "./sponsors-img/temp.png";
import "./sponsors.css";

function Sponsors(){
  const [isClicked, setClick] = useState(true);
  const [isClicked2, setClick2] = useState(true);
  const [isClicked3, setClick3] = useState(true);
  const [isClicked4, setClick4] = useState(true);
  const [isClicked5, setClick5] = useState(true);
  const [isClicked6, setClick6] = useState(true);
  const [isClicked7, setClick7] = useState(true);
  const [isClicked8, setClick8] = useState(true);


  return (
      <div id="sponsors">
      <h1>OUR SPONSORS</h1>
        <div id="sponsor-bucket">
          <section className={isClicked ? "sponsor-box" : "clicked-sponsor-box"} onClick={() => setClick(false)}><img class="sponsor-logo" src={temp} alt="sponsor-logo"/></section>
          <section className={isClicked2 ? "sponsor-box" : "clicked-sponsor-box"} onClick={() => setClick2(false)}><img class="sponsor-logo" src={temp} alt="sponsor-logo"/></section>
          <section className={isClicked3 ? "sponsor-box" : "clicked-sponsor-box"} onClick={() => setClick3(false)}><img class="sponsor-logo" src={temp} alt="sponsor-logo"/></section>
          <section className={isClicked4 ? "sponsor-box" : "clicked-sponsor-box"} onClick={() => setClick4(false)}><img class="sponsor-logo" src={temp} alt="sponsor-logo"/></section>
          <section className={isClicked5 ? "sponsor-box" : "clicked-sponsor-box"} onClick={() => setClick5(false)}><img class="sponsor-logo" src={temp} alt="sponsor-logo"/></section>
          <section className={isClicked6 ? "sponsor-box" : "clicked-sponsor-box"} onClick={() => setClick6(false)}><img class="sponsor-logo" src={temp} alt="sponsor-logo"/></section>
          <section className={isClicked7 ? "sponsor-box" : "clicked-sponsor-box"} onClick={() => setClick7(false)}><img class="sponsor-logo" src={temp} alt="sponsor-logo"/></section>
          <section className={isClicked8 ? "sponsor-box" : "clicked-sponsor-box"} onClick={() => setClick8(false)}><img class="sponsor-logo" src={temp} alt="sponsor-logo"/></section>
        </div>
      </div>
  )
}
export default Sponsors;