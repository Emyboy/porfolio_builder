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
  color: ${(p) => p.theme.colors.accent_color};
  z-index: 50;
  label {
    color: #4c5f96;
  }
  div {
    /* overflow-y: scroll; */
    padding: 5px;
  }
`;

export default function Toolbar({ children, index }: Props): ReactElement {
    const builder = useSelector((state: StoreState) => state.builder);

  return (
      <ToolbarWrapper id="aside">
          <div className="right-panel m-1 h-100 p-2">
              <h2 className="text-muted">
                  {builder.widget_list[index].display_name}
              </h2>
              <p className="text-accent">
                  {builder.widget_list[index].description}
              </p>
              {children}
          </div>
      </ToolbarWrapper>
  );
}
