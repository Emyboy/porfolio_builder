import React, { ReactElement, useState } from "react";
// import Toolbar from "@components/Toolbar/Toolbar";
// import { useDispatch, useSelector } from "react-redux";
// import { StoreState } from "@redux/store/store";

interface Props {
    children: ReactElement[] | ReactElement;
    index: number;
}

export default function WidgetWrapper({
    children,
}: Props): ReactElement {
    // const app = useSelector((state: StoreState) => state.app);
    return (
        <div data-testid="widget-wrapper">
            {children}
        </div>
    );
}
