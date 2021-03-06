import { StoreState } from "@redux/store/store";
import HeadingTools from "@widgets/Heading/Heading.tools";
import JumbotronTools from "@widgets/jumbotron/Jumbotron.tools";
import ParagraphToolSet from "@widgets/Paragraph/Paragraph.tools";
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

interface Props {}

export default function RenderToolSets({}: Props): ReactElement {
    const { widget_list } = useSelector((state: StoreState) => state.builder);
    const { toolsIndex } = useSelector((state: StoreState) => state.app);
    switch (widget_list[toolsIndex].type) {
        case 'jumbotron':
                return <JumbotronTools  />
        case 'heading':
                return <HeadingTools  />
        case 'paragraph':
                return <ParagraphToolSet  />
        default:
            return <div>
                <h6>Please Select Something</h6>
            </div>
    }
}
