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

    it("should show the image preview", () => {
        const mockFun = jest.fn()
        const { getByTestId, getByAltText } = render(
            <ImageSelectorTool {...ImageSelectorMock} selectedImageFile={'my-file.png'} />,
        );

        expect(getByTestId("preview-img")).toBeTruthy();
        expect(getByTestId("preview-img").getAttribute("src")).toContain(
            "my-file.png",
        );
    });
});
