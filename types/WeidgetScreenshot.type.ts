interface EachWidgetScreenshotFormatType {
    ext: string;
    url: string;
    width: number;
    height: number;
    name: string;
}
interface WidgetScreenshotFormatType {
    large: EachWidgetScreenshotFormatType;
    small: EachWidgetScreenshotFormatType;
    medium: EachWidgetScreenshotFormatType;
    thumbnail: EachWidgetScreenshotFormatType;
}

export interface WidgetScreenshotType {
    id: number;
    name: string;
    caption: string;
    width: number;
    height: number;
    formats: WidgetScreenshotFormatType;
    url: string;
}
