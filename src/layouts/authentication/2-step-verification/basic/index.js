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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// BalAsha - Nurture example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";
import SpaceShip from "examples/Icons/SpaceShip";

// BalAsha - Nurture page layout routes
import pageRoutes from "page.routes";

// BalAsha - Nurture page layout routes
import routes from "routes";

// Images
import curved9 from "assets/images/curved-images/curved9.jpg";

function Basic() {
  return (
    <PageLayout>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://balasha-nurture.web.app/product/soft-ui-dashboard-react",
          label: "buy now",
        }}
        transparent
        light
      />
      <SoftBox position="relative" width="100vw" height="100vh" sx={{ overflow: "hidden" }}>
        <SoftBox
          component="img"
          src={curved9}
          alt="background-image"
          position="absolute"
          width="100%"
          height="100%"
          sx={{ objectFit: "cover", objectPosition: "center" }}
        />
        <SoftBox
          position="absolute"
          width="100%"
          height="100%"
          bgColor="dark"
          variant="gradient"
          opacity={0.6}
        />
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={11} md={6} lg={3}>
            <Card>
              <SoftBox textAlign="center" p={6}>
                <SoftBox
                  display="grid"
                  justifyContent="center"
                  alignItems="center"
                  width="6.25rem"
                  height="6.25rem"
                  borderRadius="50%"
                  shadow="md"
                  fontSize="3rem"
                  color="white"
                  bgColor="warning"
                  variant="gradient"
                  mx="auto"
                  mb={3}
                >
                  <SpaceShip color="white" size="35px" />
                </SoftBox>
                <SoftBox mb={3} px={1}>
                  <SoftTypography variant="h2" fontWeight="bold">
                    2-Step Verification
                  </SoftTypography>
                </SoftBox>
                <SoftBox mb={2}>
                  <Grid container spacing={2}>
                    <Grid item xs>
                      <SoftInput size="large" inputProps={{ maxLength: 1 }} />
                    </Grid>
                    <Grid item xs>
                      <SoftInput size="large" inputProps={{ maxLength: 1 }} />
                    </Grid>
                    <Grid item xs>
                      <SoftInput size="large" inputProps={{ maxLength: 1 }} />
                    </Grid>
                    <Grid item xs>
                      <SoftInput size="large" inputProps={{ maxLength: 1 }} />
                    </Grid>
                  </Grid>
                </SoftBox>
                <SoftBox mb={2}>
                  <SoftButton variant="gradient" color="warning" fullWidth>
                    send code
                  </SoftButton>
                </SoftBox>
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  Haven&apos;t received it?{" "}
                  <SoftTypography component="a" href="#verification" variant="button">
                    Resend a new code
                  </SoftTypography>
                  .
                </SoftTypography>
              </SoftBox>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
    </PageLayout>
  );
}

export default Basic;
