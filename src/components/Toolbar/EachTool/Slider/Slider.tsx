import React, { ReactElement } from "react";
import { Slider as AntSlider, Switch } from "antd";
import { SliderSingleProps } from 'antd/lib/slider'
import FormGroup from "@components/FormGroup/FormGroup";

interface Props {
    widget_data: any;
    label: string;
}
type AntProps = SliderSingleProps & Props;

export function Slider({ widget_data, onChange, max, min, label, defaultValue }: AntProps): ReactElement {
    return (
        <FormGroup label={label}>
            <AntSlider
                defaultValue={defaultValue}
                disabled={!widget_data.has_avatar}
                min={min}
                max={max}
                onChange={onChange}
            />
        </FormGroup>
    );
}
