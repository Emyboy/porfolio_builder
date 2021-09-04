import React, { ReactElement, useState, useEffect } from "react";
import FormGroup from "@components/FormGroup/FormGroup";
import styled from "styled-components";
interface Props {
    setImageFile: (file: any) => void;
    disabled: boolean;
    divided?: boolean;
    selectedImageFile?: string | undefined | null;
}

const Wrapper = styled.div`
    button {
        border: 1px solid ${(p) => p.theme.colors?.text_color};
        border-radius: 5px;
        background-color: ${(p) => p.theme.colors?.theme_color};
        color: ${(p) => p.theme.colors?.background};
        font-weight: 500;
    }
    img {
        border-radius: 50px;
    }
`;

export default function ImageSelectorTool({
    setImageFile,
    disabled,
    divided,
    selectedImageFile,
}: Props): ReactElement {
    const upload = () => {
        var input = document.getElementById("selectImage");
        input?.click();
    };
    return (
        <Wrapper>
            <FormGroup
                label="Upload An Image"
                labelClassName="mb-2"
                divided={divided}
            >
                <div className="d-flex justify-content-between">
                    <>
                        <button
                            id="plus"
                            onClick={upload}
                            disabled={disabled}
                            data-testid="image-file-picker"
                        >
                            {selectedImageFile
                                ? "Change Image"
                                : "Select Image"}
                        </button>
                        <input
                            id="selectImage"
                            disabled={disabled}
                            hidden
                            type="file"
                            onChange={(e) => setImageFile(e.target.files)}
                        />
                    </>
                    {selectedImageFile ? (
                        <div>
                            <img
                                src={selectedImageFile}
                                alt="preview"
                                width="30"
                            />
                        </div>
                    ) : null}
                </div>
            </FormGroup>
        </Wrapper>
    );
}
