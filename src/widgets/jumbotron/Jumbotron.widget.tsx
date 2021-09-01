import React, { useState } from 'react';
import { JumbotronType } from './Jombotron.type';

interface Props {
    widget_data: JumbotronType;
}

export const JumbotronWidget:React.FC<Props> = () => {
    return (
        <div className="jumbotron">
            <h1>Bottom Navbar example</h1>
            <p className="lead">
                This example is a quick exercise to illustrate how the bottom
                navbar works.
            </p>
            <a
                className="btn btn-lg btn-primary"
                href="/docs/5.0/components/navbar/"
                role="button"
            >
                View navbar docs »
            </a>
        </div>
    );
}

