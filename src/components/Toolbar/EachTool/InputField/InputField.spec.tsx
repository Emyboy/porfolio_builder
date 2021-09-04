import { render, screen } from "@test";
import InputField from "./InputField.tool";

export const InputFildMock = {
    label: "my label",
    htmlFor: "input",
    onChange: () => {},
    type: "number",
    placeholder: "sheee",
    defaultValue: "emy",
};

describe("Testing InputField tool", () => {
    it("should render without failing", () => {
        const component = render(<InputField {...InputFildMock} />);
        expect(component).toBeTruthy();
    });

    it("should render props correctly", () => {
        const { getByText, getByPlaceholderText } = render(
            <InputField {...InputFildMock} />,
        );
        expect(getByText("my label")).toBeTruthy();
        expect(getByPlaceholderText("sheee")).toBeTruthy();
    });
});
