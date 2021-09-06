import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Button } from "./Button.component";

export default {
    title: "Button",
    component: Button,
    decorators: [withKnobs],
};

export const BasicBtn = () => <Button onClick={() => {}}><span>Click Me</span></Button>
export const RoundedBtn = () => <Button rounded onClick={() => {}}><span>I'm Rounded</span></Button>
export const OutlinedBtn = () => <Button outlined onClick={() => {}}><span>I'm Outlined</span></Button>
