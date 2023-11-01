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

// @mui material components
import Icon from "@mui/material/Icon";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// BalAsha - Nurture base styles
import borders from "assets/theme/base/borders";

// Images
import rocketShip from "assets/images/illustrations/rocket-white.png";

function OutlinedCard() {
  const { borderWidth, borderColor } = borders;
  return (
    <SoftBox
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      borderRadius="xl"
      shadow="xxl"
      border={`${borderWidth[1]} dashed ${borderColor}`}
      textAlign="center"
      p={3}
    >
      <SoftBox component="img" src={rocketShip} alt="Rocketship" width="50%" mb={3} />
      <SoftTypography
        component="a"
        href="#"
        variant="button"
        color="white"
        textTransform="capitalize"
        fontWeight="medium"
        sx={({ palette: { secondary }, typography: { size } }) => ({
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          color: `${secondary.main} !important`,

          "& .material-icons-round": {
            ml: 0.5,
            fontSize: size.md,
            transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
          },

          "&:hover .material-icons-round": {
            transform: "translateX(5px)",
          },
        })}
      >
        Join rocketship program <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
      </SoftTypography>
    </SoftBox>
  );
}

export default OutlinedCard;
