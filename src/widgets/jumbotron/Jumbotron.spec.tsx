import { render } from "@test";
import { JumbotronWidget } from "@widgets";
import JumbotronDataset from "./Jumbotron.dataset";

export const JumbotronMockProps = {
    widget_data: {...JumbotronDataset, index: 0, twitter: "twitter.com"},
};

describe("Testing Jumbotron widget", () => {
    it("should render without crashing", () => {
        const component = render(<JumbotronWidget {...JumbotronMockProps} />);
        expect(component).toBeTruthy()
    });

    it("should render props correctly", () => {
        const { debug, getByText, getByRole } = render(<JumbotronWidget {...JumbotronMockProps} />);
        expect(getByText("Your Name")).toBeTruthy();
        expect(getByText("A Short Description About Yourself")).toBeTruthy();
        expect(getByText("A Short Description About Yourself").classList).toContain('fs-4');
        expect(getByRole('link').hasAttribute('href')).toBeTruthy()
        debug()
    })

});
