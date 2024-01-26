import React from "react";
import "./team-members.css"

function TeamMember(props) {
    return (
        <div className="team-member-ctr">
            <img className="team-member-img" src={props.img} alt={props.name} />
            <div className="team-member-text">
                <p className="team-member-name">{props.name}</p>
                <p className="team-member-title">{props.title}</p>
            </div>
            
        </div>
    );
}

export default TeamMember;