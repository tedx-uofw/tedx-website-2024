import React from "react";
import "./speakers.css";
import star from "./speakersImg/ChristmasStar.png";
import speakerInfo from './speakerData.js';

function Speakers(){
  return (
      <div id="speakers">
        <div className="heading">
          <img src={star} class="center-star"/>
          <h1 className="heading-text">SPEAKERS</h1>
        </div>

        <div className="heading">
          <img src={star} class="center-star"/>
          <h1 className="heading-text">PERFORMERS</h1>
        </div>

      </div>
  )
}
export default Speakers;