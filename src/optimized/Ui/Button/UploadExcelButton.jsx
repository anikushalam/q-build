import { assestsUserFinanceUrl } from "../../Services/UrlConfig/AssestsBaseUrl";
import style from "./Button.module.css";
const UploadExcelButton = ({ onExcelFileUpload, acceptType }) => {
  return (
    <>
      <label className={style.upload_excel_file} htmlFor="uploadExcel">
        <img
          src={`${assestsUserFinanceUrl}/upload-xslx.svg`}
          alt="add student icon"
          title="Upload excel file"
        />
      </label>

      <input
        type={"file"}
        id="uploadExcel"
        accept={acceptType}
        onChange={onExcelFileUpload}
        style={{
          display: "none",
        }}
      />
    </>
  );
};

export default UploadExcelButton;
