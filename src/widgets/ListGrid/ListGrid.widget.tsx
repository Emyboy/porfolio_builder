import SubWidgetPlaceholder from "@widgets/SubWidgetPlacholder/SubWidgetPlaceholder";
import React, { ReactElement } from "react";

interface Props {}


export default function ListGridWidget({}: Props): ReactElement {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <SubWidgetPlaceholder />
                    </div>
                    <div className="col-md-4">
                        <SubWidgetPlaceholder />
                    </div>
                    <div className="col-md-4">
                        <SubWidgetPlaceholder />
                    </div>
                    <div className="col-md-4">
                        <SubWidgetPlaceholder />
                    </div>
                </div>
            </div>
        </div>
    );
}
