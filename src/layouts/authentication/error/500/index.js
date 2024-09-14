/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// BalAsha - Nurture example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// BalAsha - Nurture base styles
import typography from "assets/theme/base/typography";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

// BalAsha - Nurture page layout routes
import pageRoutes from "page.routes";
import routes from "routes";

// Images
import error500 from "assets/images/illustrations/error-500.png";

function Error500() {
  const { d1, d3, d4, d5 } = typography;

  return (
    <PageLayout white>
      <DefaultNavbar
        routes={routes}
        transparent
        action={{
          type: "external",
          route: "https://bal-asha.com/product/soft-ui-dashboard-react",
          label: "buy now",
          color: "dark",
        }}
      />
      <SoftBox my={18} height="calc(100vh - 18rem)">
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={11} sm={9} container alignItems="center">
            <Grid item xs={12} lg={5}>
              <SoftBox
                fontSize={{ xs: d5.fontSize, sm: d4.fontSize, md: d3.fontSize, lg: d1.fontSize }}
                lineHeight={1.2}
              >
                <SoftTypography variant="inherit" color="warning" textGradient fontWeight="bold">
                  Error 500
                </SoftTypography>
              </SoftBox>
              <SoftTypography variant="h2" color="text" fontWeight="bold">
                Something went wrong
              </SoftTypography>
              <SoftBox mt={1} mb={2}>
                <SoftTypography variant="body1" color="text" opacity={0.6}>
                  We suggest you to go to the homepage while we solve this issue.
                </SoftTypography>
              </SoftBox>
              <SoftBox mt={4} mb={2}>
                <SoftButton component={Link} to="/" variant="gradient" color="warning">
                  go to homepage
                </SoftButton>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={7}>
              <SoftBox component="img" src={error500} alt="error-404" width="100%" />
            </Grid>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </PageLayout>
  );
}

export default Error500;
