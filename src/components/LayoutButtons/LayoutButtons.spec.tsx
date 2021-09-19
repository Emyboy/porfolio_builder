import { render } from "@test";
import LayoutButtons from "./LayoutButtons";

export const LayoutButtonMock = {
    onChange: () => {},
    disabled: false,
    selected: "center",
    options: ["left", "center", "right"],
};

describe("Testing layout buttons", () => {
    it("should render without crashing", () => {
        const btn = render(<LayoutButtons {...LayoutButtonMock} />);
        expect(btn).toBeTruthy();
    });

    it("should call the on change function", () => {
        const onChange = jest.fn();
        const { getByTestId } = render(
            <LayoutButtons {...LayoutButtonMock} onChange={onChange} />,
        );
        getByTestId("btn-1").click();
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it("should disabled buttons", () => {
        const { getByTestId, debug } = render(<LayoutButtons {...LayoutButtonMock} disabled={true} />);
        expect(getByTestId("btn-1").getAttribute("disabled")).toContain("");
    });
});
