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

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";

// ChildRegistration page components
import BaseLayout from "child/child-registration/components/BaseLayout";
import Sidenav from "child/child-registration/components/Sidenav";
import Header from "child/child-registration/components/Header";
import BasicInfo from "child/child-registration/components/BasicInfo";
import ChangePassword from "child/child-registration/components/ChangePassword";
import Authentication from "child/child-registration/components/Authentication";
import Accounts from "child/child-registration/components/Accounts";
import Notifications from "child/child-registration/components/Notifications";
import Sessions from "child/child-registration/components/Sessions";
import DeleteAccount from "child/child-registration/components/DeleteAccount";
import Stage1Info from "child/child-registration/components/Stage1Info";

function ChildRegistration() {
  return (
    <BaseLayout>
      <SoftBox mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Sidenav />
          </Grid>
          <Grid item xs={12} lg={9}>
            <SoftBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Header />
                </Grid>
                <Grid item xs={12}>
                  <Stage1Info />
                </Grid>
                <Grid item xs={12}>
                  <BasicInfo />
                </Grid>
                <Grid item xs={12}>
                  <ChangePassword />
                </Grid>
                <Grid item xs={12}>
                  <Authentication />
                </Grid>
                <Grid item xs={12}>
                  <Accounts />
                </Grid>
                <Grid item xs={12}>
                  <Notifications />
                </Grid>
                <Grid item xs={12}>
                  <Sessions />
                </Grid>
                <Grid item xs={12}>
                  <DeleteAccount />
                </Grid>
              </Grid>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </BaseLayout>
  );
}

export default ChildRegistration;
