import React from 'react';
import star from "./speakersImg/ChristmasStar.png";
import "./createSpeaker.css";

function CreateSpeaker(props) {
    return (
        <section>
          <div className="speaker-box">
              <a href="https://www.w3schools.com"><img className="speaker-img" src={props.img} alt={props.name}/></a>
              <div className="speaker-profile">
                  <p className="speaker-name">{props.name}</p>
                  <div className="title-box">
                    <img src={star} className="title-star" alt="Christmas Star"/>
                    <p className="speaker-title">{props.title}</p>
                  </div>
                  <p className="speaker-descr">{props.description}</p>
              </div>
          </div>
        </section>
    )
}

export default CreateSpeaker;