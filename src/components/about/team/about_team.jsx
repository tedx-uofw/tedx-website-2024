import React from "react";
import Team from "../team/team";

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
    );
}

export default AboutTeam;