import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import SoftTypography from "../../../components/SoftTypography";
import SoftButton from "../../../components/SoftButton";
import SpaceShip from "../../../examples/Icons/SpaceShip";
import AuthInspector from "../../../examples/Icons/AuthInspector";

const UnAuthorizedUser = () => {
    const title = 'Unauthorized';
    const message = 'User is not authorized, please contact System Admin';
    const statusCode='401';
    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', paddingTop: 50 }}>
            <AuthInspector size="24px" color="dark"/>
            <SoftTypography variant="h2">{title}</SoftTypography>
            {statusCode && <SoftTypography variant="h6">Status Code: {statusCode}</SoftTypography>}
            {message && <SoftTypography variant="body1">{message}</SoftTypography>}
            <SoftButton variant="contained" color="info" href="/">
                Go Back
            </SoftButton>
        </Container>
    );
}

export default UnAuthorizedUser;