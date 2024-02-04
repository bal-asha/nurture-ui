import * as Yup from "yup";
import checkout from "layouts/pages/profile/my-profile/edit-user/schemas/form";

const {
  formField: { userName, mobileNo, idProofType, idDtls, address1, city,state, zip ,userEmail},
} = checkout;

const validations = [
  Yup.object().shape({
    
    [userName.name]: Yup.string().required(userName.errorMsg),
    [mobileNo.name]: Yup.string().required(mobileNo.errorMsg).matches(/^[0-9]{10}$/, 'Invalid mobile number'),
    [idProofType.name]: Yup.string().required(idProofType.errorMsg),
    // idDtls.name]:Yup.string().required(idProofType.errorMsg),
    [idDtls.name]: Yup.string().when(idProofType.name, (idProofTypee, schema) => {
      console.log(idProofTypee[0]);
      switch (idProofTypee[0]) {
        case 'Adhaar':
          return schema.required(idDtls.errorMsg).matches(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/, 'Invalid Adhaar Number');
        case 'PAN Card':
          return schema.required(idDtls.errorMsg).matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN Number');
        case 'Voter ID Card':
          return schema.required(idDtls.errorMsg).matches(/^([a-zA-Z]){3}([0-9]){7}$/, 'Invalid Voter ID Number');
        case 'Driving License':
          return schema.required(idDtls.errorMsg).matches(/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9]{2})[0-9]{7}$/, 'Invalid Driving License Number');
        default:
          return schema;
      }
    })

  }),
  Yup.object().shape({
    [address1.name]: Yup.string().required(address1.errorMsg),
    [city.name]: Yup.string().required(city.errorMsg),
    [zip.name]: Yup.string().required(zip.errorMsg).min(6, zip.invalidMsg),
  }),

];

export default validations;
