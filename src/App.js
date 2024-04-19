import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedBackground from './background';
import Popup from './components/popup/popup.jsx'


import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import Speakers from './components/speakers/speakers';
import Sponsors from './components/sponsors/sponsors';
import AboutUs from './components/about/about_us/about_us';
import PastEvents from './components/about/past_events/past_events';
import AboutTeam from './components/about/team/about_team.tsx'
import { Helmet } from 'react-helmet';


function App() {
  const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 0);
    }, []);
  return (
    <div>
      <Helmet>
        <title>TEDxUofW</title>
        <meta name="description" content="Get info about the upcoming 2024 TEDxUofW conference"/>
        <meta name="keywords" content="TedxUofW, Crossroads, Get Tickets, Kane Hall, Schedule, Venue" />
      </Helmet>
      <div className="App">
        <AnimatedBackground />
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element ={ <Home /> } />
              <Route path="/sponsors" element = { <Sponsors /> } />
              <Route path="/about-tedx" element = { <AboutUs /> } />
              <Route path="/past-events" element = { <PastEvents /> } />
              <Route path="/team" element = { <AboutTeam /> } />
              <Route path="/speakers" element = { <Speakers />} />
              <Route path="*" element={<div> 404 Not Found </div>}></Route>
            </Routes>
            <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <h3>The conference has concluded...</h3>

                <p>Thank you to all who attended and we hope to see you next year!</p>
                <p>More information about team applications and speaker applications for next year will be out soon.</p>
            </Popup>
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
