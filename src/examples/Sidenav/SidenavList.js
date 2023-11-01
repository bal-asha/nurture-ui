/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

Coded by www.bal-asha.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";

function SidenavList({ children }) {
  return (
    <List
      sx={{
        pl: 2,
        ml: 3,
      }}
    >
      {children}
    </List>
  );
}

// Typechecking props for the SidenavItem
SidenavList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidenavList;
