import {ThemeProvider} from "@mui/material/styles";
import theme from "../assets/theme";
import CssBaseline from "@mui/material/CssBaseline";
import {Navigate, Route, Routes} from "react-router-dom";
import routes from "../routes";
import getRoutes from "./RoutingInfo";


const LoginScreen = () => {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes>
                {getRoutes(routes)}
                <Route path="*" element={<Navigate to="/authentication/sign-in/basic"/>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default LoginScreen;
