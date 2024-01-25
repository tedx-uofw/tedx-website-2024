import React from "react";
import Team from "../team/team";

import "./about_team.css"

import presData from "../team/team-data/prez-data"
import designData from "../team/team-data/design-data"
import webdevData from "../team/team-data/web-dev-data"
import logisticsData from "../team/team-data/logistics-data"
import marketingData from "../team/team-data/marketing-data"
import financeData from "../team/team-data/finance-data"
import speakerData from "../team/team-data/speaker-selec-data"



function AboutTeam() {

    return (
        <div class="about-team-container page-container">
            <h1 className="page-title">MEET THE TEAM</h1>

                <div className="team-contents-container">  
                    <div className="section-links">
                        <h2 id="teams-title">TEAMS</h2>
                        <ul className="team-list-items">
                            <li>
                                <a href="#CO-PRESIDENTS" className="links">Co-Presidents</a>
                            </li>
                            <li>
                                <a href="#DESIGN" className="links">Design</a>
                            </li>
                            <li>
                                <a href="#WEB DEVELOPMENT" className="links">Web Dev</a>
                            </li>
                            <li>
                                <a href="#LOGISTICS" className="links">Logistics</a>
                            </li>
                            <li>
                                <a href="#MARKETING" className="links">Marketing</a>
                            </li>
                            <li>
                                <a href="#FINANCE" className="links">Finance</a>
                            </li>
                            <li>
                                <a href="#SPEAKER SELECTION" className="links">Speaker Selection</a>
                            </li>
                        </ul>
                        </div> 
                    <div className="team-ctr">     
                        <Team
                            name="CO-PRESIDENTS"
                            data={presData}
                            />
                        <Team
                            name="DESIGN"
                            data={designData}
                            />
                        <Team
                            name="WEB DEVELOPMENT"
                            data={webdevData}
                            />
                        <Team
                            name="LOGISTICS"
                            data={logisticsData}
                            />
                        <Team
                            name="MARKETING"
                            data={marketingData}
                            />
                        <Team
                            name="FINANCE"
                            data={financeData}
                            />
                        <Team
                            name="SPEAKER SELECTION"
                            data={speakerData}
                            />
                        </div>   
                </div>
        </div>
    );
}

export default AboutTeam;