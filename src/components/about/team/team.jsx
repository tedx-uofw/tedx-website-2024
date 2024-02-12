import React from "react";
import TeamMember from "./team-members";
import "./team.css"

import starLogo from "../../../assets/ChristmasStar.svg"


function Team(props){
  const teamMembers = props.data?.map((item) => {
    return(
      <TeamMember
      key={item.name}
      name={item.name}
      title={item.title}
      img={item.img}
      />
    )
  })

  return (
      <div id="team-container">
          <div className="team-box">
            <img src={starLogo} alt="Star Logo" className="star-logo"/>
            <h2 className="team-header" id={props.name}>{props.name}</h2>
          </div>
          <div className="team-member-list">
            {teamMembers}
          </div>
      </div>
  )
}
export default Team;