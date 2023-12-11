import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../FinanceManager/FeesStructure/PopupWrapper";
import style from "../FinanceManager/FeesStructure/FeesStructure.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../Loader/QLoader";
import JoinFormTextArea from "../../../../JoiningForm/Student/Form/JoinFormTextArea";
import { useStaffLeaveRequestMutation } from "../../../../services/joining/joinApi";
import TileWrapper from "../../../../Department/Institute/Components/exportData/TileWrapper";
import ChooseLeaveDates from "./ChooseLeaveDates";
import { useFileUpload } from "../../../../hooks/authentication-api";
import JoinFormFile from "../../../../JoiningForm/Student/Form/JoinFormFile";
import { useRaiseLeaveRequestByStaff } from "../../../../hooks/member_tab/department-api";

const typeList = [
  {
    name: "casual_leave",
    key: "Casual Leave",
    isAvaiable: true,
    count: 0,
  },
  {
    name: "medical_leave",
    key: "Medical Leave",
    isAvaiable: true,
    count: 0,
  },
  {
    name: "sick_leave",
    key: "Sick Leave",
    isAvaiable: true,
    count: 0,
  },
  {
    name: "compensation_off_leave",
    key: "Compensation Off Leave",
    isAvaiable: true,
    count: 0,
  },
  {
    name: "on_duty_leave",
    key: "On Duty Leave",
  },
  {
    name: "leave_without_pay",
    key: "Leave Without Pay",
  },
];

const CreateStaffLeave = ({
  staffId,
  onRefetch,
  onClose,
  leaveConfig,
  createdBy,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    reason: "",
    dates: [],
    attach: "",
    leave_type: "Casual Leave",
  });
  const [stateType, setStateType] = useState(typeList);
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState("");
  const [addDates, setAddDates] = useState("");
  const [staffLeaveRequest] = useStaffLeaveRequestMutation();
  const [raiseLeaveRequestByStaff] = useRaiseLeaveRequestByStaff();
  const [oneFileUpload] = useFileUpload();
  const [file, setFile] = useState("");
  const [currentTileActive, setCurrentTileActive] = useState("");
  useEffect(() => {
    if (leaveConfig) {
      let lm = typeList;
      lm[0].count = leaveConfig?.casual_leave;
      lm[1].count = leaveConfig?.medical_leave;
      lm[2].count = leaveConfig?.sick_leave;
      lm[3].count = leaveConfig?.c_off_leave;
      setStateType(lm);
      setCurrentTileActive(lm[0]);
    }
  }, [leaveConfig]);

  useEffect(() => {
    if (createdBy) {
      setState((prev) => ({
        ...prev,
        leave_type: "Compensation Off Leave",
      }));
    }
  }, [createdBy]);
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (["attach"]?.includes(obj)) {
      } else if (obj === "dates") {
        if (!data[obj]?.length) errors[obj] = `${obj} is required!`;
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };
  const onSave = () => {
    if (staffId) {
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
        if (createdBy === "OWN_PROFILE") {
          raiseLeaveRequestByStaff({
            sid: staffId,
            leaveConfig: state,
          })
            .then(() => {
              onRefetch();
              setDisabled((pre) => !pre);
              onClose();
            })
            .catch({});
        } else {
          staffLeaveRequest({
            sid: staffId,
            LeaveData: state,
          })
            .then(() => {
              onRefetch();
              setDisabled((pre) => !pre);
              onClose();
            })
            .catch({});
        }
      }
    }
  };

  const onCloseModal = () => {
    if (disabled) {
    } else {
      onClose();
    }
  };

  const onSelectType = (val) => {
    setState((prev) => ({
      ...prev,
      leave_type: val,
    }));
  };
  const onSelectParentType = (val) => {
    setState((prev) => ({
      ...prev,
      leave_type: val?.key,
    }));
    setCurrentTileActive(val);
  };

  const onInputChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onToggleDate = () => {
    setAddDates((pre) => !pre);
  };
  const onGrabDates = (val) => {
    setState((prev) => ({
      ...prev,
      dates: val,
    }));
  };
  const onFileUpload = (e) => {
    if (e.target.files[0]) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          setDisabled((pre) => !pre);
          setFile({
            documentName: e.target.files[0]?.name,
            documentKey: res.data?.imageKey,
            documentType: e.target.files[0]?.type,
          });
          setState((prev) => ({
            ...prev,
            attach: res.data?.imageKey,
          }));
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    }
  };

  // console.info("asjfkjsa", currentTileActive);
  return (
    <>
      {!addDates ? (
        <PopupWrapper onClose={onCloseModal}>
          <div
            className={style.add_category_modal}
            style={{
              width: "35rem",
              minHeight: "10rem",
              height: "fit-content",
              maxHeight: "35rem",
              overflowY: "auto",
              scrollBehavior: "smooth",
            }}
          >
            <section
              className={style.fee_middle_section_container}
              style={{ marginBottom: "1.2rem" }}
            >
              <h6
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                {t(
                  createdBy === "OWN_PROFILE"
                    ? "request_c_off_leave"
                    : "create_new_leave"
                )}
              </h6>

              <BorderBottom
                customStyle={{
                  width: "100%",
                  marginTop: "0.7rem",
                }}
              />
              {createdBy === "OWN_PROFILE" ? null : (
                <TileWrapper
                  labelText="leave_type"
                  tileList={stateType}
                  activeTile={state.leave_type}
                  onTile={onSelectType}
                  onParentTile={onSelectParentType}
                  customTileContainer={{
                    flexWrap: "wrap",
                  }}
                  customTileAvailableChild={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                />
              )}

              <JoinFormTextArea
                labelText={t("enter_reason")}
                placeholder={t("enter_reason")}
                name={"reason"}
                value={state.reason}
                type={"text"}
                onChange={onInputChange}
                errorShow={filled["reason"]}
              />

              <div
                onClick={onToggleDate}
                className={style.set_fees_structure_btn}
                style={{
                  width: "fit-content",
                  cursor: "pointer",
                  backgroundColor: "white",
                  height: "34px",
                  padding: "15px 13px",
                }}
              >
                {t("select_dates")}

                {filled["dates"] && (
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    * required
                  </span>
                )}
              </div>
              <div className={style.leave_dates}>
                {state.dates?.map((d, index) => (
                  <h6 key={d}>
                    {d}
                    {state.dates?.length === index + 1 ? "" : ", "}
                  </h6>
                ))}
              </div>

              <JoinFormFile
                labelText={t("leave_attachment")}
                name={"leave_attachment"}
                value={
                  file
                    ? {
                        originalName: file?.documentName,
                      }
                    : ""
                }
                onChange={onFileUpload}
                customStyleContainer={{
                  width: "100%",
                }}
              />

              <button
                className={style.fee_middle_confirm_button}
                onClick={onSave}
                style={{
                  marginTop: "2rem",
                }}
              >
                {t("create")}
              </button>
            </section>
          </div>

          {disabled && <QLoader />}
        </PopupWrapper>
      ) : (
        <ChooseLeaveDates
          onClose={onToggleDate}
          alradyDates={state.dates}
          onGrabDates={onGrabDates}
          currentTileActive={currentTileActive}
          createdBy={createdBy}
        />
      )}
    </>
  );
};

export default CreateStaffLeave;
