/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

Coded by www.bal-asha.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Image
import adobeXD from "assets/images/small-logos/logo-xd.svg";
import atlassian from "assets/images/small-logos/logo-atlassian.svg";
import slack from "assets/images/small-logos/logo-slack.svg";
import spotify from "assets/images/small-logos/logo-spotify.svg";
import jira from "assets/images/small-logos/logo-jira.svg";

const complexReportsDoughnutChartData = {
  images: [adobeXD, atlassian, slack, spotify, jira],
  labels: ["Adobe XD", "Atlassian", "Slack", "Spotify", "Jira"],
  datasets: {
    label: "Referrals",
    backgroundColors: ["primary", "info", "warning", "success", "dark"],
    data: [25, 3, 12, 7, 10],
  },
};

export default complexReportsDoughnutChartData;
