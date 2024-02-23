import React from 'react';
import "./createSpeaker.css";

function CreateSpeaker(props) {
    return (
        <section>
          <div className="speaker-box">
            <img className="speaker-photo" src={props.img} alt={props.name}/>
            <div className="speaker-content">
              <p className="speaker-name">{props.name}</p>
              <p className="speaker-title">{props.title}</p>
              <p className="speaker-descr">{props.description}</p>              
            </div>
          </div>
          {props.name === "Aramis O. Hamer" && <div className="last-person"></div>}
        </section>
    )
}

export default CreateSpeaker;