import React, { ReactElement, useState, useEffect } from "react";
import { Switch } from "antd";
import { Collapse } from "antd";
import styled from "styled-components";

const { Panel } = Collapse;

interface Props {
    children: ReactElement[] | ReactElement | null;
    setDisabled: (disabled: boolean) => void;
    disabled?: boolean;
    sectionName?: string;
    withoutDisability?: boolean;
    label?:string;
    isOpen?: boolean;
}

const EachToolWrapper = styled.div`
    label {
        font-size: 17px;
        color: ${(p) => p.theme.colors?.text_color};
        font-weight: 400;
    }
`;

export default function EachToolWrapperTool({
    children,
    setDisabled,
    disabled,
    sectionName,
    withoutDisability,
    label,
    isOpen
}: Props): ReactElement {
    return (
        <EachToolWrapper>
            <Collapse
                defaultActiveKey={[`${isOpen ? 1: ''}`]}
                onChange={() => {}}
                className="mt-3 border-0"
            >
                <Panel header={sectionName} key="1" className="border-0">
                    <div className="form-group mt-1 p-0">
                        {withoutDisability ? null : (
                            <div className="d-flex justify-content-between mb-4">
                                <label className="ml-5 pl-5">{label}</label>
                                <Switch
                                    style={{ alignSelf: "center" }} 
                                    size="small"
                                    checked={!disabled}
                                    onChange={(e) => setDisabled(!disabled)}
                                />
                            </div>
                        )}
                        {children}
                    </div>
                </Panel>
            </Collapse>
        </EachToolWrapper>
    );
}
