import React from "react";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { Provider } from "react-redux";
import store from "@redux/store/store";
import "@styles/global.css";
import "@styles/bootstrap.css";
import "@styles/bootstrap.override.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </StyledThemeProvider>
    );
}

export default MyApp;
