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
    idProofType,
    idDtls,
    mobileNo,
    address1,
    address2,
    city,
    state,
    zip,
    userEmail

  },
} = checkout;


export const initialValues = {
  [userName.name]:"",
  [idProofType.name]:"Adhaar",
  [idDtls.name]:"",
  [mobileNo.name]:"",
  [address1.name]: "",
  [address2.name]: "",
  [city.name]: "",
  [state.name]: "Andhra Pradesh",
  [zip.name]: "",
  [userEmail.name]: "",

};


export const stateList=[
"Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jammu and Kashmir",
"Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttarakhand",
"Uttar Pradesh",
"West Bengal",
"Andaman and Nicobar Islands",
"Chandigarh",
"Dadra and Nagar Haveli",
"Daman and Diu",
"Delhi",
"Lakshadweep",
"Puducherry"];


export const idProofTypeList=["Adhaar","PAN Card","Voter ID Card","Driving License"]