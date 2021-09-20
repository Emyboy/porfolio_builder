import Navbar from "@components/Navbar/Navbar";
import { StoreState } from "@redux/store/store";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { VscNewFile } from "react-icons/vsc";

interface Props {}

const Wrapper = styled.section`
    /* height: 100vh auto; */
    background-color: ${(p) => p.theme.colors.background};
    padding-top: 5em;
    padding-bottom: 3em;
    h3 {
        text-align: center;
        color: ${(p) => p.theme.colors.text_color};
        font-size: 55px;
        margin-bottom: 1em;
    }
`;

const EachDocument = styled.div`
    height: 30em;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.accent_color};
    text-align: center;
    section> h5{
        color: ${(p) => p.theme.colors.text_color};
        margin-top: 1em;
    }
    section{ 
        padding-top: 9em;
    }
   svg {
        color: ${(p) => p.theme.colors.text_color};
    }
    :hover {
        border: 1px solid ${(p) => p.theme.colors.theme_color};
    }
`;

export default (props: Props) => {
    const { user } = useSelector((state: StoreState) => state.auth);
    const router = useRouter();
    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user]);
    return (
        <>
            <Navbar home />
            <Wrapper>
                <h3>Your Documents</h3>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-11 col-lg-2 m-2">
                            <EachDocument>
                                <section>
                                    <VscNewFile size={60} />
                                    <h5>Create New Document</h5>
                                </section>
                            </EachDocument>
                        </div>
                        {[1, 2, 3, 4, 5, 6, 7].map((val, i) => {
                            return (
                                <div className="col-sm-12 col-md-8 col-lg-2 m-2">
                                    <EachDocument></EachDocument>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Wrapper>
        </>
    );
};
