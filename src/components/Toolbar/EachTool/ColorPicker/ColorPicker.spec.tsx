import { render } from "@test";
import { ColorPicker } from "./ColorPicker.tool";

export const ColorPickierMockProps = {
    onColorChange: () => {},
    label: "Pick a color",
    defaultValue: "green",
};

describe("Testing Color picker widget tool", () => {
    it("should render without crashing", () => {
        const component = render(<ColorPicker {...ColorPickierMockProps} />);
        expect(component).toBeTruthy();
    });

    it("should display props correctly", () => {
        const { getByText, getByTestId } = render(<ColorPicker {...ColorPickierMockProps} />);
        expect(getByText("Pick a color")).toBeTruthy();
        expect(getByTestId("color-picker-input")).toBeTruthy();
    });

});
