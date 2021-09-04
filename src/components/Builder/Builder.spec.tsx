import { render } from "@test";
import { BuilderComponent as Builder } from "./Builder.component";

describe("Testing Builder Components", () => {
    it("should render the builder without crashing", () => {
        const component = render(<Builder />);
        expect(component).toBeTruthy();
        expect(component).toBeDefined();
    });

    it("should have builder preview as a child", () => {
        const { getByTestId } = render(<Builder />);
        expect(getByTestId("builder-preview")).toBeTruthy();
    });
});
