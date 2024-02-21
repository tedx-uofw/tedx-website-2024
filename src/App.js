import './App.css';
import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedBackground from './background';


import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AnimatedBackground from './background';

import Speakers from './components/speakers/speakers';
import Sponsors from './components/sponsors/sponsors';
import AboutUs from './components/about/about_us/about_us';
import PastEvents from './components/about/past_events/past_events';
import AboutTeam from './components/about/team/about_team.tsx'


function App() {
  return (
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
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
