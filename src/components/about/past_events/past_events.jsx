import React from "react";
import "./past_events.css";
import CreateEvent from "./create_event.jsx";
import event_data from './event_data.jsx';
import { Helmet } from "react-helmet";

function PastEvents(){

  const eventInfo = event_data;

  return (
      <div id="past_events">
        <Helmet>
          <title>Past Events</title>
          <meta name="description" content="Explore TedxUofW's past conferences and themes" />
          <meta name="keywords" content="Past events, Seeing the Invisible, Do You Have A Minute, Two Steps Forward, Moonshot, Kane Hall"/>
        </Helmet>

        <h1 className="heading">PAST EVENTS</h1>

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