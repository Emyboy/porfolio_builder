import dummy_jumbotron_data from "@widgets/jumbotron/Jumbotron.dataset";
import {
    ADD_WIDGET,
    SET_BUILDER_STATE,
    UPDATE_WIDGET_DATA,
} from "@redux/actions/builder/builder.action.types";
import { BuilderAction, BuilderStateTypes } from "./builder.reducer.types";
import HeadingDataset from "@widgets/Heading/Heading.dataset";
import ParagraphDataset from "@widgets/Paragraph/Paragraph.dataset";
// console.log(JSON.stringify(HeadingDataset))
const mockList = [
    dummy_jumbotron_data,
    HeadingDataset,
    ParagraphDataset,
    dummy_jumbotron_data,
    HeadingDataset,
    ParagraphDataset,
    dummy_jumbotron_data,
    ParagraphDataset,
];

const initialState: BuilderStateTypes = {
    meta_title: "",
    meta_description: "",
    meta_img_url: "",
    keywords: "",
    theme_color: "",
    index: 1,
    id: 1,
    widget_list: [],
    // widget_list: mockList.map((val, i) => {
    //     return { ...val, id: `${i}` };
    // }),
};

export default (state = initialState, { type, payload }: BuilderAction) => {
    switch (type) {
        case SET_BUILDER_STATE:
            return { ...state, ...payload };
        case UPDATE_WIDGET_DATA:
            state.widget_list[payload.id] = payload;
            return {
                ...state,
            };
        case ADD_WIDGET:
            state.widget_list.push({
                ...payload,
            });
            
            return {
                ...state,
                widget_list: [
                    ...state.widget_list.map((val, i) => ({
                        ...val,
                        id: `${i}`,
                    })),
                ],
            };
        default:
            return state;
    }
};
