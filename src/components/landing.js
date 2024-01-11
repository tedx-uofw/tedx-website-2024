import React from 'react';

const speakers = [{
    name: 'SUSIE SHARPE', time: '10:00-11:00AM', 
    title: 'Artist & Internal Medicine Physician'
}, {
    name: 'SUSIE SHARPE', time: '10:00-11:00AM', 
    title: 'Artist & Internal Medicine Physician'
}, {
    name: 'SUSIE SHARPE', time: '10:00-11:00AM', 
    title: 'Artist & Internal Medicine Physician'
},];

function ScheduleItems() {
    const speaker = ({name, time, title}) =>
    <li>
        <p>{time}</p>
        <p>{name}</p>
        <p>{title}</p>
    </li>
    return (
        <li></li>
        
    )
}

function Landing(){
    return (
        <div className = "landing-container">
            <div className='landing-title'>
                <h2>04.13.2023 | 10:30 AM | Kane Hall</h2>
                <h1>Crossroads</h1>
                <p>The intersection of ideas, the overlapping of concepts, and the reflection that 
                    can come when we are faced with a dilemma. It is a versatile theme that can be explored 
                    from a wide range of perspectives, including personal growth and innovation.Scroll to 
                    learn more about the event!</p>
                <button>Get Tickets</button>
            </div>

            <div className='landing-schedule-container'>
                <h3>Schedule</h3>


            </div>
            <div className='landing-venue-container'>
                <h3>Venue</h3>
                <div className='landing-venue-img-container'>
                    <img></img>
                </div>
                
                <p>Our venue for this year's conference will be Kane Hall, which houses an auditorium style room that can seat up to 700 people. This room has the technological capability to record high quality video and audio of the stage. 
                    Kane Hall is also in a centralized location on campus, providing easy access to our intended audience. Additionally, the venue provides adequate accommodations for those in need of wheelchair seating or closed captions.
                    </p>
                <p><a>Parking Information</a> | <a>Directions</a></p>
                
            </div>
            <div className='landing-team-container'>
                <h3>Meet the Team</h3>
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