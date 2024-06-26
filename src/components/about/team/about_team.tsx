import React, { useEffect, useRef } from "react";
import Team from "./team";
import { Helmet } from "react-helmet";

import "./about_team.css"

import presData from "./team-data/prez-data"
import designData from "./team-data/design-data"
import webdevData from "./team-data/web-dev-data"
import logisticsData from "./team-data/logistics-data"
import marketingData from "./team-data/marketing-data"
import financeData from "./team-data/finance-data"
import speakerData from "./team-data/speaker-selec-data"

declare const window: Window;

function AboutTeam() {
    return (
        <div>
            <Helmet>
                <title>Team</title>
                <meta name="description" content="View the 2024 TEDxUofW team that planned and set up the conference" />
                <meta name="keywords" content="About Team, Co-Presidents, Design, Web Development, Logistics, Marketing, Finance, Speaker Selection"/>
            </Helmet>
            <div className="about-team-container">
                    <div className="team-contents-container">
                        <div className="mobile-tab-scroll">

                            <div className="testing">
                                <div className="section-links">
                                    <h1 className="page-title2">MEET THE TEAM</h1>
                                    <h2 id="teams-title">TEAMS</h2>
                                    <div className="section-links-content">
                                        <hr className="vertile-rule"></hr>
                                        <ul className="team-list-items" onClick={(event: React.SyntheticEvent) => {
                                            event.preventDefault();
                                            const target = event.target as HTMLAnchorElement;
                                            const id = target.getAttribute('href')?.replace('#', '');
                                            const yOffset = -10;
                                            const element = document.getElementById(String(id));
                                            let y = yOffset
                                            if (element) {
                                                y = element.getBoundingClientRect().top + yOffset;
                                            }
                                            element?.scrollIntoView({
                                                block: 'start',
                                                behavior: 'smooth',
                                            })
                                        }}>
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
                                </div>

                                <div className="mid-section-ctr">
                                <h1 className="page-title">MEET THE TEAM</h1>
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
        </div>
    );
}

export default AboutTeam;