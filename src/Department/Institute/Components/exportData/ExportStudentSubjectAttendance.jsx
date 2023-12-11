import React, { useEffect, useState } from "react";
import PopupWrapper from "../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/MiddleContent/Funds/Funds.module.css";
import QLoader from "../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import { CSVLink } from "react-csv";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useExportStudentSubjectAttendanceZip } from "../DepartmentApi/depart-api";
import useCalendar from "../../../../MembersTab/staff/Mainbody/FinanceManager/Payroll/Employee/useCalender";
import tileStyle from "./Tile.module.css";
import JoinFormCalender from "../../../../JoiningForm/Student/Form/JoinFormCalender";
const ExportStudentSubjectAttendance = ({ onClose, sid, className }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState(false);
  const [downloadLink, setDownloadLink] = useState(false);
  const [exportData, setExportData] = useState([]);
  const [isType, setIsType] = useState("");
  const [range, setRange] = useState({
    startRange: "",
    endRange: "",
  });

  const { daysInMonth, selectedDate, monthNames, getNextMonth, getPrevMonth } =
    useCalendar();
  const [exportStudentSubjectAttendanceZip] =
    useExportStudentSubjectAttendanceZip();

  useEffect(() => {
    if (downloadLink) {
      let downlabel = document.getElementById("attendance_download_file");
      downlabel.click();
      setDownloadLink(false);
      setExportData([]);
      setDisabled((pre) => !pre);
    }
  }, [downloadLink]);
  const onNext = () => {
    getNextMonth();
  };
  const onPrev = () => {
    getPrevMonth();
  };
  const generateMonthWiseExcel = (list) => {
    if (isType === "ALL") {
      let obj = {
        GRNO: "",
        RollNo: "",
        Name: "",
        Gender: "",
        [list.mapSubject?.subjectName]: "",
        [`${list.mapSubject?.subjectName} Overall Percentage`]: "",
      };
      const student = list?.students?.map((stu) => {
        let dObj = { ...obj };
        dObj.GRNO = stu?.studentGRNO ?? "N/A";
        dObj.RollNo = stu?.studentROLLNO;
        dObj.Name = `${
          stu?.studentFirstName +
          " " +
          stu?.studentMiddleName +
          " " +
          stu?.studentLastName
        }`;
        dObj.Gender = stu?.studentGender;
        dObj[
          list.mapSubject?.subjectName
        ] = `${stu.subjectWise.presentCount}/${stu.subjectWise.totalCount}`;
        dObj[`${list.mapSubject?.subjectName} Overall Percentage`] =
          stu.subjectWise.totalPercentage;

        return dObj;
      });
      return student;
    } else {
      let newDate = new Date(
        `${daysInMonth} ${
          monthNames[selectedDate.getMonth()]
        } ${selectedDate.getFullYear()}`
      );
      newDate = newDate.toISOString();
      const student = list?.map((stu) => {
        let dObj = {};
        if (isType === "RANGE") {
          for (let i = 1; i <= daysInMonth; i++) {
            dObj[`${i}/${newDate.substring(5, 7)}/${newDate.substring(0, 4)}`] =
              "";
          }
        } else {
          for (let i = 1; i <= daysInMonth; i++) {
            if (i < 10) {
              dObj[
                `0${i}/${newDate.substring(5, 7)}/${newDate.substring(0, 4)}`
              ] = "";
            } else {
              dObj[
                `${i}/${newDate.substring(5, 7)}/${newDate.substring(0, 4)}`
              ] = "";
            }
          }
        }
        for (let avail of stu?.availablity) {
          dObj[`${avail?.date}`] = avail?.status;
        }
        let obj = {
          GRNO: stu?.studentGRNO ?? "N/A",
          RollNo: stu?.studentROLLNO,
          Name:
            stu?.studentFirstName +
            " " +
            stu?.studentMiddleName +
            " " +
            stu?.studentLastName,
          Gender: stu?.studentGender,
          ...dObj,
        };
        return obj;
      });
      return student;
    }
  };

  const onType = (val) => {
    setIsType(val);
  };
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };
  const onExportData = () => {
    let flag = false;
    let validation = "";
    if (isType === "RANGE") {
      validation = onValidation(range);
      for (let errField in validation) {
        if (errField) {
          flag = true;
          break;
        }
      }
    } else {
      flag = false;
    }
    if (flag) {
      setFilled(validation);
    } else {
      setDisabled((pre) => !pre);
      let newDate = new Date(
        `${daysInMonth} ${
          monthNames[selectedDate.getMonth()]
        } ${selectedDate.getFullYear()}`
      );
      newDate = newDate.toISOString();
      exportStudentSubjectAttendanceZip({
        sid: sid,
        is_type: isType,
        month: `${newDate.substring(5, 7)}`,
        year: `${newDate.substring(0, 4)}`,
        zipData: range,
      })
        .then((res) => {
          setExportData(() => generateMonthWiseExcel(res.data?.attendance_zip));
          setDownloadLink(true);
        })
        .catch(() => {});
    }
  };

  const onDateFunctionFrom = (val) => {
    setRange((prev) => ({
      ...prev,
      startRange: val,
    }));
  };
  const onDateFunctionTo = (val) => {
    setRange((prev) => ({
      ...prev,
      endRange: val,
    }));
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.filter_container}
        style={{
          minHeight: "15rem",
        }}
      >
        <h6 className={style.filter_title}>
          {t("filter_and_export_student_attendance")}
        </h6>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        <section
          className={tileStyle.tile_tile_container}
          style={{
            marginTop: "1rem",
          }}
        >
          <div
            className={
              isType === "" ? tileStyle.tile_tile_active : tileStyle.tile_tile
            }
            onClick={() => onType("")}
          >
            {t("month")}
          </div>

          {/* <div
            className={
              isType === "RANGE"
                ? tileStyle.tile_tile_active
                : tileStyle.tile_tile
            }
            onClick={() => onType("RANGE")}
          >
            {t("date_range")}
          </div> */}
          <div
            className={
              isType === "ALL"
                ? tileStyle.tile_tile_active
                : tileStyle.tile_tile
            }
            onClick={() => onType("ALL")}
          >
            {t("all")}
          </div>
        </section>
        {!isType ? (
          <section className={style.fees_head_title}>
            <img
              src="/images/members/back-icon-white.svg"
              style={{
                cursor: "pointer",
              }}
              onClick={onPrev}
            />

            <h6 className={`${style.yearmonth}`}>
              {`${monthNames[selectedDate.getMonth()]}`}{" "}
              {`${selectedDate.getFullYear()}`}
            </h6>

            <img
              src="/images/members/forward-icon-white.svg"
              style={{
                cursor: "pointer",
              }}
              onClick={onNext}
            />
          </section>
        ) : isType === "ALL" ? null : (
          <>
            <JoinFormCalender
              labelText={t("filter_from")}
              placeholder={t("select_date")}
              name={"from"}
              value={range.startRange}
              onDateFunction={onDateFunctionFrom}
              errorShow={filled["startRange"]}
              customStyleContainer={{ position: "relative", width: "100%" }}
              datePickerPosition={{
                top: "-1rem",
              }}
            />
            <JoinFormCalender
              labelText={t("filter_to")}
              placeholder={t("select_date")}
              name={"to"}
              value={range.endRange}
              onDateFunction={onDateFunctionTo}
              errorShow={filled["endRange"]}
              customStyleContainer={{ position: "relative", width: "100%" }}
              datePickerPosition={{
                top: "-1rem",
                left: "-7rem",
              }}
            />
          </>
        )}

        <button
          className={style.next_btn}
          onClick={onExportData}
          style={{
            marginTop: "3rem",
          }}
        >
          {t("export_data")}
        </button>
        <CSVLink
          data={exportData}
          filename={`${className}`}
          id="attendance_download_file"
        />
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default ExportStudentSubjectAttendance;
