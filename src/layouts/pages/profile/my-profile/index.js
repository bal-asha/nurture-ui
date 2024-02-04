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
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// BalAsha - Nurture example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/pages/profile/my-profile/Header";
import PlatformSettings from "layouts/pages/profile/profile-overview/components/PlatformSettings";
import ProfileInformation from "layouts/pages/profile/my-profile/ProfileInformation";
import AddressInformation from "layouts/pages/profile/my-profile/AddressInformation";
import EditUser from "layouts/pages/profile/my-profile/edit-user";
// Data
import profilesListData from "layouts/pages/profile/profile-overview/data/profilesListData";

import { UserContext } from "custom/UserContext";
import React, { useContext } from 'react';
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import axiosInstance from "platform/axiosConfig.js";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function ProfileOverview() {


  const [infoData,setInfoData]=useState(null);
  const loggedUser = useContext(UserContext);
  useEffect(()=>{
    axiosInstance.get('/get-users').then(data => {    
    if(data.data.length!==0){
      setInfoData({
        fullName: loggedUser.userName || data.data.userName,
        email: loggedUser.userEmail || data.data.userEmail,      
        mobile: data.data.mobileNo,
        address1: data.data.address.address1,
        address2:data.data.address.address2,
        city: data.data.address.city,
        zip:data.data.address.zip,
        state:data.data.address.state,
        IDProofType: data.data.idProofType,
        IDNumber: data.data.idDtls,     
      }); 
    }
   
  }).catch((err) => {
  console.error(err)
  });

},[]);

  return (
    <DashboardLayout>
      <Header user={loggedUser}/>
      <SoftBox mt={5} mb={3}>
        { infoData!=null ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={6}>     
            <ProfileInformation user={infoData}/> 
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <AddressInformation user={infoData}/>
          </Grid> </Grid>) : (null)
        }
        
      </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Projects
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Architects design houses
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor1}
                  label="project #2"
                  title="modern"
                  description="As Uber works through a huge amount of internal management turmoil."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor2}
                  label="project #1"
                  title="scandinavian"
                  description="Music is something that every person has his or her own specific opinion about."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor3}
                  label="project #3"
                  title="minimalist"
                  description="Different people have different taste, and various types of music."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team4, name: "Peterson" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team1, name: "Elena Morison" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "New project" }} outlined />
              </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default ProfileOverview;
