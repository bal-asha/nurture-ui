/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for the SoftBadge
import SoftBadgeRoot from "components/SoftBadge/SoftBadgeRoot";

const SoftBadge = forwardRef(
  ({ color, variant, size, circular, indicator, border, container, children, ...rest }, ref) => (
    <SoftBadgeRoot
      {...rest}
      ownerState={{ color, variant, size, circular, indicator, border, container, children }}
      ref={ref}
      color="default"
    >
      {children}
    </SoftBadgeRoot>
  )
);

// Setting default values for the props of SoftBadge
SoftBadge.defaultProps = {
  color: "info",
  variant: "gradient",
  size: "sm",
  circular: false,
  indicator: false,
  border: false,
  children: false,
  container: false,
};

// Typechecking props of the SoftBadge
SoftBadge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  variant: PropTypes.oneOf(["gradient", "contained"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  circular: PropTypes.bool,
  indicator: PropTypes.bool,
  border: PropTypes.bool,
  children: PropTypes.node,
  container: PropTypes.bool,
};

export default SoftBadge;
