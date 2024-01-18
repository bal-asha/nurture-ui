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
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { UserContext } from "custom/UserContext";
import React, { useContext } from 'react';
import ProfileInfoCardCustome from "examples/Cards/InfoCards/ProfileInfoCardCustome";
import axiosInstance from "platform/axiosConfig.js";
import PropTypes from "prop-types";

function ProfileInformation({user}) {
  const loggedUser = useContext(UserContext);
  const [info_data,setInfoData]=useState({
          fullName: loggedUser.userName,
          email: loggedUser.userEmail,
          mobile: user.mobile || '',
          IDProofType: user.IDProofType || '',
          IDNumber: user.IDNumber || '',    
         });

      return (
    <ProfileInfoCardCustome
              title="profile information"
              info={info_data}
              action={{ route: "/pages/users/edit-user", tooltip: "Edit Profile" }}
              
            />
    );
}

ProfileInformation.propTypes = {

  user:PropTypes.any

 
};

export default ProfileInformation;
