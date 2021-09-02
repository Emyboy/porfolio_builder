import dummy_jumbotron_data from "@widgets/jumbotron/Jumbotron.dataset";
import {
  SET_BUILDER_STATE,
  UPDATE_WIDGET_DATA,
} from "../../actions/builder/builder.action.types";
import { BuilderAction, BuilderStateTypes } from "./builder.reducer.types";

const initialState: BuilderStateTypes = {
  meta_title: "",
  meta_description: "",
  meta_img_url: "",
  keywords: "",
  theme_color: '',
  index: 1,
  widget_list: [
    dummy_jumbotron_data,
    dummy_jumbotron_data,
  ],
};

export default (state = initialState, { type, payload }: BuilderAction) => {
  switch (type) {
    case SET_BUILDER_STATE:
      return { ...state, ...payload };
    case UPDATE_WIDGET_DATA:
      state.widget_list[payload.index] = payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};
