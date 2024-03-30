import React, {useState, useEffect} from 'react';
import "./createSpeaker.css";

function CreateSpeaker(props) {
  return (
      <section>
        <div className="speaker-box">
          <img className="speaker-photo" src={props.img} alt={props.name}/>
          <div className={`speaker-content speaker-gradient ${props.name === 'Chirag Shah, PhD' || props.name === 'Nash Fung' ? 'more-text' : 'less-text'}`}>
            <p className="speaker-name">{props.talk}</p>
            <p className="speaker-talk">{props.name}</p>
            <p className="speaker-title">{props.title}</p>
            <p className="speaker-descr">{props.description}</p>
          </div>
        </div>
      </section>
  )
}

export default CreateSpeaker;