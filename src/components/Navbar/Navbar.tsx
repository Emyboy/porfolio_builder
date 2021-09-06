import React, { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const Wrapper = styled.nav`
    position: fixed;
    width: 100vw;
    z-index: 50;
    padding: 20px;
    h1 {
        margin-left: 10px;
        color: ${(p) => p.theme.colors.text_color};
        margin-bottom: 0%;
        /* margin-top: 2px; */
    }
    .brand img {
        border-radius: 10px;
    }
    a {
        color: ${(p) => p.theme.colors.theme_color};
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

export default function Navbar({}: Props): ReactElement {
    return (
        <Wrapper>
            <div className="brand d-flex justify-content-between">
                <div className='d-flex'>
                    <Image src="/logo.png" width="50" height="50" />
                    <span>
                        <h1>Builder</h1>
                    </span>
                </div>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </div>
        </Wrapper>
    );
}
