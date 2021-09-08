import React, { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import InputField from "@components/InputField/InputField.tool";
import { Button } from "@components/Button/Button.component";
import Link from 'next/link';
import Navbar from "@components/Navbar/Navbar";

interface Props {}

export const AuthWrapper = styled.section`
    height: 100vh;
    background-color: ${(p) => p.theme.colors?.background};
    display: flex;
    justify-content: center;
    width: 100vw;
    background-image: url("/auth.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    h2 {
        color: ${(p) => p.theme.colors?.theme_color};
    }
    #login {
        align-self: center;
    }
    .card {
        border: 1px solid ${(p) => p.theme.colors?.theme_color};
        background-color: ${(p) => p.theme.colors?.accent_color};
        border-radius: 20px;
    }
    label {
        color: ${(p) => p.theme.colors?.theme_color};
    }
    a {
        color: ${(p) => p.theme.colors?.theme_color};
        align-self: center;
    }
    img {
        border-radius: 10px;
    }
    @media only screen and (max-width: 600px) {
        justify-content: center;
        display: block;
        padding: 20vh 10px 10vh 10px;
        background-size: cover;
    }
    @media only screen and (max-width: 950px) {
        background-size: cover;
    }
`;

export default function login({}: Props): ReactElement {
    return (
        <AuthWrapper>
            <Navbar home />
            <div className="col-lg-3 col-md-8 col-sm-12" id="login">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="text-center">
                            <Image src={"/logo.png"} width="40" height="40" />
                            <h2>Login</h2>
                        </div>
                        <form>
                            <InputField
                                name="email"
                                label="Email"
                                onChange={() => {}}
                                placeholder="Email Address"
                            />
                            <InputField
                                name="password"
                                label="Password"
                                onChange={() => {}}
                                placeholder="Password"
                                type="password"
                            />
                            <div className="d-flex justify-content-between mt-4 mb-4">
                                <Button className="w-50 btn" onClick={() => {}}>
                                    <small>Login</small>
                                </Button>
                                <Link href="/register">
                                    <a>Register</a>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthWrapper>
    );
}
