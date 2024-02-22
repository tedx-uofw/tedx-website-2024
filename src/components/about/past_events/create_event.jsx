import React from 'react';
import star from "./event_imgs/ChristmasStar.png";
// import star from "../assets/ChristmasStar.svg";

import "./create_event.css";

function CreateEvent(props) {
    return (
        <section>
          <div className="event-box">
            <div className="event-content">
                <div className="event-logistics">
                    <img src={star} className="star-img" alt="Christmas Star"/>
                    <p className="logistics-text">{props.logistics}</p>
                </div>
                <div className="event-info">
                    <p className="event-title">{props.title}</p>
                    <p className="event-descr">{props.description}</p>
                </div>
            </div>
              <img className="event-img" src={props.img} alt={props.title}/>
          </div>
          {props.title === "MOONSHOT" && <div className="last-event"></div>}
        </section>
    )
}

export default CreateEvent;