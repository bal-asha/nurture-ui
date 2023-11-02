/**
=========================================================
* BalAsha - Nurture - v4.0.2
=========================================================

* Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
* Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
import lock from "assets/images/illustrations/dark-lock-ill.png";

function Illustration() {
  return (
    <IllustrationLayout
      color="dark"
      header={
        <SoftBox textAlign="center">
          <SoftTypography variant="h4" fontWeight="bold">
            Mike Priesler
          </SoftTypography>
          <SoftTypography variant="body2" color="text">
            Enter password to unlock your account.
          </SoftTypography>
        </SoftBox>
      }
      illustration={{
        image: lock,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftInput type="password" placeholder="Password" size="large" />
        </SoftBox>
        <SoftButton variant="gradient" color="dark" size="large" fullWidth>
          unlock
        </SoftButton>
      </SoftBox>
    </IllustrationLayout>
  );
}

export default Illustration;
