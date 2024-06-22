/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// BalAsha - Nurture example components
import DefaultItem from "examples/Items/DefaultItem";

function UpcomingEvents() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={2} px={2} lineHeight={1}>
        <SoftTypography variant="h6" fontWeight="medium">
          Upcoming events
        </SoftTypography>
        <SoftTypography variant="button" color="text" fontWeight="medium">
          Joined
        </SoftTypography>
      </SoftBox>
      <SoftBox p={2}>
        <DefaultItem icon="paid" title="Cyber Week" description="27 March 2020, at 12:30 PM" />
        <SoftBox mt={3.5}>
          <DefaultItem
            color="primary"
            icon="notifications"
            title="Meeting with Marry"
            description="24 March 2020, at 10:00 PM"
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default UpcomingEvents;
