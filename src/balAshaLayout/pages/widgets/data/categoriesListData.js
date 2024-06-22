/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// BalAsha - Nurture components
import SoftTypography from "components/SoftTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: "devices_other",
    name: "Devices",
    description: (
      <>
        250 in stock,{" "}
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          346+ sold
        </SoftTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "settings",
    name: "Tickets",
    description: (
      <>
        123 closed,{" "}
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          15 open
        </SoftTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "info",
    name: "Error logs",
    description: (
      <>
        1 is active,{" "}
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          40 closed
        </SoftTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "thumb_up",
    name: "Happy users",
    description: (
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        + 430
      </SoftTypography>
    ),
    route: "/",
  },
];

export default categoriesListData;
