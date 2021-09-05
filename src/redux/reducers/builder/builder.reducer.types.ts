export interface BuilderAction {
    type: string;
    payload: BuilderStateTypes;
}

export interface BuilderStateTypes {
    index: any;
    meta_title: string;
    meta_description: string;
    meta_img_url: string;
    widget_list: any[];
    theme_color: string;
    keywords: string;
    id: number;
}
