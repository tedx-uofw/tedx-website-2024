import React from "react";
import "./speakers.css";
import star from "./speakersImg/ChristmasStar.png";
import CreateSpeaker from "./createSpeaker.jsx";
import speakerData from './speakerData.jsx';
import performerData from './performerData.jsx';

function Speakers(){

  const speakerInfo = speakerData;
  const performerInfo = performerData;

  return (
      <div id="speakers">

        <div className="header-box">
          <div className="header-content">
            <img src={star} className="star-img" alt="Christmas Star"/>
            <h1 className="header-text">SPEAKERS</h1>
          </div>
        </div>

        {speakerInfo.map(speaker => (
          <CreateSpeaker
            key={speaker.id}
            img={speaker.img}
            name={speaker.name}
            title={speaker.title}
            description={speaker.description}
          />
        ))}

        <div className="header-box performer-box">
          <div className="header-content">
            <img src={star} className="star-img" alt="Christmas Star"/>
            <p className="header-text">PERFORMERS</p>
          </div>
        </div>

        {performerInfo.map(performer => (
          <CreateSpeaker
            key={performer.id}
            img={performer.img}
            name={performer.name}
            title={performer.title}
            description={performer.description}
          />
        ))}

      </div>
  )
}
export default Speakers;