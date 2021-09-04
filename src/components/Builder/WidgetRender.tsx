import React, { ReactElement } from "react";
import styled from "styled-components";
import { JumbotronWidget } from "@widgets/jumbotron/Jumbotron.widget";
import HeadingWidget from "@widgets/Heading/Heading.widget";

interface Props {
    type: string;
    widget_data: any;
    onClick: () => void;
}

const Wrapper = styled.div`
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
            case "heading":
                return <HeadingWidget widget_data={props} />;
            default:
                return <></>;
        }
    };

    return (
        <Wrapper data-testid='widget-renderer' onClick={props.onClick}>{returnWidget()}</Wrapper>
    );
}
