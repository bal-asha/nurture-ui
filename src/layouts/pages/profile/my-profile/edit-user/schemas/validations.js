/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import * as Yup from "yup";
import checkout from "layouts/pages/profile/my-profile/edit-user/schemas/form";

const {
  formField: { userName, mobileNo, idProofType, idDtls, address1, city, zip },
} = checkout;

const validations = [
  Yup.object().shape({
    [userName.name]: Yup.string().required(userName.errorMsg),
    [mobileNo.name]: Yup.string().required(mobileNo.errorMsg).matches(/^[0-9]{10}$/, 'Invalid mobile number'),
    [idDtls.name]: Yup.string().required(idDtls.errorMsg).matches(/[0-9][A-Z]/, 'Invalid ID'),
    // [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
    // [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
    // [repeatPassword.name]: Yup.string()
    //   .required(repeatPassword.errorMsg)
    //   .oneOf([Yup.ref("password"), null], repeatPassword.invalidMsg),
  }),
  Yup.object().shape({
    [address1.name]: Yup.string().required(address1.errorMsg),
    [city.name]: Yup.string().required(city.errorMsg),
    [zip.name]: Yup.string().required(zip.errorMsg).min(6, zip.invalidMsg),
  }),

];

export default validations;
