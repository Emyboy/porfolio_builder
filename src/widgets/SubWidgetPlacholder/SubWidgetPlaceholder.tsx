import React, { ReactElement } from "react";
import styled from "styled-components";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

interface Props {}

const Wrapper = styled.div`
    background-color: ${p => p.theme.colors?.accent_color};
    color: ${p => p.theme.colors?.theme_color};
    text-align: center;
    height: 9em;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    border-radius: 10px;
    svg, small {
        align-self: center;
    }
`;

export default function SubWidgetPlaceholder({}: Props): ReactElement {
    return (
        <Wrapper>
            <AiOutlineAppstoreAdd size={30} />
            <small>Add Widget</small>
        </Wrapper>
    );
}
