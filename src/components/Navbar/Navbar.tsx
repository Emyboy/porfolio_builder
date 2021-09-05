import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Image from 'next/image';

interface Props {
    
}

const Wrapper = styled.nav`
    position: fixed;
    width: 100vw;
    z-index: 50;
    padding: 10px;
    h1 {
        margin-left: 10px;
        color: ${(p) => p.theme.colors.text_color};
        margin-bottom: 0%;
        /* margin-top: 2px; */
    }
    .brand img {
        border-radius: 10px;
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
            <div className="brand d-flex">
                <Image src='/logo.png' width='50' height='50' /><span><h1>Builder</h1></span>
            </div>
        </Wrapper>
    )
}
