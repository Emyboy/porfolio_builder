import { render } from "@test";
import { JumbotronWidget } from "@widgets";
import JumbotronDataset from "./Jumbotron.dataset";

export const JumbotronMockProps = {
    widget_data: {...JumbotronDataset, index: 0},
};

describe("Testing Jumbotron widget", () => {
    it("should render without crashing", () => {
        const component = render(<JumbotronWidget {...JumbotronMockProps} />);
    });
});
