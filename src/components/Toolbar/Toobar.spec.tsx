import { AllTheProviders, render } from "@test";
import Toolbar from "./Toolbar";
import FormGroup from "@components/FormGroup/FormGroup";
import { formGroupMockProps } from "@components/FormGroup/FormGroup.spec";
import store from "@redux/store/store";
import JumbotronDataset from "@widgets/jumbotron/Jumbotron.dataset";
import { SET_BUILDER_STATE } from "@redux/actions/builder/builder.action.types";

export const toobarMockProps = {
    children: <FormGroup {...formGroupMockProps} />,
    index: 0,
};

beforeEach(() => {
    store.dispatch({
        type: SET_BUILDER_STATE,
        payload: {
            ...store.getState().builder,
            widget_list: [JumbotronDataset],
        },
    });
});

describe("Testing tool bar", () => {
    it("should render without crashing", () => {
        const component = render(
            <AllTheProviders>
                <Toolbar {...toobarMockProps} />
            </AllTheProviders>,
        );
        expect(component).toBeTruthy();
    });

    it("Should render props correctly", () => {
        const { getByText } = render(
            <AllTheProviders>
                <Toolbar {...toobarMockProps} />
            </AllTheProviders>,
        );
        expect(getByText("Default Jumbotron")).toBeTruthy()
        expect(getByText("This is a default bootstrap jumbotron")).toBeTruthy();
    });
});
