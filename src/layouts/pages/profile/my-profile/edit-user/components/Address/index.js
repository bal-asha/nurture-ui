/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";


import {stateList} from "layouts/pages/profile/my-profile/edit-user/schemas/initialValues";
// NewUser page components
import FormField from "layouts/pages/profile/my-profile/edit-user/components/FormField";

function Address({ formData }) {
  const { formField, values, errors, touched ,handleChange} = formData;
  const { address1, address2, city,state, zip } = formField;
  const { address1: address1V, address2: address2V, city: cityV, state:stateV,zip: zipV } = values;


  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Address
      </SoftTypography>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              type={address1.type}
              label={address1.label}
              name={address1.name}
              value={address1V}
              placeholder={address1.placeholder}
              error={errors.address1 && touched.address1}
              success={address1V.length > 0 && !errors.address1}
            />
          </Grid>
          <Grid item xs={12}>
            <SoftBox mt={-1.625}>
              <FormField
                type={address2.type}
                label={address2.label}
                name={address2.name}
                value={address2V}
                placeholder={address2.placeholder}
              />
            </SoftBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={city.type}
              label={city.label}
              name={city.name}
              value={cityV}
              placeholder={city.placeholder}
              error={errors.city && touched.city}
              success={cityV.length > 0 && !errors.city}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                State
              </SoftTypography>
            </SoftBox>
            <Select input={<SoftInput />} name={state.name} MenuProps={{style:{maxHeight:'300px'}}} value={stateV} onChange={handleChange} placeholder="Select State" >
              {
              stateList.map((state) => (
              <MenuItem key={state} value={state} >{state}</MenuItem>
              ))
            }
            </Select>
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={zip.type}
              label={zip.label}
              name={zip.name}
              value={zipV}
              placeholder={zip.placeholder}
              error={errors.zip && touched.zip}
              success={zipV.length > 0 && !errors.zip}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for Address
Address.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Address;
