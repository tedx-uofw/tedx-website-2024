import invisible from "./event_imgs/invisible_theme.png";
import minute from "./event_imgs/minute_theme.png";
import steps from "./event_imgs/steps_theme.png";
import moonshot from "./event_imgs/moonshot_theme.png";

const events = [
    {
        img: invisible,
        logistics: '04.22.2023 @ 9:00AM, KANE HALL',
        title: "SEEING THE INVISIBLE",
        description: <p>
            The theme “Seeing the Invisible” places the spotlight on ideas, 
            experiences, and passions that are not typically noticed in our 
            daily lives or recognized by the majority of society. 
        </p>
    },
    {
        img: minute,
        logistics: '05.07.2022 @ 10:00AM, KANE HALL',
        title: "DO YOU HAVE A MINUTE",
        description: <p>
            “Do you have a minute?” engages the dialogue and everyday 
            conversations people have with one another to share passions and 
            interests.
        </p>
    },
    {
        img: steps,
        logistics: '05.04.2019 @ 11:00AM, KANE HALL',
        title: "TWO STEPS FORWARD",
        description: <p>
            Life rarely follows a straight path, and this year, we wanted to 
            focus on the twists and turns in our respective journeys that 
            shaped us all into the people we are today.
        </p>
    },
    {
        img: moonshot,
        logistics: '05.05.2018 @ 12:00PM, KANE HALL',
        title: "MOONSHOT",
        description: <p>
            Inspired by President John F. Kennedy’s 1967 Address at Rice University, 
            the theme for this year is Moonshot and is meant to symbolize the 
            importance of thinking big, taking risks, and shooting for the moon — 
            whether you’re successful or not.
        </p>
    }
]

export default events;