/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// BalAsha - Nurture example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/ecommerce/products/products-list/data/dataTableData";

function ProductsList() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox my={3}>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="flex-start" p={3}>
            <SoftBox lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                All Products
              </SoftTypography>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                A lightweight, extendable, dependency-free javascript HTML table plugin.
              </SoftTypography>
            </SoftBox>
            <Stack spacing={1} direction="row">
              <Link to="/ecommerce/products/new-product">
                <SoftButton variant="gradient" color="info" size="small">
                  + new product
                </SoftButton>
              </Link>
              <SoftButton variant="outlined" color="info" size="small">
                import
              </SoftButton>
              <SoftButton variant="outlined" color="info" size="small">
                export
              </SoftButton>
            </Stack>
          </SoftBox>
          <DataTable
            table={dataTableData}
            entriesPerPage={{
              defaultValue: 7,
              entries: [5, 7, 10, 15, 20, 25],
            }}
            canSearch
          />
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductsList;
