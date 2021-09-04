import { Button } from '@components/Button/Button.component';
import React from 'react';
import { S_Builder } from './Builder.styled';
import BuilderPreview from './BuilderPreview';
import Head from 'next/head';


export const BuilderComponent:React.FC = () => {
    return (
        <S_Builder>
            <Head>
                <title>Builder</title>
                <link rel="icon" href="/logo.png"></link>
            </Head>
            <div className="fixed-top row justify-content-center">
                <nav className="shadow">
                    <h4>Menu</h4>
                    <Button onClick={() => {}}>
                        {"Preview"}
                    </Button>
                </nav>
            </div>
            <div className="container-fluid pt-4" style={{ height: "98vh" }}>
                <BuilderPreview />
            </div>
        </S_Builder>
    );
}

