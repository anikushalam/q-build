import React from "react";
import style from "./ParticipateEvents.module.css";
import { useTranslation } from "react-i18next";
import SelectOptions from "./SelectOptions";
import { imageShowUrl2 } from "../../../../../../services/BaseUrl";
import { checkPrevDate } from "../../../../../../Functions/timeComparison/prevTimeComparision";
import DisabledButton from "../../../../../../Custom/Button/DisabledButton";
import LoaderButton from "../../../../../../Loader/LoaderButton";
import { InputDateWithoutIcon } from "../../../../../../Custom/Input/InputDateField";
import { TextInput } from "../../../../../../Authentication/Auth_New_Flow/InputWithoutIcon/InputWithoutIcon";
import { useDepartmentAllClassMaster } from "../../../../../../hooks/member_tab/department-api";
import { useEffect } from "react";
import { useState } from "react";
import SelectClass from "../../Fees/FeesForm/SelectClass/SelectClass";
import { FileNotUpload } from "../../../../../../validation/Snackbar";
import { useCreateParticipativeEvent } from "../../../../../../hooks/member_tab/department-api";
import { useAllDepartmentCondition } from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import CustomSelectDepartment from "../../../../../../JoiningForm/Student/Form/CustomSelectDepartment";

function ParticipativeEventForm({
  did,
  bid,
  participativeEventListRefetch,
  handleSetPage,
  instituteId,
}) {
  const { t } = useTranslation();
  const [dateInput, setDateInput] = useState();
  const [disabled, setDisabled] = useState(false);
  const [clickClass, setClickClass] = useState(false);
  const [createparticipativeEvent] = useCreateParticipativeEvent();
  const [classMasterIndex, setClassMasterIndex] = useState(null);
  const [lastDateInput, setLastDateInput] = useState();
  const [isOpen, setIsOpen] = useState({
    ranking: false,
    checklist: false,
    fee: false,
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [participateData, setParticipateData] = useState({
    event_name: "",
    date: "",
    lastDate: "",
    event_about: "",
    event_fee: "",
    event_fee_critiria: "",
    event_checklist_critiria: "",
    event_ranking_critiria: "",
    classes: [],
    depart: [],
  });

  const [departmentSelect, setDepartmentSelect] = useState({
    did: "",
    bid: "",
  });
  const onDateFunction = (val) => {
    const dobCorrect = checkPrevDate(val);

    if (dobCorrect[0]) {
      setDateInput(dobCorrect[1]);
    } else {
      setNotificationState({
        msg: "Pleae Select Upcoming date",
        run: true,
      });
    }
  };
  const onLastDateFunction = (val) => {
    const dobCorrect = checkPrevDate(val);

    if (dobCorrect[0]) {
      setLastDateInput(dobCorrect[1]);
    } else {
      setNotificationState({
        msg: "Pleae Select Upcoming date",
        run: true,
      });
    }
  };

  const { allDepartment, allDepartmentRefetch } = useAllDepartmentCondition({
    id: instituteId,
    skip: !instituteId,
  });
  React.useEffect(() => {
    if (instituteId) allDepartmentRefetch();
  }, [instituteId, allDepartmentRefetch]);
  const { departmentAllClassMaster, departmentAllClassMasterRefetch } =
    useDepartmentAllClassMaster({
      data: {
        did: departmentSelect.did?._id,
        bid: departmentSelect.bid,
        page: 1,
        limit: 20,
      },
      skip: !departmentSelect.did?._id || !departmentSelect.bid,
    });
  React.useEffect(() => {
    if (departmentSelect.did?._id && departmentSelect.bid)
      departmentAllClassMasterRefetch();
  }, [
    departmentSelect.did?._id,
    departmentSelect.bid,
    departmentAllClassMasterRefetch,
  ]);

  useEffect(() => {
    if (dateInput) {
      setParticipateData({
        ...participateData,
        date: dateInput,
      });
      if (lastDateInput) {
        setParticipateData({
          ...participateData,
          lastDate: lastDateInput,
        });
      }
    }
  }, [dateInput, lastDateInput]);

  const textArea = document.querySelector("textarea");

  textArea?.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textArea.style.height = `${scHeight}px`;
  });
  const onDepartmentSelect = (val) => {
    // console.info("this is value", val);
    setDepartmentSelect((prev) => ({
      ...prev,
      bid: val?.departmentSelectBatch,
      did: val,
    }));
    setParticipateData((prev) => ({
      ...prev,
      depart: [val?._id],
    }));
  };

  const handleCreateEvent = () => {
    setDisabled(true);

    createparticipativeEvent({
      did: did,
      participateData: participateData,
    })
      .then(() => {
        handleSetPage();
        setParticipateData({
          event_name: "",
          date: "",
          lastDate: "",
          event_about: "",
          event_fee: "",
          event_fee_critiria: "",
          event_checklist_critiria: "",
          event_ranking_critiria: "",
          classes: [],
        });
        setDateInput();
        setLastDateInput();
        setDisabled(false);
        participativeEventListRefetch();
      })
      .catch(() => {
        setDisabled(false);
      });
  };

  return (
    <>
      {!clickClass && (
        <div className={style.peventleft}>
          <div className={style.peventlefttop}>{t("create_new_event")}</div>
          <div className={style.peventleftbody}>
            <div className={style.peventinputContainer}>
              <TextInput
                type="text"
                placeholder={t("pevent_name")}
                value={participateData.event_name}
                handleChange={(e) =>
                  setParticipateData({
                    ...participateData,
                    event_name: e.target.value,
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>

            <div className={style.peventinputContainer}>
              <InputDateWithoutIcon
                customStyleInput={{
                  width: "100%",
                  height: "2.2rem",
                  padding: "1rem 0.5rem",
                }}
                datePickerPosition={{
                  top: "1rem",
                  left: "0",
                  borderRadius: "0.375rem",
                  paddingBottom: "0",
                }}
                dateItemStyle={{
                  padding: "0.25rem",
                }}
                iconStyle={{
                  position: "absolute",
                  right: "0.9rem",
                  top: "0.6rem",
                  height: "1rem",
                }}
                range={false}
                placeholder={t("select_date")}
                dateInput={dateInput}
                setDateInput={onDateFunction}
              />
            </div>

            <div className={style.peventinputContainer}>
              <TextInput
                type="number"
                placeholder={t("participate_fees")}
                value={participateData.event_fee}
                handleChange={(e) =>
                  setParticipateData({
                    ...participateData,
                    event_fee: parseInt(e.target.value),
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>

            <textarea
              className={style.pollTextarea}
              id="pollTextArea"
              type="text"
              required
              // maxlength="140"
              placeholder={t("about_event")}
              value={participateData.event_about}
              onChange={(e) =>
                setParticipateData({
                  ...participateData,
                  event_about: e.target.value,
                })
              }
            />
            <CustomSelectDepartment
              selectLabel={t("select_department")}
              selectedValue={t("select_department")}
              options={allDepartment?.institute?.depart ?? []}
              onClick={onDepartmentSelect}
              openAs={"PROMOTE"}
              viewAs="EVENT_MANAGER"
              defalutValue={departmentSelect.did?.dName ?? ""}
            />
            <div
              className={style.item}
              onClick={() => setClickClass((clickClass) => !clickClass)}
            >
              <div className={style.select}>
                {participateData.classes?.length > 1 ? (
                  <p>
                    {participateData.classes?.length} {t("classes")}
                  </p>
                ) : participateData.classes?.length === 1 ? (
                  <p>
                    {participateData.classes?.length} {t("Class")}
                  </p>
                ) : (
                  <p>{t("select_classes")}</p>
                )}
                <img
                  className={style.selectclass}
                  src="/images/members/selectclass.svg"
                  alt=""
                />
              </div>
            </div>

            <div className={style.peventinputContainer}>
              <InputDateWithoutIcon
                customStyleInput={{
                  width: "100%",
                  height: "2.2rem",
                  padding: "1rem 0.5rem",
                }}
                datePickerPosition={{
                  top: "-21rem",
                  left: "-0.5rem",
                  borderRadius: "0.375rem",
                  paddingBottom: "0",
                }}
                dateItemStyle={{
                  padding: "0.25rem",
                }}
                iconStyle={{
                  position: "absolute",
                  right: "0.9rem",
                  top: "0.6rem",
                  height: "1rem",
                }}
                range={false}
                placeholder={t("last_date_to_apply")}
                dateInput={lastDateInput}
                setDateInput={onLastDateFunction}
              />
            </div>

            <div
              className={
                isOpen.checklist
                  ? `${style.formselectactive} ${style.formselect}`
                  : style.formselect
              }
              onClick={() =>
                setIsOpen({
                  ...isOpen,
                  checklist: !isOpen.checklist,
                })
              }
            >
              {participateData.event_checklist_critiria &&
              participateData.event_checklist_critiria !== "" ? (
                <h6
                  className={style.genderh}
                  onClick={() =>
                    setIsOpen({
                      ...isOpen,
                      checklist: true,
                    })
                  }
                >
                  {participateData.event_checklist_critiria}
                </h6>
              ) : (
                <h6
                  className={`${style.genderplaceholder} ${style.genderh}`}
                  onClick={() =>
                    setIsOpen({
                      ...isOpen,
                      checklist: true,
                    })
                  }
                >
                  {t("checklist")}
                </h6>
              )}

              {isOpen.checklist ? (
                <img
                  className={`${style.updownIcon} ${style.downIcon}`}
                  src={`${imageShowUrl2}/up-triangle-icon.svg`}
                  alt=""
                />
              ) : (
                <img
                  className={style.upIcon}
                  src={`${imageShowUrl2}/downn-icon.svg`}
                  alt=""
                />
              )}
              <SelectOptions
                open={isOpen.checklist}
                onClose={() =>
                  setIsOpen({
                    ...isOpen,
                    checklist: !isOpen.checklist,
                  })
                }
                setFormData={setParticipateData}
                formData={participateData}
                status="checklist"
              />
            </div>
            <div
              className={
                isOpen.fee
                  ? `${style.formselectactive} ${style.formselect}`
                  : style.formselect
              }
              onClick={() =>
                setIsOpen({
                  ...isOpen,
                  fee: !isOpen.fee,
                })
              }
            >
              {participateData.event_fee_critiria &&
              participateData.event_fee_critiria !== "" ? (
                <h6
                  className={style.genderh}
                  onClick={() =>
                    setIsOpen({
                      ...isOpen,
                      fee: true,
                    })
                  }
                >
                  {participateData.event_fee_critiria}
                </h6>
              ) : (
                <h6
                  className={`${style.genderplaceholder} ${style.genderh}`}
                  onClick={() =>
                    setIsOpen({
                      ...isOpen,
                      fee: true,
                    })
                  }
                >
                  {t("fees")}
                </h6>
              )}

              {isOpen.fee ? (
                <img
                  className={`${style.updownIcon} ${style.downIcon}`}
                  src={`${imageShowUrl2}/up-triangle-icon.svg`}
                  alt=""
                />
              ) : (
                <img
                  className={style.upIcon}
                  src={`${imageShowUrl2}/downn-icon.svg`}
                  alt=""
                />
              )}
              <SelectOptions
                open={isOpen.fee}
                onClose={() =>
                  setIsOpen({
                    ...isOpen,
                    fee: !isOpen.fee,
                  })
                }
                setFormData={setParticipateData}
                formData={participateData}
                status="fee"
              />
            </div>
            <div
              className={
                isOpen.ranking
                  ? `${style.formselectactive} ${style.formselect}`
                  : style.formselect
              }
              onClick={() =>
                setIsOpen({
                  ...isOpen,
                  ranking: !isOpen.ranking,
                })
              }
            >
              {participateData.event_ranking_critiria &&
              participateData.event_ranking_critiria !== "" ? (
                <h6
                  className={style.genderh}
                  onClick={() =>
                    setIsOpen({
                      ...isOpen,
                      ranking: true,
                    })
                  }
                >
                  {participateData.event_ranking_critiria}
                </h6>
              ) : (
                <h6
                  className={`${style.genderplaceholder} ${style.genderh}`}
                  onClick={() =>
                    setIsOpen({
                      ...isOpen,
                      ranking: true,
                    })
                  }
                >
                  {t("ranking")}
                </h6>
              )}

              {isOpen.ranking ? (
                <img
                  className={`${style.updownIcon} ${style.downIcon}`}
                  src={`${imageShowUrl2}/up-triangle-icon.svg`}
                  alt=""
                />
              ) : (
                <img
                  className={style.upIcon}
                  src={`${imageShowUrl2}/downn-icon.svg`}
                  alt=""
                />
              )}
              <SelectOptions
                customStyleOptions={{
                  position: "absolute",
                  left: "0",
                  top: "-4rem",
                  zIndex: "10",
                }}
                open={isOpen.ranking}
                onClose={() =>
                  setIsOpen({
                    ...isOpen,
                    ranking: !isOpen.ranking,
                  })
                }
                setFormData={setParticipateData}
                formData={participateData}
                status="rank"
              />
            </div>

            {participateData.event_name !== "" &&
            participateData.classes.length > 0 &&
            participateData.event_checklist_critiria !== "" &&
            participateData.event_fee_critiria !== "" &&
            participateData.event_ranking_critiria !== "" &&
            participateData.date !== "" &&
            participateData.lastDate !== "" &&
            participateData.event_about !== "" &&
            participateData.event_fee !== "" ? (
              <div
                className={style.button_main}
                style={{
                  marginTop: "2rem",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={handleCreateEvent}
              >
                <span>{t("create_event")}</span>

                {disabled && (
                  <div style={{ marginTop: "0.7vw" }}>
                    <LoaderButton />
                  </div>
                )}
              </div>
            ) : (
              <DisabledButton
                buttonText={t("create_event")}
                customStyleButton={{ marginTop: "2rem", width: "100%" }}
              />
            )}
          </div>

          {notificationState.run && (
            <FileNotUpload
              msg={notificationState.msg}
              run={notificationState.run}
              setRun={() => setNotificationState({ msg: "", run: false })}
              postiton="bottom"
              type="error"
            />
          )}
        </div>
      )}
      {clickClass === true && (
        <div className={`${style.peventleft} ${style.formcontent}`}>
          <div className={`${style.peventlefttop} ${style.peventlefttopflex}`}>
            <div className={`${style.peventlefttopflexleft}`}>
              <img
                src="/images/back.svg"
                alt="back"
                onClick={() => setClickClass(false)}
              />
              {t("select_class")}
            </div>
            {clickClass === true && participateData.classes?.length ? (
              <div
                className={style.selectBtn}
                onClick={() => setClickClass(false)}
              >
                {t("select")}
              </div>
            ) : (
              ""
            )}
          </div>
          {departmentAllClassMaster?.classMaster?.map((classMaster, index) => (
            <SelectClass
              key={classMaster._id}
              classMaster={classMaster}
              indexNumber={index}
              classMasterIndex={classMasterIndex}
              setClassMasterIndex={setClassMasterIndex}
              participateData={participateData}
              setParticipateData={setParticipateData}
              setClickClass={setClickClass}
              status="participate"
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ParticipativeEventForm;
