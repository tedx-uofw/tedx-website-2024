import React from 'react';
import "./createSpeaker.css";

function CreatePerformer(props) {
    return (
        <section>
          <div className="speaker-box">
            <img className="speaker-photo" src={props.img} alt={props.name}/>
            <div className="speaker-content">
              <p className="speaker-name">{props.name}</p>
              <p className="performer-descr">{props.description}</p>              
            </div>
          </div>
          {props.name === "Traditional Chinese Dance at UW" && <div className="last-person"></div>}
        </section>
    )
}

export default CreatePerformer;