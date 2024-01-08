import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/landing_page/landing';
import Navbar from './components/navbar/navbar';

import Speakers from './components/speakers/speakers';
import Sponsors from './components/sponsors/sponsors';
import AboutUs from './components/about/about_us/about_us';
import PastEvents from './components/about/past_events/past_events';
import Team from './components/about/team/team';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
          <Route path="/" element = { <Landing /> } />
            <Route path="/sponsors" element = { <Sponsors /> } />
            <Route path="/about-tedx" element = { <AboutUs /> } />
            <Route path="/past-events" element = { <PastEvents /> } />
            <Route path="/team" element = { <Team /> } />
            <Route path="/speakers" element = { <Speakers />} />
            <Route path="*" element={<div> 404 Not Found </div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
