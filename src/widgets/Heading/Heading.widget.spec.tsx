import { render } from "@testing-library/react";
import HeadingDataset from "./Heading.dataset";
import HeadingWidget from "./Heading.widget";

const HeadingMockProps = {
    ...HeadingDataset,
    index: 1,
    heading: "Welcome",
};

describe("Testing heading widget", () => {
    it("should render without crashing", () => {
        const component = render(
            <HeadingWidget widget_data={{ ...HeadingDataset, index: 1 }} />,
        );
        expect(component).toBeTruthy();
    });

    it("should render widget data correctly", () => {
        const { getByText } = render(
            <HeadingWidget widget_data={{ ...HeadingMockProps }} />,
        );
        expect(getByText('Welcome')).toBeTruthy();
    });
});
