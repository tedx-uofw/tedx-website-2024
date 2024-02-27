import React, { useEffect, useRef } from "react";
import Team from "./team";

import "./about_team.css"

import presData from "./team-data/prez-data"
import designData from "./team-data/design-data"
import webdevData from "./team-data/web-dev-data"
import logisticsData from "./team-data/logistics-data"
import marketingData from "./team-data/marketing-data"
import financeData from "./team-data/finance-data"
import speakerData from "./team-data/speaker-selec-data"




function AboutTeam() {
    const pres = useRef(null);
    const design = useRef(null);
    const webDev = useRef(null);
    const logistics = useRef(null);
    const marketing = useRef(null);
    const finance = useRef(null);
    const speakerSelec = useRef(null);

    return (
        <div className="about-team-container">
                <div className="team-contents-container">
                    <div className="mobile-tab-scroll">
                        <h1 className="page-title">MEET THE TEAM</h1>
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
                                        const element = document.getElementById(String(id));
                                        element?.scrollIntoView({
                                            behavior: 'smooth'
                                        })

                                    }}>
                                        <li ref={pres}>
                                            <a href="#CO-PRESIDENTS" className="links">Co-Presidents</a>
                                        </li>
                                        <li ref={design}>
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