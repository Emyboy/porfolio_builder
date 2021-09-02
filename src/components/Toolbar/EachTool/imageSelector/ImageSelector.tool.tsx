import React, { ReactElement, useState, useEffect } from "react";

interface Props {
  setImageFile: (file:any) => void;
  disabled: boolean;
}

export default function ImageSelectorTool({
  setImageFile,
  disabled
}: Props): ReactElement {
  return (
    <div className="form-group">
      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        onChange={(e) => setImageFile(e.target.files)}
        disabled={disabled}
      />
    </div>
  );
}
