import React from 'react';
import "./createSpeaker.css";

function CreateSpeaker(props) {
    return (
        <section>
          <div className="speaker-content speaker-box">
              <img className="speaker-img" src={props.img} alt={props.name}/>
              <div className="speaker-profile">
                  <p className="speaker-name">{props.name}</p>
                  <p className="speaker-descr">{props.description}</p>
              </div>
          </div>
        </section>
    )
}

export default CreateSpeaker;