import React, { useEffect, useState } from "react";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import QLoader from "../../../../../Loader/QLoader";
import { useOneDepartmentAllSubjectOneClass } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useAddDayTimetable } from "../../../../../hooks/member_tab/class-api";
import { useTranslation } from "react-i18next";
import style from "../../Hostel/HostelFeeStructure/HostelFeeStructure.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import CustomSelectSubject from "../../../../../JoiningForm/Student/Form/CustomSelectSubject";
// import CustomTimePicker from "../../../../../Custom/TimePicker/TimePicker";
// import JoinFormTimePicker from "../../../../../JoiningForm/Student/Form/JoinFormTimePicker";
const AddTimetable = ({
  onClose,
  openAs,
  clsId,
  day,
  onRefetch,
  dayMenu,
  onCloseParent,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState("");
  const [state, setState] = useState({
    from: "",
    to: "",
  });

  const [subject, setSubject] = useState("");
  const { oneClassAllSubject, oneClassAllSubjectRefetch } =
    useOneDepartmentAllSubjectOneClass({
      cid: clsId,
      skip: !clsId,
    });
  const [addDayTimetable] = useAddDayTimetable();

  useEffect(() => {
    if (clsId) oneClassAllSubjectRefetch();
  }, [clsId, oneClassAllSubjectRefetch]);

  useEffect(() => {
    if (openAs === "EDIT") {
      setState({
        from: dayMenu?.from?.substring(0, 5) || "",
        to: dayMenu?.to?.substring(0, 5) || "",
      });
      setSubject(dayMenu?.subject);
    }
  }, [openAs, dayMenu]);

  const onSubjectSelect = (val) => {
    setSubject(val);
  };

  const timeFormatTable = (vale) => {
    const splitValue = vale?.split(":");
    let meridian = "";
    if (splitValue[0] > 12) {
      meridian = "Pm";
      splitValue[0] -= 12;
    } else if (splitValue[0] < 12) {
      meridian = "Am";
      if (splitValue[0] === 0) {
        splitValue[0] = 12;
      }
    } else {
      meridian = "Pm";
    }
    const hour = splitValue[0] > 9 ? splitValue[0] : `0${+splitValue[0]}`;
    return `${hour}:${splitValue[1]} ${meridian}`;
  };

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const onAddTimetable = () => {
    if (clsId && subject?._id) {
      const validation = onValidation(state);
      let flag = false;
      for (let errField in validation) {
        if (errField) {
          flag = true;
          break;
        }
      }
      if (flag) {
        setFilled(validation);
      } else {
        setDisabled((pre) => !pre);
        addDayTimetable({
          cid: clsId,
          sfid: dayMenu?.sfid,
          timetableBody: {
            day: day,
            from: timeFormatTable(state.from),
            to: timeFormatTable(state.to),
            subjectId: subject?._id,
          },
        })
          .then(() => {
            onRefetch();
            if (openAs === "EDIT") onCloseParent();
            else onClose();
          })
          .catch({});
      }
    }
  };

  // console.info("sdfhdsgj", dayMenu);
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
        }}
      >
        <div className={style.add_category_modal_title}>
          <h6>
            {openAs === "EDIT"
              ? t("upadate_time_table")
              : t("add_new_time_table")}
          </h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>

        <BorderBottom
          customStyle={{
            width: "100%",
            marginBlock: "0.5rem",
          }}
        />

        <CustomSelectSubject
          selectLabel={t("select_subject")}
          selectedValue={t("please_select_subject")}
          options={oneClassAllSubject?.classes?.subject ?? []}
          onClick={onSubjectSelect}
          value={
            `${subject?.subjectName} ${
              subject?.selected_batch_query?.batchName
                ? `(${subject?.selected_batch_query?.batchName})`
                : ""
            }` ?? ""
          }
          defalutValue={
            subject?.subjectName
              ? `${subject?.subjectName} ${
                  subject?.selected_batch_query?.batchName
                    ? `(${subject?.selected_batch_query?.batchName})`
                    : ""
                }`
              : ""
          }
          viewAs="NORMAL_FILTER"
          openAs="PROMOTE"
        />
        {/* <JoinFormTimePicker /> */}
        <JoinFormInput
          labelText={t("from")}
          placeholder="00:00"
          name={"from"}
          value={state?.from}
          type={"time"}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              from: e.target.value,
            }))
          }
          errorShow={filled["from"]}
        />
        <JoinFormInput
          labelText={t("to")}
          placeholder="00:00"
          name={"to"}
          value={state?.to}
          type={"time"}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              to: e.target.value,
            }))
          }
          errorShow={filled["to"]}
        />

        <button
          className={style.set_fees_structure_btn}
          title="Add Time Table"
          onClick={onAddTimetable}
          style={{ justifyContent: "center" }}
        >
          {openAs === "EDIT" ? t("update") : t("create")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AddTimetable;
