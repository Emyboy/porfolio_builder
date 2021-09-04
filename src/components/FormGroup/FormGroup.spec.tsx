import { render } from "@test";
import FormGroup from "./FormGroup";

export const formGroupMockProps = {
    children: <input id="for_me" placeholder='placeholder' />,
    label: "My Input",
    labelClassName: "btn",
    divided: true,
    htmlFor: "for_me",
};

describe("Testing form group", () => {
    it("should render without crashing", () => {
        const input = render(<FormGroup {...formGroupMockProps} />);
        expect(input).toBeTruthy();
    });
    it("should render with required props", () => {
        const { getByLabelText, getByPlaceholderText } = render(<FormGroup {...formGroupMockProps} />);
        expect(getByLabelText("My Input")).toBeTruthy();
        expect(getByPlaceholderText('placeholder')).toBeTruthy();
    });
    
    it('should render with other props', () => {
        const {  getByTestId, getByText } = render(<FormGroup {...formGroupMockProps} />);
        expect(getByText('My Input').classList).toContain('btn')
        expect(getByText('My Input').className).toEqual('mb-1 btn')
        expect(getByTestId("form-group-line")).toBeTruthy();
    })

});
