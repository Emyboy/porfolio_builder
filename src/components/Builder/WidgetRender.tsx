import React, { ReactElement } from "react";
import styled from "styled-components";
import { JumbotronWidget } from "@widgets/jumbotron/Jumbotron.widget";

interface Props {
    type: string;
    widget_data: any;
    onClick: () => void;
}

const WidgetWrapper = styled.div`
    :hover {
        border: 5px dotted pink;
    }
`;

export default function WidgetRender({
    type,
    widget_data,
    onClick,
}: Props): ReactElement {
    const props = {
        ...widget_data,
        onClick,
    };
    const returnWidget = () => {
        switch (type) {
            case "jumbotron":
                return <JumbotronWidget widget_data={props} />;
            default:
                return <></>;
        }
    };

    return (
        <WidgetWrapper data-testid='widget-wrapper' onClick={props.onClick}>{returnWidget()}</WidgetWrapper>
    );
}
