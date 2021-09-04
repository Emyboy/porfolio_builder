import React, { ReactElement } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { StoreState } from "@redux/store/store";


interface Props {
  children: ReactElement[] | ReactElement;
  index: number;
}

const ToolbarWrapper = styled.aside`
    position: fixed;
    right: 2%;
    top: 40px;
    width: 23%;
    height: 90vh;
    color: ${(p) => p.theme.colors?.text_color};
    z-index: 50;
    p,
    h3 {
        color: ${(p) => p.theme.colors?.text_color};
    }
    label {
        color: ${(p) => p.theme.colors?.text_color};
    }
    .right-panel {
        background-color: ${(p) => p.theme.colors?.accent_color};
        border-radius: 10px;
        overflow-y: scroll;
        padding: 10px;
    }
    @media only screen and (max-width: 900px) {
        width: 40vh;
    }
`;

export default function Toolbar({ children, index }: Props): ReactElement {
    const builder = useSelector((state: StoreState) => state.builder);
  return (
      <ToolbarWrapper id="aside">
          <div className="right-panel m-1 h-100">
              <h3>
                  {builder.widget_list[index].display_name}
              </h3>
              <p>
                  {builder.widget_list[index].description}
              </p>
              <hr />
              {children}
          </div>
      </ToolbarWrapper>
  );
}
