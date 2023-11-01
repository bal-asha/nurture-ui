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

// @mui material components
import Card from "@mui/material/Card";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";

function Steps() {
  return (
    <Card>
      <SoftBox p={3}>
        <SoftTypography variant="body2" color="text" fontWeight="regular">
          خطوات
        </SoftTypography>
        <SoftBox mt={2} mb={1} lineHeight={0}>
          <SoftTypography variant="h3" fontWeight="bold">
            11.4ك
          </SoftTypography>
        </SoftBox>
        <SoftBadge variant="contained" color="success" badgeContent="+4.3%" container />
      </SoftBox>
    </Card>
  );
}

export default Steps;
