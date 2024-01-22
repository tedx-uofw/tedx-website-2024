import React from 'react';
import './landing.css';

import logo from '../assets/landing-page-pics/CROSSROADS.png';
import graphic from '../assets/landing-page-pics/crossroads-graphic.png';
import kane from '../assets/landing-page-pics/kane-hall.png';
import teamPhoto from '../assets/landing-page-pics/team-photo.png';

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
                    <p className="items-title">{props.title}</p>
                </div>
            </div>
            <hr className='schedule-divider'></hr>
        </li>
    )

}

function Landing(){
    const items = [
        {name: 'SUSIE SHARPE', title: 'Artist & Internal Medicine Physician', time: "10:00AM-11:00AM"},
        {name: 'your mom', title: 'banker', time: "11:00AM-12:00PM"},
        {name: 'your mom', title: 'banker', time: "11:00AM-12:00PM"}
    ];
    return (
        <div className = "landing-container">
            <div className='landing-title'>
                <div className='landing-theme-date'>
                    <p>04.13.2023 | 10:30 AM | Kane Hall</p>
                </div>
                <div className='crossroads-logo'>
                    <img src={logo} alt='Crossroads' />
                </div>

                <div className='landing-theme-content'>
                    <p>The intersection of ideas, the overlapping of concepts, and the reflection that
                    can come<br/> when we are faced with a dilemma. It is a versatile theme that can be explored
                    from a wide<br/> range of perspectives, including personal growth and innovation.</p>
                    <p id='scroll-to-learn'>Scroll to learn more about the event!</p>
                </div>
                <div className='ticket-btn'>
                    <button>GET TICKETS</button>
                </div>
                <div className='crossroads-graphic'>
                    <img src={graphic} alt='Crossroads Graphic'/>
                </div>
            </div>
            <div className='info-section-ctr'>

                <div className='landing-schedule-container section-ctr'>
                    <div className='box'>
                        <img src={starIcon} alt='Star Icon' />
                        <h3 className='title'>SCHEDULE</h3>
                    </div>

                    <div className='schedule-items-ctr'>
                        <ul id='schedule-list'>
                            {items.map((item) => <Schedule name={item.name} title={item.title} time={item.time} /> )}
                        </ul>
                    </div>
                </div>

                <div className='landing-venue-container section-ctr'>
                    <div className='box'>
                        <img src={starIcon} alt='Star Icon' />
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
                            <p className='parking-text'><a href='https://transportation.uw.edu/park/visitor'>Parking Information</a>
                            | <a href='https://www.google.com/maps/place/Kane+Hall/@47.6566273,-122.3091503,15z/data=!4m6!3m5!1s0x549015bbf61d1867:0x39a352937b07450a!8m2!3d47.6566273!4d-122.3091503!16s%2Fg%2F11j111b43t?entry=ttu'>
                                Directions</a></p>
                        </div>
                    </div>
                </div>

                <div className='landing-team-container section-ctr'>
                    <div className='box'>
                        <img src={starIcon} alt='Star Icon' />
                        <h3 className='title'>MEET THE TEAM</h3>
                    </div>
                    <div className='landing-team-contents-ctr'>
                        <div className='landing-team-img-container'>
                            <img src={teamPhoto} alt='Team Photo'/>
                        </div>
                        <div className='landing-team-text-ctr'>
                            <p id='landing-team-text'>Learn more about the team behind the conference!</p>
                            <div className='meet-team-btn'>
                            <button>MEET THE TEAM</button>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default Landing;