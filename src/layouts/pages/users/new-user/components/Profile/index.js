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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function Profile({ formData }) {
  const { formField, values } = formData;
  const { publicEmail, bio } = formField;
  const { publicEmail: publicEmailV, bio: bioV } = values;

  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Profile
      </SoftTypography>
      <SoftBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormField
              type={publicEmail.type}
              label={publicEmail.label}
              name={publicEmail.name}
              value={publicEmailV}
              placeholder={publicEmail.placeholder}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={bio.type}
              label={bio.label}
              name={bio.name}
              value={bioV}
              placeholder={bio.placeholder}
              multiline
              rows={5}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for Profile
Profile.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Profile;
