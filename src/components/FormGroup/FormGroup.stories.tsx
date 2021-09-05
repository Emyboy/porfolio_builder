import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import FormGroup from "./FormGroup";

export default {
    title: "Form Group",
    component: FormGroup,
    decorators: [withKnobs],
};

export const BasicBtn = () => (
    <FormGroup label="Email Address">

    </FormGroup>
);
