/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function RefundsCell({ value, icon, tooltip }) {
  return (
    <SoftBox display="flex" justifyContent="center" alignItems="center" px={2}>
      <SoftTypography variant="button" fontWeight="medium" color="text">
        {value}
      </SoftTypography>
      <SoftBox color={icon.color} lineHeight={0}>
        <Icon sx={{ fontWeight: "bold" }} fontSize="default">
          {icon.name}
        </Icon>
      </SoftBox>
      {tooltip && (
        <SoftBox ml={2}>
          <Tooltip title={tooltip} placement="left">
            <SoftButton variant="outlined" color="secondary" size="small" circular iconOnly>
              <Icon>priority_high</Icon>
            </SoftButton>
          </Tooltip>
        </SoftBox>
      )}
    </SoftBox>
  );
}

// Setting default values for the props or RefundsCell
RefundsCell.defaultProps = {
  tooltip: "",
};

// Typechecking props for the RefundsCell
RefundsCell.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["info", "success", "warning", "error"]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  tooltip: PropTypes.string,
};

export default RefundsCell;
