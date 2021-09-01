import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Button } from "./Button.component";

export default {
    title: "Button",
    component: Button,
    decorators: [withKnobs],
};

export const BasicBtn = () => <Button onClick={() => {}}>Click Me</Button>
