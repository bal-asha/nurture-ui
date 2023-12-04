/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import checkout from "layouts/pages/profile/my-profile/edit-user/schemas/form";

const {
  formField: {
    userName, 
    idDtls,
    mobileNo,
    address1,
    address2,
    city,
    zip,
    userEmail
    // firstName,
    // lastName,
    // company,
    // email,
    // password,
    // repeatPassword,

    // twitter,
    // facebook,
    // instagram,
    // publicEmail,
    // bio,
  },
} = checkout;

const initialValues = {
  [userName.name]:"",
  [idDtls.name]:"",
  [mobileNo.name]:"",
  [address1.name]: "",
  [address2.name]: "",
  [city.name]: "",
  [zip.name]: "",
  [userEmail.name]: "",
  // [firstName.name]: "",
  // [lastName.name]: "",
  // [company.name]: "",
  // [password.name]: "",
  // [repeatPassword.name]: "",
  // [twitter.name]: "",
  // [facebook.name]: "",
  // [instagram.name]: "",
  // [publicEmail.name]: "",
  // [bio.name]: "",
};

export default initialValues;
