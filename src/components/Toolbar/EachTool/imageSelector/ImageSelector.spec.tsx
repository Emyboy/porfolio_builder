import { fireEvent, getRoles, render } from "@test";
import ImageSelectorTool from "./ImageSelector.tool";
import Global from "../../../../../Global";

export const ImageSelectorMock = {
    setImageFile: () => {},
    disabled: false,
    divided: true,
    // selectedImageFile: Global.user_placeholer_img,
};

describe("Testing Image selector tool", () => {
    it("should render without crashing", () => {
        const component = render(<ImageSelectorTool {...ImageSelectorMock} />);
        expect(component).toBeTruthy();
    });

});
