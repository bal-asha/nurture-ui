/**
 =========================================================
 * BalAsha - Nurture - v4.0.2
 =========================================================

 * Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
 * Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// BalAsha - Nurture example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Overview page components
// Data
import dataTableData from "layouts/ecommerce/overview/data/dataTableData";
import nikeV22 from "assets/images/ecommerce/blue-shoe.jpeg";
import ProductCell from "layouts/ecommerce/overview/components/ProductCell";
import RefundsCell from "layouts/ecommerce/overview/components/RefundsCell";
import DefaultCell from "layouts/ecommerce/overview/components/DefaultCell";
import {useEffect, useState} from "react";
import Icon from "@mui/material/Icon";
import axiosInstance from "../../platform/axiosConfig";
import SoftButton from "../../components/SoftButton";
import SoftBadgeDot from "../../components/SoftBadgeDot";

function AllowedUserOverview() {

    async function findAllowedUsers() {
        try {
            const allowedUserUri = '/admin/allow-user/search?page=0&size=20&sort=createdDate';

            axiosInstance.get(allowedUserUri)
                .then((res) => {
                    let data = res.data;
                    let transformedValues = data.content.map(allowedUser => {
                        function isActive() {
                            return allowedUser.status === 'ACTIVE';
                        }

                        function dotColor() {
                            return isActive() ? 'success' : 'error';
                        }

                        function disableUser() {
                            const disableUserUri = '/admin/allow-user/disable?userId=' + allowedUser.id;
                            axiosInstance.post(disableUserUri)
                                .then((res) => {
                                     findAllowedUsers()
                                })
                                .catch((err) => {
                                    console.error(err)
                                });
                        }

                        function enableUser() {
                            const enableUserUri = '/admin/allow-user/activate?userId=' + allowedUser.id;
                            axiosInstance.post(enableUserUri)
                                .then((res) => {
                                     findAllowedUsers()
                                })
                                .catch((err) => {
                                    console.error(err)
                                });
                        }

                        return {
                            user: <ProductCell image={nikeV22} name={allowedUser.emailId} orders={12}/>,
                            type: <DefaultCell>{allowedUser.type}</DefaultCell>,
                            status: <DefaultCell><SoftBadgeDot badgeContent={allowedUser.status}
                                                               color={dotColor()}/></DefaultCell>,
                            action: (
                                isActive() ?
                                    <SoftButton color='error' onClick={disableUser}>DISABLE</SoftButton> :
                                    <SoftButton color='success' onClick={enableUser}>ENABLE</SoftButton>
                            ),
                        }
                            ;
                    });
                    setTableContent({
                        columns: [...tableTitles],
                        rows: [...transformedValues],
                    });
                    console.log(transformedValues)
                    console.log(data)
                })
                .catch((err) => {
                    console.error(err)
                });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const tableTitles = [
        {Header: "user", accessor: "user", width: "30%"},
        {Header: "type", accessor: "type"},
        {Header: "status", accessor: "status", align: "center"},
        {Header: "action", accessor: "action", align: "center"},
    ];

    const tableDefaultRow = [{
        user: <ProductCell image={nikeV22} name="Nike v22 Running" orders={8.232}/>,
        type: <DefaultCell>ADMIN</DefaultCell>,
        status: <DefaultCell>ACTIVE</DefaultCell>,
        action: (
            <><Icon fontSize="default" sx={{cursor: "pointer"}} onClick={findAllowedUsers}>
                Click Here
            </Icon>
                <RefundsCell
                    value={13}
                    icon={{color: "success", name: "keyboard_arrow_up"}}
                    tooltip="Refund rate is lower with 97% than other products"

                />
            </>

        ),
    },];

    const defaultTableData = {
        columns: [...tableTitles],
        rows: [...tableDefaultRow],
    };

    const [tableContent, setTableContent] = useState(defaultTableData);
    useEffect(() => {
        findAllowedUsers()
    }, []);


    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <SoftBox py={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <SoftBox pt={3} px={3}>
                                <SoftTypography variant="h6" fontWeight="medium">
                                    Allowed list of Users
                                </SoftTypography>
                            </SoftBox>
                            <SoftBox py={1}>
                                <DataTable
                                    table={tableContent}
                                    entriesPerPage={false}
                                    showTotalEntries={false}
                                    isSorted={false}
                                    noEndBorder
                                />
                            </SoftBox>
                        </Card>
                    </Grid>
                </Grid>
            </SoftBox>
            <Footer/>
        </DashboardLayout>
    );
}

export default AllowedUserOverview;
