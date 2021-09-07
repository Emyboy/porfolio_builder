import React, { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import InputField from "@components/InputField/InputField.tool";
import { Button } from "@components/Button/Button.component";
import Link from "next/link";
import { AuthWrapper } from "./login";
import Navbar from "@components/Navbar/Navbar";

interface Props {}


export default function login({}: Props): ReactElement {
    return (
        <AuthWrapper>
            <Navbar home />
            <div className="col-lg-3 col-md-8 col-sm-12" id="login">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="text-center">
                            <Image src={"/logo.png"} width="40" height="40" />
                            <h2>Register</h2>
                        </div>
                        <form>
                            <InputField
                                name="username"
                                label="Username"
                                onChange={() => {}}
                                placeholder="Username"
                            />
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
                                    <small>Register</small>
                                </Button>
                                <Link href="/login">
                                    <a>Login</a>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthWrapper>
    );
}
