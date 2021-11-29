import { BuilderComponent } from '@components/Builder/Builder.component'
import { GetServerSideProps } from 'next';
import React, { ReactElement } from 'react'
import { WidgetTypes } from 'types/widget.type';

interface Props {
    widgets: WidgetTypes[]
}

export default function BuilderPage({widgets}: Props): ReactElement {
    return <>
        <BuilderComponent widgets={widgets} />
    </>
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/widgets");
    const widgets: WidgetTypes[] = await res.json();

    // console.log("DATA ---", res);

    return {
        props: {
            widgets: widgets || [],
        },
    };
};