import { Button } from '@components/Button/Button.component';
import React from 'react';
import { S_Builder } from './Builder.styled';


export const BuilderComponent:React.FC = () => {
    return (
        <S_Builder>
            <div className="fixed-top row justify-content-center">
                <nav className="shadow">
                    <h4>Menu</h4>
                    <Button onClick={() => {}}>
                        {"Preview"}
                    </Button>
                </nav>
            </div>
            <div className="container-fluid pt-4" style={{ height: "98vh" }}>
                {/* <BuilderPreview /> */}
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi odit perspiciatis obcaecati ipsa cumque? Veniam quaerat recusandae dolore error velit natus asperiores provident alias ipsa, aspernatur ipsum cum tenetur voluptas!</h2>
            </div>
        </S_Builder>
    );
}

