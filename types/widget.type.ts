import { JumbotronType } from "@widgets/jumbotron/Jombotron.type";
import { ParagraphWidgetType } from "@widgets/Paragraph/Paragraph.type";
import { HeadingTypes } from "@widgets/Heading/Heading.type";
import { WidgetScreenshotType } from "./WeidgetScreenshot.type";

export type WidgetTypes = JumbotronType | ParagraphWidgetType | HeadingTypes | any;



export interface WidgetAPITypes {
    name: string;
    description?: string;
    dataset: WidgetTypes;
    screenshot: WidgetScreenshotType
};
