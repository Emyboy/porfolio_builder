import React, { ReactElement, useState, useEffect } from "react";
import { Switch } from 'antd';

interface Props {
  children: ReactElement[] | ReactElement | null;
  setDisabled: Function;
  disabled: boolean;
}

export default function EachToolWrapperTool({
  children,
  setDisabled,
  disabled,
}: Props): ReactElement {
  return (
    <div className="form-group m-0 p-0">
      <hr className="text-muted" />
      <div className="d-flex">
        <Switch size="default" checked={!disabled} onChange={e => setDisabled(!disabled)} />
        <label className="text-muted ml-2">Use Avatar</label>
      </div>
      {children}
    </div>
  );
}
