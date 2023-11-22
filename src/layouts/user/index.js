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
import axios from "axios";
import {useState} from "react";
import Icon from "@mui/material/Icon";

function AllowedUserOverview() {

  const [quote, setQuote] = useState("");

  async function findAllowedUsers() {
    try {
      const allowedUserUri = '/search?status=ACTIVE&page=0&size=20&sort=createdDate'; // Replace with your API endpoint

      axios.get(allowedUserUri)
          .then((res) => {
         //   setQuote("\"" + res.data[0].quote + "\" - " + res.data[0].author )
            return console.log(res.data)
          })
          .catch((err) => {
           // setQuote("\"If We all do one random act of kindness daily, we just might set the world in the right direction - Martin Kornfeld\"");
            return console.error(err)
          });
    } catch (error) {
      // Handle errors, e.g., network issues or server errors
      console.error('Error:', error);
    }
  }

  const dataTableData = {
    columns: [
      { Header: "user", accessor: "user", width: "30%" },
      { Header: "type", accessor: "type" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        user: <ProductCell image={nikeV22} name="Nike v22 Running" orders={8.232} />,
        type: <DefaultCell>ADMIN</DefaultCell>,
        status: <DefaultCell>ACTIVE</DefaultCell>,
        action: (
            <><Icon fontSize="default" sx={{ cursor: "pointer" }} onClick={findAllowedUsers}>
              Click Here
            </Icon>
              <RefundsCell
                  value={13}
                  icon={{ color: "success", name: "keyboard_arrow_up" }}
                  tooltip="Refund rate is lower with 97% than other products"

              />
            </>

        ),
      },
    ],
  };


  return (
    <DashboardLayout>
      <DashboardNavbar />
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
                  table={dataTableData}
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
      <Footer />
    </DashboardLayout>
  );
}

export default AllowedUserOverview;
