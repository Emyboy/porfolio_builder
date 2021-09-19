import React, { ReactElement, useState } from "react";
import Image from "next/image";
import InputField from "@components/InputField/InputField.tool";
import { Button } from "@components/Button/Button.component";
import Link from "next/link";
import { AuthWrapper } from "./login";
import Navbar from "@components/Navbar/Navbar";
import axios from "axios";

interface Props {}


export default function login({}: Props): ReactElement {

    const [data, setData] = useState({
        username: null,
        email: null,
        password: null
    })
    
    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/local/register`, {
            method: "POST",
            data,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleInputChange = (e:any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

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
                        <form onSubmit={handleSubmit}>
                            <InputField
                                name="username"
                                label="Username"
                                onChange={handleInputChange}
                                placeholder="Username"
                            />
                            <InputField
                                name="email"
                                label="Email"
                                onChange={handleInputChange}
                                placeholder="Email Address"
                            />
                            <InputField
                                name="password"
                                label="Password"
                                onChange={handleInputChange}
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
