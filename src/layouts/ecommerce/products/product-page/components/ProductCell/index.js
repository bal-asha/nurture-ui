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

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

function ProductCell({ image, name }) {
  return (
    <SoftBox display="flex" alignItems="center" pr={2}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} variant="rounded" />
      </SoftBox>
      <SoftTypography variant="button" fontWeight="medium">
        {name}
      </SoftTypography>
    </SoftBox>
  );
}

// Typechecking props for the ProductCell
ProductCell.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductCell;
