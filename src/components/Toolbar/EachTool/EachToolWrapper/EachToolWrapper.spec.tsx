import { render } from "@test";
import EachToolWrapperTool from "./EachToolWrapper.tool";

export const EachToolWrapperToolPropsMock = {
    children: <span>I am a tool</span>,
    setDisabled: (disabled: boolean) => {},
    disabled: false,
    sectionName: "Test Section",
    withoutDisability: false,
    label: "Test Tool",
};

describe("Testing EachtoolWrapper", () => {
    it("should render without crashing", () => {
        const component = render(
            <EachToolWrapperTool {...EachToolWrapperToolPropsMock} />,
        );
        expect(component).toBeTruthy();
    });

    it("should display props correctly", () => {
        const { getByText, getByTestId, debug } = render(
            <EachToolWrapperTool {...EachToolWrapperToolPropsMock} isOpen />,
        );
        expect(getByText("Test Section")).toBeTruthy();
        expect(getByText("Test Tool")).toBeTruthy();
    });
});
