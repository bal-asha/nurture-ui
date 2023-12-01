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

// BalAsha - Nurture base styles
import colors from "assets/theme/base/colors";

function AuthInspector({color, size}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path
                d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
        </svg>
    );
}

// Setting default values for the props of SpaceShip
AuthInspector.defaultProps = {
    color: "dark",
    size: "16px",
};

// Typechecking props for the SpaceShip
AuthInspector.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "white",
    ]),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default AuthInspector;
