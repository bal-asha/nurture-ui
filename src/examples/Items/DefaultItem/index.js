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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// custom styles for the DefaultItem
import { defaultItemIconBox, defaultItemIcon } from "examples/Items/DefaultItem/styles";

const DefaultItem = forwardRef(({ color, icon, title, description, ...rest }, ref) => (
  <SoftBox {...rest} ref={ref} display="flex" alignItems="center">
    <SoftBox sx={(theme) => defaultItemIconBox(theme, { color })}>
      <Icon fontSize="default" sx={(theme) => defaultItemIcon(theme, { color })}>
        {icon}
      </Icon>
    </SoftBox>
    <SoftBox ml={2} lineHeight={1}>
      <SoftTypography display="block" variant="button" fontWeight="medium">
        {title}
      </SoftTypography>
      <SoftTypography variant="button" fontWeight="regular" color="text">
        {description}
      </SoftTypography>
    </SoftBox>
  </SoftBox>
));

// Setting default values for the props of DefaultItem
DefaultItem.defaultProps = {
  color: "info",
};

// Typechecking props for the DefaultItem
DefaultItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DefaultItem;
