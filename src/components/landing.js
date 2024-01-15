import React from 'react';
import './landing.css';

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
                <h1 className='landing-theme-name'>Crossroads</h1>
                <div className='landing-theme-content'>
                    <p>The intersection of ideas, the overlapping of concepts, and the reflection that
                    can come<br/> when we are faced with a dilemma. It is a versatile theme that can be explored
                    from a wide<br/> range of perspectives, including personal growth and innovation.</p>
                    <p id='scroll-to-learn'>Scroll to learn more about the event!</p>
                </div>
                <div className='ticket-btn'>
                    <button>Get Tickets</button>
                </div>

            </div>

            <div className='landing-schedule-container section-ctr'>
                <h3 className='title'>SCHEDULE</h3>
                <div className='schedule-items-ctr'>
                    <ul>
                        {items.map((item) => <Schedule name={item.name} title={item.title} time={item.time} /> )}
                    </ul>
                </div>
            </div>

            <div className='landing-venue-container section-ctr'>
                <h3 className='title'>VENUE</h3>
                <div className='landing-venue-img-container'>
                    <img></img>
                </div>
                <p>Our venue for this year's conference will be Kane Hall, which houses an auditorium style room that can seat up to 700 people. This room has the technological capability to record high quality video and audio of the stage.
                    Kane Hall is also in a centralized location on campus, providing easy access to our intended audience. Additionally, the venue provides adequate accommodations for those in need of wheelchair seating or closed captions.
                    </p>
                <p><a>Parking Information</a> | <a>Directions</a></p>
            </div>

            <div className='landing-team-container section-ctr'>
                <h3 className='title'>MEET THE TEAM</h3>
                <div className='landing-team-img-container'>
                    <img></img>
                </div>
                <p>Learn more about the team behind the conference!</p>
                <button>Meet the Team!</button>
            </div>

        </div>
    )
}
export default Landing;