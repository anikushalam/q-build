import { useState } from "react";
import style from "./StudentFunctionRow.module.css";
import { useTranslation } from "react-i18next";
import InstituteStudentFilter from "./InstituteStudentFilter";
import { useFileUpload } from "../../../../hooks/authentication-api";
import { useScholarShipExcelByInstitute } from "../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../Loader/QLoader";
import AllStudentFilter from "../../../../MembersTab/staff/Filter/Dynamic/AllStudentFilter";
import SendFilterStudentMessage from "../../../../MembersTab/staff/Mainbody/FinanceManager/AllStudent/SendFilterStudentMessage";
import { Link, useParams } from "react-router-dom";

const StudentFunctionRow = ({
  onSearchEvent,
  id,
  applyFilter,
  setApplyFilter,
  sendStudentList,
}) => {
  const { t } = useTranslation();
  const params = useParams();

  const [openFilter, setOpenFilter] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [scholarShipExcelByInstitute] = useScholarShipExcelByInstitute();
  const [filter, setFilter] = useState(false);
  const [reminder, setReminder] = useState(false);

  const onExcelFileUpload = (e) => {
    if (e.target?.files?.length && id) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            scholarShipExcelByInstitute({
              id: id,
              excelFile: {
                excel_file: res.data?.imageKey,
              },
            })
              .then(() => {
                setDisabled((pre) => !pre);
              })
              .catch({});
          } else {
            setDisabled((pre) => !pre);
          }
        })
        .catch({});
    }
  };
  // const onDownload = (eve, done) => {
  //   setOpenFilter(true);
  // };
  return (
    <>
      <div className={style.exploreParent}>
        <div className={style.exploreChild}>
          <div className={style.searchbar}>
            <input
              type="text"
              placeholder={t("search")}
              name="search"
              className={`form-control ${style.searchinput}`}
              onChange={onSearchEvent}
            />
            <img alt="img" src="/images/search-dash-icon.svg" />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              src="/images/filter-blue-icon.svg"
              alt="filter icon"
              onClick={() => setFilter(true)}
              style={{
                cursor: "pointer",
                marginRight: "0.4rem",
              }}
            />

            <div>
              <label className={style.upload_excel_file} htmlFor="uploadExcel">
                <img
                  src="/images/upload-xslx-icon.svg"
                  alt="add student icon"
                  title="Upload scholarship excel file"
                />
              </label>
              <input
                type={"file"}
                id="uploadExcel"
                accept=".xlsx"
                onChange={onExcelFileUpload}
                style={{
                  display: "none",
                }}
              />
            </div>
            {/* {newArray?.length > 0 && (
            <CSVLink data={newArray} filename="Student List">
              <button type="button" className={style.downloadBtn}>
                <img alt="Icons" src="/images/download.svg" title="Download" />
              </button>
            </CSVLink>
          )} */}
            {/* <CSVLink
            data={exportData}
            asyncOnClick={true}
            filename="Student List"
            onClick={onDownload}
          > */}
            <button
              type="button"
              className={style.downloadBtn}
              title="Filter student and export data"
              onClick={() => setOpenFilter(true)}
            >
              <img alt="Icons" src="/images/download.svg" title="Download" />
            </button>
            <Link to={`/q/${params.username}/student?a=student-message`}>
              <img
                src="/images/member_tab/finance/finance-message-log-icon.svg"
                alt="receipt icon"
                title="View message history"
                style={{
                  height: "2rem",
                }}
              />
            </Link>
            <button
              className={style.os_reminder}
              onClick={() => setReminder(true)}
              // disabled={!isEnable}
            >
              {t("student_message")}
            </button>
          </div>

          {/* </CSVLink> */}
          {/* <Link to={`/q/${params.username}/student?a=setting`}>
            <p className={style.student_settings}>{t("student_setting")}</p>
          </Link> */}
        </div>
      </div>
      {disabled && <QLoader />}

      {openFilter && (
        <InstituteStudentFilter onClose={() => setOpenFilter(false)} />
      )}

      {filter && (
        <AllStudentFilter
          onClose={() => setFilter(false)}
          instituteId={id}
          setApplyFilter={setApplyFilter}
          applyFilter={applyFilter}
        />
      )}
      {reminder && (
        <SendFilterStudentMessage
          onClose={() => setReminder(false)}
          messageId={id}
          headId={id}
          viewAs={"INSTITUTE_ADMIN"}
          sendStudentList={sendStudentList}
          isInstitute
          toRedirectUrl={`/q/${params.username}/student?a=student-message`}
          instituteId={id}
        />
      )}
    </>
  );
};

export default StudentFunctionRow;
