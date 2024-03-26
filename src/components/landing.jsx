import React from 'react';
import './landing.css';

import logo from '../assets/landing-page-pics/CROSSROADS.png';
import graphic from '../assets/landing-page-pics/crossroads-graphic.png';
import kane from '../assets/landing-page-pics/kane-hall.png';
import teamPhoto from '../assets/landing-page-pics/teamPhoto.jpg';
import tedxPhoto from '../assets/landing-page-pics/tedx.png';

import starIcon from '../assets/ChristmasStar.svg';


function Schedule(props) {
    return (
        <li className='schedule-items'>
            <div className='single-schedule-item-ctr'>
                <div className='items-time-ctr'>
                    <p className='items-time'>{props.time}</p>
                </div>
                <div className='name-title-ctr'>
                    <p className="items-name">{props.name}</p>
                    <p className='talk-title'>{props.talk}</p>
                    <p className="items-title">{props.title}</p>
                </div>
            </div>
            <hr className='schedule-divider'></hr>
        </li>
    )

}

function Landing(){
    const items = [
        {name: 'CONFERENCE BEGINS', talk:'', title: '', time: "10:30AM-10:45AM"},
        {name: 'EMILY LAGO ANDERSON', talk:'The Purpose in Daydreaming', title: 'Engineer and Educational Equity Activist', time: "10:50AM - 11:05AM"},
        {name: 'CHIRAG SHAH, PhD', talk:'What AI Could, Should, and Would Do', title: 'Professor in Information School', time: "11:10AM - 11:25AM"},
        {name: 'VOCAL JAZZ @ UW', title: 'Performance', talk:'', time: "11:30AM - 11:45AM"},
        {name: 'NOHA POLACK, MD, FAAP', talk:'Recognizing the Weight Bias Within', title: 'Pediatrician', time: "11:50AM - 12:05PM"},
        {name: 'RAFFLE DRAW 1', title: '', talk:'', time: "12:10PM - 12:25PM"},
        {name: 'INTERMISSION', title: '', talk:'', time: "12:30PM - 1:30PM"},
        {name: 'NASH FUNG', talk:'Unlock the Magic to Providing Better Emotional Support', title: 'Keystone Speaker & Magician', time: "1:40PM - 1:55PM"},
        {name: 'ZARYA RUBIN, MD', talk:'Four Words That Can Protect You From Burnout', title: 'Functional Medicine Physician', time: "2:00PM - 2:15PM"},
        {name: 'TRADITIONAL CHINESE DANCE @ UW', title: 'Performance', talk:'', time: "2:20PM - 2:35PM"},
        {name: 'JEFF NGUYEN', talk:'Clarity Amidst Crossroads: Navigating Your North Star', title: 'Founder @ BobaTalks', time: "2:40PM - 2:55PM"},
        {name: 'RAFFLE DRAW 2', title: '', talk:'', time: "3:00PM - 3:15PM"},
        {name: 'NETWORKING SESSION', title: '', talk:'', time: "3:20PM - 3:55PM"},
        {name: 'END OF CONFERENCE', title: '', talk:'', time: "4:00PM - 4:10PM"}
    ];

    return (
        <div className = "landing-container landingFadeInUp">
            <div className='landing-title'>
                <div className='landing-theme-date'>
                    <p>04.13.2024 | 10:30 AM | Kane Hall | Seattle, WA</p>
                </div>
                <div className='crossroads-logo'>
                    <img src={logo} alt='Crossroads' />
                </div>

                <div className='landing-theme-content'>
                    <p className='theme-intro'>The intersection of ideas, the overlapping of concepts, and the reflection that
                    can come when we are faced with a dilemma. It is a versatile theme that can be explored
                    from a wide range of perspectives, including personal growth and innovation.</p>
                    <p id='scroll-to-learn'>Scroll to learn more about the event!</p>
                </div>
                <div className='ticket-btn'>
                    <button className='btn'>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLScFKzPkloRcReyNhadtJzJZ9HuH_g9o7tsom5HJczat4zWp0A/viewform' className='tickets-link'>GET TICKETS</a>

                        </button>
                </div>
                <div className='crossroads-graphic'>
                    <img src={graphic} alt='Crossroads Graphic'/>
                </div>
            </div>
            <div className='info-section-ctr'>

                <div className='landing-schedule-container section-ctr'>
                    <div className='box'>
                        <img src={starIcon} alt='Star Icon' className='star-icon'/>
                        <h3 className='title'>SCHEDULE</h3>
                    </div>

                    <div className='schedule-items-ctr'>
                        <ul id='schedule-list'>
                            {items.map((item) =>
                            <Schedule name={item.name}
                            talk={item.talk}
                            title={item.title}
                            time={item.time} /> )}
                        </ul>
                    </div>
                </div>

                <div className='landing-venue-container section-ctr'>
                    <div className='box'>
                        <img src={starIcon} alt='Star Icon' className='star-icon'/>
                        <h3 className='title'>VENUE</h3>
                    </div>
                    <div className='landing-venue-contents-ctr'>
                        <div className='landing-venue-img-container'>
                            <img src={kane} alt='Kane Hall Photo'/>
                        </div>
                        <div className='landing-venue-text-ctr'>
                            <p className='venue-text'>Our venue for this year's conference will be Kane Hall, which houses an auditorium
                                style room that can seat up to 700 people. This room has the technological capability
                                to record high quality video and audio of the stage.</p>
                                <p className='venue-text'>Kane Hall is also in a centralized location on campus,
                                    providing easy access to our intended audience. Additionally, the venue provides
                                    adequate accommodations for those in need of wheelchair seating or closed captions.</p>
                            <p className='parking-text'><a href='https://transportation.uw.edu/park/visitor'>Parking Information </a>
                              | <a href='https://www.google.com/maps/place/Kane+Hall/@47.6566273,-122.3091503,15z/data=!4m6!3m5!1s0x549015bbf61d1867:0x39a352937b07450a!8m2!3d47.6566273!4d-122.3091503!16s%2Fg%2F11j111b43t?entry=ttu'>
                                Directions</a></p>
                        </div>
                    </div>
                </div>

                <div className='landing-tedx-container section-ctr'>
                    <div className='box'>
                        <img src={starIcon} alt='Star Icon' className='star-icon'/>
                        <h3 className='title'>WHAT IS TEDx?</h3>
                    </div>
                    <div className='landing-tedx-contents-ctr'>
                        <div className='landing-tedx-img-container'>
                            <img src={tedxPhoto} alt='Kane Hall Photo'/>
                        </div>
                        <div className='landing-tedx-text-ctr'>
                            <p className='tedx-text'>In the spirit of ideas worth spreading, TED
                            has created a program called TEDx. TEDx is a program of local, self-organized
                            events that bring people together to share a TED-like experience.
                            Our event is called TEDxUofw, where x = independently organized TED event.
                            At our TEDxUofw event, TED Talks video and live speakers will combine to
                            spark deep discussion and connection in a small group. The TED Conference
                            provides general guidance for the TEDx program, but individual TEDx events,
                            including ours, are self-organized.</p>
                        </div>
                    </div>
                </div>

                <div className='landing-team-container section-ctr'>
                    <div className='box'>
                        <img src={starIcon} alt='Star Icon' className='star-icon'/>
                        <h3 className='title'>MEET THE TEAM</h3>
                    </div>
                    <div className='landing-team-contents-ctr'>
                        <div className='landing-team-img-container'>
                            <img src={teamPhoto} alt='Team Photo'/>
                        </div>
                        <div className='landing-team-text-ctr'>
                            <p id='landing-team-text'>Learn more about the team behind the conference!</p>
                            <div className='meet-team-btn'>
                            <button className='btn'><a href='/team' className='meet-team-link'>MEET THE TEAM</a></button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default Landing;