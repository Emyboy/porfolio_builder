import { cleanup, fireEvent, render } from "@test";
import JumbotronDataset from "@widgets/jumbotron/Jumbotron.dataset";
import WidgetRender from "./WidgetRender";

const MockRenderProps = {
    widget_data: JumbotronDataset,
    onClick: () => {},
    type: "jumbotron",
    key: 1
};

afterEach(() => {
    cleanup()
});

describe("Testing widget render", () => {
    it("Should render without crashing", () => {
        const component = render(
            <WidgetRender {...MockRenderProps} />,
        );
        expect(component).toBeTruthy();
    });

    it("should render a jumbotron widget widget", () => {
        const { getByTestId } = render(<WidgetRender {...MockRenderProps} />);
        expect(getByTestId('jumbotron-widget')).toBeTruthy()
    });

    it('should be clickable', () => {
        const mockFnc = jest.fn();
        const {getByTestId} = render(<WidgetRender {...MockRenderProps} onClick={mockFnc} />);
        fireEvent.click(getByTestId("widget-renderer"));
        expect(mockFnc).toHaveBeenCalledTimes(1);
    })

});
