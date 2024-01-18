import React from "react";
import "./past_events.css";
import CreateEvent from "./create_event.js";
import event_data from './event_data.js';

function PastEvents(){

  const eventInfo = event_data;

  return (
      <div id="past_events">

        <h1>PAST EVENTS</h1>

        {eventInfo.map(event => (
          <CreateEvent
            key={event.id}
            img={event.img}
            logistics={event.logistics}
            title={event.title}
            description={event.description}
          />
        ))}

      </div>
  )
}
export default PastEvents;