import React from "react";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { Provider } from "react-redux";
import store from "@redux/store/store";
import "@styles/global.css";
import "@styles/bootstrap.css";
import "@styles/bootstrap.override.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <Head>
                <title>Builder</title>
                <link rel="icon" href="/logo.png"></link>
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </StyledThemeProvider>
    );
}

export default MyApp;
