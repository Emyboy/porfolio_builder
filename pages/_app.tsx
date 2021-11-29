import React, { useState } from "react";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { Provider } from "react-redux";
import store from "@redux/store/store";
import "@styles/global.css";
import "@styles/bootstrap.css";
import "@styles/bootstrap.override.css";
import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";


export const PageLoading = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(5, 24, 59, 0.25);
    backdrop-filter: blur(21px);
    -webkit-backdrop-filter: blur(11px);
    display: flex;
    justify-content: center;
    h3 {
        align-self: center;
        color: ${(p) => p.theme.colors?.theme_color};
        font-size: 50px;
    }
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [loading, setLoading] = useState(false)

    Router.events.on("routeChangeStart", () => {
        setLoading(true)
    });
    
    Router.events.on("routeChangeComplete", () => {
        setLoading(false)
    });
    return (
        <StyledThemeProvider>
            <Head>
                <title>Builder</title>
                <link rel="icon" href="/logo.png"></link>
            </Head>
            <Provider store={store}>
                {loading ? (
                    <PageLoading>
                        <h3>Loading...</h3>
                    </PageLoading>
                ) : null}
                <Component {...pageProps} />
            </Provider>
            <script
                src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                crossOrigin="anonymous"
            ></script>
        </StyledThemeProvider>
    );
}

export default MyApp;
