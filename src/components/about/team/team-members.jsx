import React from "react";

function TeamMember(props) {
    return (
        <div>
            <img className="team-member-img" src={props.img} alt={props.name} />
            <p className="team-member-name">{props.name}</p>
            <p className="team-member-title">{props.title}</p>
        </div>
    );
}

export default TeamMember;