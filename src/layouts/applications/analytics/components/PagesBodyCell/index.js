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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import TableRow from "@mui/material/TableRow";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// BalAsha - Nurture base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function PagesBodyCell({ rows, noBorder }) {
  const { light } = colors;
  const { borderWidth } = borders;

  const renderRows = rows.map((row) => (
    <SoftBox
      key={row}
      component="td"
      width="100%"
      textAlign="left"
      borderBottom={noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`}
      p={1}
    >
      <SoftTypography
        display="block"
        variant="button"
        fontWeight="medium"
        color="text"
        sx={{ width: "max-content" }}
      >
        {row}
      </SoftTypography>
    </SoftBox>
  ));

  return <TableRow>{renderRows}</TableRow>;
}

// Setting default values for the props for PagesBodyCell
PagesBodyCell.defaultProps = {
  noBorder: false,
};

// Typechecking props for the PagesBodyCell
PagesBodyCell.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  noBorder: PropTypes.bool,
};

export default PagesBodyCell;
