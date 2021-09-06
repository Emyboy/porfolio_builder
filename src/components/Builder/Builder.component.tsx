import { Button } from "@components/Button/Button.component";
import React from "react";
import { S_Builder } from "./Builder.styled";
import BuilderPreview from "./BuilderPreview";
import Head from "next/head";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import IconBtn from "@components/IconBtn/IconBtn";
import { useRouter } from "next/router";

export const BuilderComponent: React.FC = () => {
     const router = useRouter();
    return (
        <S_Builder>
            <Head>
                <title>Builder</title>
                <link rel="icon" href="/logo.png"></link>
            </Head>
            <div className="fixed-top row justify-content-center">
                <nav className="shadow">
                    <div className="d-flex col-lg-2 col-sm-4 justify-content-around">
                            <IconBtn onClick={() => router.push('/')} toolTip="Home">
                                <AiFillHome size={15} />
                            </IconBtn>
                        <IconBtn
                            onClick={() => {}}
                            className="ml-4"
                            toolTip="Settings"
                        >
                            <AiFillSetting />
                        </IconBtn>
                    </div>
                    <Button outlined onClick={() => {}}>
                        <span>Preview</span>
                    </Button>
                </nav>
            </div>
            <div className="container-fluid pt-4" style={{ height: "98vh" }}>
                <BuilderPreview />
            </div>
        </S_Builder>
    );
};
