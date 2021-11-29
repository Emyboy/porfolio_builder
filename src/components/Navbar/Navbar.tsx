import React, { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import IconBtn from "@components/IconBtn/IconBtn";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { StoreState } from "@redux/store/store";
interface Props {
    home?: boolean;
}

const Wrapper = styled.nav`
    position: fixed;
    width: 100vw;
    z-index: 50;
    padding: 20px;
    background-color: ${(p) => p.theme.colors.background};
    h1 {
        margin-left: 10px;
        color: ${(p) => p.theme.colors?.text_color};
        margin-bottom: 0%;
        /* margin-top: 2px; */
    }
    .brand img {
        border-radius: 10px;
    }
    a {
        color: ${(p) => p.theme.colors?.theme_color};
        font-size: 18px;
        align-self: self-end;
        margin-bottom: 13px;
        font-weight: 600;
    }
    @media only screen and (max-width: 800px) {
        h1 {
            font-size: 36px;
        }
    }
`;

export default function Navbar({ home }: Props): ReactElement {
    const router = useRouter();
    const { user } = useSelector((state: StoreState) => state.auth);
    return (
        <Wrapper className="shadow">
            <div className="brand d-flex justify-content-between">
                {home ? (
                    <IconBtn onClick={() => router.push("/")}>
                        <AiFillHome />
                    </IconBtn>
                ) : (
                    <div className="d-flex">
                        <Image src="/logo.png" width="50" height="50" />
                        <span>
                            <h1>Builder</h1>
                        </span>
                    </div>
                )}
                {user ? (
                    <div className="dropdown">
                        <button
                            className="btn text-theme dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {user.username}
                        </button>
                        <div
                            className="dropdown-menu bg-accent"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <Link href="/documents">
                                <a className="dropdown-item mb-1">
                                    My Documents
                                </a>
                            </Link>
                            <a className="dropdown-item mb-1" href="#">
                                About Us
                            </a>
                            <hr />
                            <a className="dropdown-item mb-1" href="#">
                                Logout
                            </a>
                        </div>
                    </div>
                ) : (
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                )}
            </div>
        </Wrapper>
    );
}
