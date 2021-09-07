import { Button } from "@components/Button/Button.component";
import Navbar from "@components/Navbar/Navbar";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { uuid } from 'uuidv4';

interface Props {}

const Hero = styled.div`
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 11em;
    background-color: ${p => p.theme.colors.background};
    video {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        z-index: 0;
    }
    h1 {
        font-weight: 700;
        color: ${(p) => p.theme.colors.text_color};
    }
    p {
        color: ${(p) => p.theme.colors.text_color};
    }
    button:nth-child(2) {
        margin-left: 11px;
    }
    .container {
        position: fixed;
        z-index: 80;
    }
    @media (min-width: 311px) {
        background-position: -10vw;
        /* height: 70vh; */
        video {
            position: fixed;
            right: -50em;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
            z-index: 0;
        }
    }
    @media (min-width: 992px) {
        background-position: -10vw;
        /* height: 70vh; */
        video {
            position: fixed;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
            z-index: 0;
        }
    }
`;

const Wrapper = styled.div`
    section {
        margin-top: 2em;
        height: 20vh;
        padding-bottom: 1em;
        background: rgb(0, 0, 0);
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.6306897759103641) 27%,
            rgba(0, 0, 0, 0.29735644257703087) 51%,
            rgba(0, 0, 0, 0.27494747899159666) 60%,
            rgba(255, 255, 255, 0) 100%
        );
        a {
            color: ${(p) => p.theme.colors.text_color};
            align-self: center;
            padding-top: 8em;
        }
    }
`;

export default function index({}: Props): ReactElement {
    return (
        <Wrapper>
            <Navbar />
            <Hero className="jumbotron jumbotron-fluid hero">
                <video
                    autoPlay
                    muted
                    loop
                    id="myVideo"
                    className="jumbotron jumbotron-fluid hero"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
                <div className="container">
                    <h1 className="display-4">Welcome To Builder</h1>
                    <p className="lead">
                        Build your resume, portfolio and website.
                    </p>
                    <div className="d-flex">
                        <Link href="/login">
                            <Button onClick={() => {}}>
                                <span>Get Started</span>
                            </Button>
                        </Link>{" "}
                        <Link href={`/builder/${uuid()}`}>
                            <Button outlined onClick={() => {}}>
                                <span>Try Demo</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </Hero>
            <div className="fixed-bottom">
                <section className="d-flex justify-content-center">
                    <a
                        href="https://chukwuemeka-ifeora.netlify.app/"
                        target="_blank"
                    >
                        About The Developer
                    </a>
                </section>
            </div>
        </Wrapper>
    );
}
