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
import {idProofTypeList} from "layouts/pages/profile/my-profile/edit-user/schemas/initialValues";

import { useState ,useContext} from "react";

function UserInfo({ formData, updateUserInfoDetail,userDetail,initialValidProofType}) {

  let [idProofType,setIdProofType]=useState(initialValidProofType);
 
  const { formField, values, errors, touched } = formData;
  const { userName,idDtls,mobileNo,} = formField;
  const {
    userName: userNameV,
    idDtls:idDtlsV,
    mobileNo:mobileNoV,
  } = values;

  const handleSetState = (event) => {
    setIdProofType(event.target.value);
    updateUserInfoDetail(event.target.value);

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
                ID Proof Type
              </SoftTypography>
            </SoftBox>
            <Select input={<SoftInput />} value={idProofType} onChange={handleSetState}>
              {
                idProofTypeList.map((type)=>(<MenuItem key={type} value={type}>{type}</MenuItem>))
              }
              
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
    </SoftBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  updateUserInfoDetail: PropTypes.any,
  userDetail:PropTypes.object,
  initialValidProofType: PropTypes.string
};

export default UserInfo;
