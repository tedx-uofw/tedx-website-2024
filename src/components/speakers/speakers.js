import React from "react";
import "./speakers.css";
import star from "./speakersImg/ChristmasStar.png";
import CreateSpeaker from "./createSpeaker.js";
import speakerData from './speakerData.js';
import performerData from './performerData.js';

function Speakers(){

  const speakerInfo = speakerData;
  const performerInfo = performerData;

  return (
      <div id="speakers">

        <div className="header-box">
          <img src={star} className="star-img" alt="Christmas Star"/>
          <h1 className="heading-text">SPEAKERS</h1>
        </div>
        
        {speakerInfo.map(speaker => (
          <CreateSpeaker
            key={speaker.id}
            img={speaker.img}
            name={speaker.name}
            description={speaker.description}
          />
        ))}

        <div className="header-box performer-box">
          <img src={star} className="star-img" alt="Christmas Star"/>
          <h1 className="heading-text">PERFORMERS</h1>
        </div>
        

        {performerInfo.map(performer => (
          <CreateSpeaker
            key={performer.id}
            img={performer.img}
            name={performer.name}
            description={performer.description}
          />
        ))}    

      </div>
  )
}
export default Speakers;