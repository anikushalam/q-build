import React from "react";
import Overlay from "../../../Search/Overlay";
import SearchModalBackdrop from "../../../Search/SearchModalBackdrop";
import { imageShowUrl } from "../../../services/BaseUrl";

const ViewFileDialog = ({ onClose, keyValue }) => {
  return (
    <>
      <SearchModalBackdrop onClose={onClose} />
      <Overlay
        customStyle={{
          zIndex: "1200",
          borderRadius: "0",
          //   minHeight: "200px",
          //   minWidth: "200px",
        }}
      >
        <img
          src={`${imageShowUrl}/${keyValue}`}
          alt="view file"
          style={{ maxWidth: "700px", maxHeight: "500px" }}
        />
      </Overlay>
    </>
  );
};

export default ViewFileDialog;
