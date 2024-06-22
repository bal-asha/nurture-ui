/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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

// NewUser page components
import FormField from "layouts/pages/profile/my-profile/edit-user/components/FormField";
import { useState ,useContext} from "react";

function UserDetail({ formData, updateUserInfoDetail,updateAdressDetail}) {

  let [idProofType,setIdProofType]=useState("Adhar");
 
  const { formField, values, errors, touched } = formData;
  const { userName, 
    idDtls,
    mobileNo,} = formField;
  const {
    userName: userNameV,
    idDtls:idDtlsV,
    mobileNo:mobileNoV,
  } = values;


  const [state, setState] = useState("...");
  const { address1, address2, city, zip } = formField;
  const { address1: address1V, address2: address2V, city: cityV, zip: zipV } = values;

  const handleSetState1 = (event) => {
    setIdProofType(event.target.value);
    updateUserInfoDetail(event.target.value);

    }

       const handleSetState2 = (event) => {
      setState(event.target.value);
      updateAdressDetail(event.target.value);
    }

  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          About me
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory informations
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={userName.type}
              label={userName.label}
              name={userName.name}
              value={userNameV}
              placeholder={userName.placeholder}
              error={errors.userName && touched.userName}
              success={userNameV.length > 0 && !errors.userName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={mobileNo.type}
              label={mobileNo.label}
              name={mobileNo.name}
              value={mobileNoV}
              placeholder={mobileNo.placeholder}
              error={errors.mobileNo && touched.mobileNo}
              success={mobileNoV.length > 0 && !errors.mobileNo}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                idProofType
              </SoftTypography>
            </SoftBox>
            <Select input={<SoftInput />} value={idProofType} onChange={handleSetState1}>
              <MenuItem value="Adhar">Adhar</MenuItem>
              <MenuItem value="Pan Card">Pan Card</MenuItem>
              <MenuItem value="Voter Id Card">Voter Id Card</MenuItem>
              <MenuItem value="Driving License">Driving License</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={idDtls.type}
              label={idDtls.label}
              name={idDtls.name}
              value={idDtlsV}
              placeholder={idDtls.placeholder}
            />
          </Grid>
        </Grid>

      </SoftBox>

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
            <Select input={<SoftInput />} value={state} onChange={handleSetState2}>
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="10">Hello 10</MenuItem>
              <MenuItem value="11">Hello 11</MenuItem>
              <MenuItem value="12">Hello 12</MenuItem>
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

// typechecking props for UserInfo
UserDetail.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  updateUserInfoDetail: PropTypes.any,
  updateAdressDetail: PropTypes.any
};

export default UserDetail;
