import React from "react";
import TeamMember from "./team-members";


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
        <div className="team-info-container">
          <h2 className="team-header">{props.name}</h2>
          <div className="team-member-list">
            {teamMembers}
          </div>
          
        </div>

      </div>
  )
}
export default Team;