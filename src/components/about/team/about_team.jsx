import React, { useEffect } from "react";
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

    useEffect(() => {
        let url = window.location.href.split("#");
        let element = document.getElementById(url);
        element && element.scrollIntoView({ behavior: "smooth", block: "start"});
      }, []);

    return (
        <div class="about-team-container">
                <div className="team-contents-container">
                    <div className="mobile-tab-scroll">
                        <h1 className="page-title">MEET THE TEAM</h1>
                        <div className="testing">
                            <div className="section-links">
                                <h2 id="teams-title">TEAMS</h2>
                                <div className="section-links-content">
                                    <hr className="vertile-rule"></hr>
                                    <ul className="team-list-items">
                                        <li>
                                            <a href="#CO-PRESIDENTS"
                                            className="links" onClick={e => {
                                                let hero = document.getElementById("CO-PRESIDENTS");
                                                e.preventDefault();  // Stop Page Reloading
                                                hero && hero.scrollIntoView();
                                                }}>Co-Presidents</a>
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
                            </div>

                            <div className="mid-section-ctr">
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
                </div>
        </div>
    );
}

export default AboutTeam;