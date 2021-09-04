import React, { ReactElement, useState } from "react";
import { WidgetSideNav } from "./Builder.styled";
import WidgetRender from "./WidgetRender";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../redux/store/store";
import { Button } from "@components/Button/Button.component";

interface Props {}

export default function BuilderPreview({}: Props): ReactElement {
  const [showNav, setShowNav] = useState<boolean>(false);
  const builder = useSelector((state: StoreState) => state.builder);
  const dispatch = useDispatch();
  
  const EachPreview = () => {
    return (
      <div
        className="card text-white m-1"
        style={{
          height: "160px",
          width: "240px",
          backgroundImage: "url(https://picsum.photos/300/300)",
        }}
      >
        <div className="card-img-overlay">
          <p className="card-text text-shadow">Last updated 3 mins ago</p>
        </div>
      </div>
    );
  };
  return (
    <div className="row h-100 justify-content-start" data-testid='builder-preview'>
      <div className="h-100 col-lg-9 col-sm-12 mt-3 p-0">
        <div
          className="builder-body m-1 shadow"
          style={{ overflow: "scroll", height: "92vh", overflowX: "hidden" }}
        >
          <div>
            {builder.widget_list.map((val, i) => {
              return (
                <WidgetRender
                  onClick={() => {
                    dispatch({
                      type: "SET_APP_STATE",
                      payload: { toolsIndex: i },
                    });
                  }}
                  type={val.type}
                  widget_data={{ ...val, index: i }}
                  key={i}
                />
              );
            })}
          </div>

          <div className="text-center border-top mb-2">
            <Button rounded className="mt-3" onClick={() => setShowNav(!showNav)}>
              <span>Add Widget</span>
            </Button>
          </div>
        </div>
        <div></div>
      </div>
      {/* <div className="h-100 col-3 h-50">
        <div className="m-1 h-100"></div>
      </div> */}
      <WidgetSideNav show={showNav}>
        <div style={{ height: "70px" }}>
          <h3 className="text-white p-3">Select Widgets</h3>
        </div>
        <div className="h-100" style={{ overflowY: "scroll" }}>
          <div className="container">
            <div
              className="row pt2 pr-2 justify-content-center"
              style={{ paddingBottom: "15vh" }}
            >
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
              <EachPreview />
            </div>
          </div>
        </div>
      </WidgetSideNav>
    </div>
  );
}
