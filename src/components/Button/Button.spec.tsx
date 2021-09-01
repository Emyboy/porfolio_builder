import { fireEvent, render } from "@test";

import { Button } from "./Button.component";

describe("Testing button component", () => {
    it("should render the button without crashing", () => {
        const Btn = render(<Button onClick={() => {}}>Hi there</Button>);
        expect(Btn).toBeTruthy();
    });

    it("should render the text of the button correctly", () => {
        const { getByText } = render(<Button onClick={() => {}}>Hi</Button>);
        expect(getByText("Hi")).toBeDefined();
    });

    it("button should be clickable", () => {
        const mockFunction = jest.fn();
        const { getByText } = render(
            <Button onClick={mockFunction}>Click Me</Button>,
        );
        fireEvent.click(getByText("Click Me"));
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
});
