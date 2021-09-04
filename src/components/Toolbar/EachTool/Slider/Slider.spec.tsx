import { render } from "@test";
import { Slider } from "./Slider";

export const SliderPropsMock = {
    widget_data: "",
    onChange: () => {},
    max: 80,
    min: 8,
    label: "my slider",
    defaultValue: 55,
};

describe("Testing Slider tool", () => {
    it("should render without crashing", () => {
        const component = render(<Slider {...SliderPropsMock} />);
        expect(component).toBeTruthy();
    });

    // it("should render the props correctly", () => {
    //     const { debug, getByLabelText } = render(<Slider {...SliderPropsMock} />)
    //     debug()
    // })
});
