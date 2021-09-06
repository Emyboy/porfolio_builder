import React, { ReactElement, useState } from "react";
// import Toolbar from "@components/Toolbar/Toolbar";
// import { useDispatch, useSelector } from "react-redux";
// import { StoreState } from "@redux/store/store";

interface Props {
    children: ReactElement[] | ReactElement;
    toolkit?: ReactElement[] | ReactElement;
    index: number;
}

export default function WidgetWrapper({
    children,
    toolkit,
    index,
}: Props): ReactElement {
    // const app = useSelector((state: StoreState) => state.app);
    return (
        <div data-testid="widget-wrapper">
            {children}
            {/* {app.toolsIndex === index ? (
                <Toolbar index={index}>{toolkit}</Toolbar>
            ) : null} */}
        </div>
    );
}
