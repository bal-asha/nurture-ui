/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

// BalAsha - Nurture example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// NewUser page components
// import UserInfo from "layouts/pages/users/new-user/components/UserInfo";

import Header from "balAshaLayout/components/Header";

// NewUser layout schemas for form and form feilds
import validations from "balAshaLayout/my-profilee/ProfileUpdate/schemas/validations";
import form from "balAshaLayout/my-profilee/ProfileUpdate/schemas/form";
import initialValues from "balAshaLayout/my-profilee/ProfileUpdate/schemas/initialValues";
import { UserContext } from "custom/UserContext";

import axiosInstance from "platform/axiosConfig.js";
import UserDetail from "./components/UserDetails";

function ProfileUpdate() {

  const route_to_home= useNavigate();
  const { formId, formField } = form;
  const currentValidation = validations[0];
  const [data,setData]=useState("");
  const [user,setUser]=useState("");
  const [idProofType,setIdProofType]=useState("Adhar");
  const [state,setState]=useState(null);
  const userSessionDetail=useContext(UserContext);




  const updateUserInfoDetail =(idProofType_)=>{
    setIdProofType(idProofType_);
  }
  const updateAdressDetail= (state_)=>{
   setState(state_);
  }

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  const submitForm = async (values, actions) => {
    await sleep(1000);

    let userDetail=values;
    userDetail ={
      
      ...userDetail,  // Spread the previous state
      idProofType: idProofType, // Add or update properties
      userEmail: userSessionDetail.userEmail
    };
    let userDetaill ={     
      userName:userDetail.userName,
      mobileNo:userDetail.mobileNo,
      idDtls:userDetail.idDtls,
      address:{
        address1:userDetail.address1,
        address2:userDetail.address2,
        city:userDetail.city,
        zip:userDetail.zip
      },  
      idProofType: idProofType, // Add or update properties
      userEmail: userSessionDetail.userEmail
    };
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(userDetaill, null, 2)) ;

    
    axiosInstance.put('/update-user',userDetaill).then(data => {
      setUser(data);
      alert(JSON.stringify("Submitted Sucessfully", null, 2)) ;
      route_to_home("/my-profile");
    }).catch((err) => {
    console.error(err)
    });


    

  };



  const handleSubmit = (values, actions) => {
      submitForm(values, actions);

  };

  return (
    <DashboardLayout>
      <Header />
      <SoftBox py={3} mb={20}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>

            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card sx={{ height: "100%" }}>
                    <SoftBox p={2}>
                    <UserDetail formData={{ formField, values, errors, touched }} updateUserInfoDetail={updateUserInfoDetail} updateAdressDetail={updateAdressDetail} />
                    
                       <SoftBox>
                        <SoftBox mt={2} width="100%" display="flex" justifyContent="space-between">
                    
                            <SoftBox />
                         
                          <SoftButton
                            // disabled={isSubmitting}
                            type="submit"
                            variant="gradient"
                            color="dark"
                          >
                           send
                          </SoftButton>
                        </SoftBox>
                      </SoftBox>
                    </SoftBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProfileUpdate;
