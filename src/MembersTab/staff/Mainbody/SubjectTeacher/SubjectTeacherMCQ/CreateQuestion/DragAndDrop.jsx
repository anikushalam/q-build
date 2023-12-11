import React from "react";
import "./DragAndDrop.css";

const DragAndDrop = ({ imageContain, showImage }) => {
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef(null);

  // handle drag events of file upload
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // handle paste events of file upload
  const handlePaste = (e) => {
    if (e.clipboardData.files.length) {
      imageContain(e.clipboardData.files[0]);
      console.info(e.clipboardData.files[0]);
    }
    // console.info(e);
  };

  // triggers this event to hanlde file when file is dropped to specific area
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      //   console.info("this is file", e.dataTransfer.files);
      imageContain(e.dataTransfer.files[0]);
    }
  };

  // triggers this event to hanlde file when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      //   console.info("this is e.target.files", e.target.files);
      imageContain(e.target.files[0]);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
      onPaste={handlePaste}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={false}
        onChange={handleChange}
        accept="image/png, image/jpeg, image/jpg"
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}
        style={showImage ? { height: "100%" } : { height: "auto" }}
      >
        <div>
          {showImage && (
            <img
              src={showImage}
              alt="dopred files"
              className="drag-active-image"
              onClick={onButtonClick}
            />
          )}
          {!showImage && (
            <>
              <p id="label-file-upload-paragraph">
                Drag and drop your file here or
              </p>
              <button className="upload-button" onClick={onButtonClick}>
                Upload a file
              </button>
            </>
          )}
        </div>
      </label>
      {!showImage && <div className="upload-button">Paste a file</div>}

      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};

export default DragAndDrop;
