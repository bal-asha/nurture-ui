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

const miniGradientLineChartData = {
  visitorsChart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Visitors",
        color: "info",
        data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
      },
    ],
  },
  incomeChart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Income",
        color: "info",
        data: [60, 80, 75, 90, 67, 100, 90, 110, 120],
      },
    ],
    customTick: "$",
  },
};

export default miniGradientLineChartData;
