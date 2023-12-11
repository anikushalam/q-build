import React from "react";
import style from "./CreateEvent.module.css";

import { useTranslation } from "react-i18next";
// import SelectOptions from "./SelectOptions";
import { imageShowUrl2 } from "../../../../../../services/BaseUrl";
import { checkPrevDate } from "../../../../../../Functions/timeComparison/prevTimeComparision";
import DisabledButton from "../../../../../../Custom/Button/DisabledButton";
import LoaderButton from "../../../../../../Loader/LoaderButton";
import { InputDateWithoutIcon } from "../../../../../../Custom/Input/InputDateField";
import { useAllDepartment } from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { TextInput } from "../../../../../../Authentication/Auth_New_Flow/InputWithoutIcon/InputWithoutIcon";
import SelectDept from "./SelectDept/SelectDept";
import { useState } from "react";
import {
  useCreateEvent,
  useEventEdit,
  useGetOneEventDetail,
} from "../../../../../../hooks/member_tab/event-api";
import { useFileUpload } from "../../../../../../hooks/authentication-api";
import QLoader from "../../../../../../Loader/QLoader";
import { FileNotUpload } from "../../../../../../validation/Snackbar";
import moment from "moment";

function CreateEvent({
  insId,
  sid,
  eid,
  onRefetchWhenEventCreate,
  eventMgtRefetch,
  onRefetchWhenEventEdited,
  deptId,
  setViewStatus,
  evid,
}) {
  const { t } = useTranslation();
  const [createNewEvent] = useCreateEvent();
  const [eventEdit] = useEventEdit();
  const [clickDept, setClickDept] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [classMasterIndex, setClassMasterIndex] = useState(null);
  const { allDepartment, allDepartmentRefetch } = useAllDepartment({
    id: insId,
    skip: !insId,
  });
  const { getOneEventDetail, getOneEventDetailRefetch } = useGetOneEventDetail({
    evid: evid,
    skip: !evid,
  });
  const departments = getOneEventDetail?.one_event?.for_department?.map(
    function (dept) {
      return dept?._id;
    }
  );
  const [dateInput, setDateInput] = useState(
    getOneEventDetail?.one_event?.event_date &&
      getOneEventDetail?.one_event?.event_date?.split("T")[0]
  );
  const [eventData, setEventData] = useState({
    event_name: getOneEventDetail?.one_event?.event_name
      ? getOneEventDetail?.one_event?.event_name
      : "",
    event_guest: getOneEventDetail?.one_event?.event_guest
      ? getOneEventDetail?.one_event?.event_guest
      : "",
    event_date: getOneEventDetail?.one_event?.event_date?.split("T")[0]
      ? getOneEventDetail?.one_event?.event_date?.split("T")[0]
      : "",
    date: getOneEventDetail?.one_event ? getOneEventDetail?.one_event : "",
    event_time: getOneEventDetail?.one_event?.event_time
      ? getOneEventDetail?.one_event?.event_time?.split("T")[1]?.substring(0, 5)
      : "",
    time: getOneEventDetail?.one_event?.event_time
      ? getOneEventDetail?.one_event?.event_time?.split("T")[1]?.substring(0, 5)
      : "",
    event_place: getOneEventDetail?.one_event?.event_place
      ? getOneEventDetail?.one_event?.event_place
      : "",
    event_description: getOneEventDetail?.one_event?.event_description
      ? getOneEventDetail?.one_event?.event_description
      : "",
    event_banner: getOneEventDetail?.one_event?.event_banner
      ? getOneEventDetail?.one_event?.event_banner
      : "",
    delete_pic: getOneEventDetail?.one_event?.event_banner
      ? getOneEventDetail?.one_event?.event_banner
      : "",
    banner_name: getOneEventDetail?.one_event?.event_banner ? "Chosen" : "",
    depart: deptId
      ? [`${deptId}`]
      : getOneEventDetail?.one_event?.for_department?.length > 0
      ? departments
      : [],
    new_depart: deptId
      ? [`${deptId}`]
      : getOneEventDetail?.one_event?.for_department?.length > 0
      ? departments
      : [],
    deletedepart: deptId
      ? [`${deptId}`]
      : getOneEventDetail?.one_event?.for_department?.length > 0
      ? departments
      : [],
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });

  const onDateFunction = (val) => {
    const dobCorrect = checkPrevDate(val);

    if (dobCorrect[0]) {
      setDateInput(dobCorrect[1]);
      setEventData({
        ...eventData,
        event_date: dobCorrect[1],
        date: dobCorrect[1],
      });
    } else {
      setNotificationState({
        msg: "You cannot select upcoming date",
        run: true,
      });
    }
  };

  const textArea = document.querySelector("textarea");
  const [oneFileUpload] = useFileUpload();
  textArea?.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textArea.style.height = `${scHeight}px`;
  });

  const handleChangeAttachment = (e) => {
    setDisabled(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    }).then((res) => {
      setEventData({
        ...eventData,
        event_banner: res.data?.imageKey,
        banner_name: e.target.files[0].name,
      });
      setDisabled(false);
    });
  };
  const handleCreateEvent = () => {
    setDisabled(true);

    if (getOneEventDetail) {
      eventEdit({
        eid: evid,
        eventData: {
          event_name: eventData.event_name,
          event_guest: eventData.event_guest,
          date: eventData.date,
          time: eventData.time,
          event_place: eventData.event_place,
          event_description: eventData.event_description,
          event_banner: eventData.event_banner,
          delete_pic: eventData.delete_pic,
          deletedepart: eventData.deletedepart,
          new_depart: eventData.new_depart,
        },
      })
        .then((res) => {
          setDisabled(false);

          setEventData({
            ...eventData,
            event_name: getOneEventDetail?.one_event?.event_name
              ? getOneEventDetail?.one_event?.event_name
              : "",
            event_guest: getOneEventDetail?.one_event?.event_guest
              ? getOneEventDetail?.one_event?.event_guest
              : "",
            event_date: getOneEventDetail?.one_event?.event_date?.split("T")[0]
              ? getOneEventDetail?.one_event?.event_date?.split("T")[0]
              : "",
            date: getOneEventDetail?.one_event
              ? getOneEventDetail?.one_event
              : "",
            event_time: getOneEventDetail?.one_event?.event_time
              ? moment(getOneEventDetail?.one_event?.event_time).format("hh:mm")
              : "",
            time: getOneEventDetail?.one_event?.event_time
              ? moment(getOneEventDetail?.one_event?.event_time).format("hh:mm")
              : "",
            event_place: getOneEventDetail?.one_event?.event_place
              ? getOneEventDetail?.one_event?.event_place
              : "",
            event_description: getOneEventDetail?.one_event?.event_description
              ? getOneEventDetail?.one_event?.event_description
              : "",
            event_banner: getOneEventDetail?.one_event?.event_banner
              ? getOneEventDetail?.one_event?.event_banner
              : "",
            delete_pic: getOneEventDetail?.one_event?.event_banner
              ? getOneEventDetail?.one_event?.event_banner
              : "",
            banner_name: getOneEventDetail?.one_event?.event_banner
              ? "Chosen"
              : "",
            depart: deptId
              ? [`${deptId}`]
              : getOneEventDetail?.one_event?.for_department?.length > 0
              ? departments
              : [],
            new_depart: deptId
              ? [`${deptId}`]
              : getOneEventDetail?.one_event?.for_department?.length > 0
              ? departments
              : [],
            deletedepart: deptId
              ? [`${deptId}`]
              : getOneEventDetail?.one_event?.for_department?.length > 0
              ? departments
              : [],
          });
          getOneEventDetailRefetch();
          eventMgtRefetch();
          setDateInput(
            getOneEventDetail?.one_event?.event_date &&
              getOneEventDetail?.one_event?.event_date?.split("T")[0]
          );

          onRefetchWhenEventCreate();
          setViewStatus("");
        })
        .catch((err) => {
          setDisabled(false);
        });
    } else {
      createNewEvent({
        eid: eid,
        eventData: eventData,
      })
        .then((res) => {
          setDisabled(false);

          setEventData({
            ...eventData,
            event_name: getOneEventDetail?.one_event?.event_name
              ? getOneEventDetail?.one_event?.event_name
              : "",
            event_guest: getOneEventDetail?.one_event?.event_guest
              ? getOneEventDetail?.one_event?.event_guest
              : "",
            event_date: getOneEventDetail?.one_event?.event_date?.split("T")[0]
              ? getOneEventDetail?.one_event?.event_date?.split("T")[0]
              : "",
            date: getOneEventDetail?.one_event
              ? getOneEventDetail?.one_event
              : "",
            event_time: getOneEventDetail?.one_event?.event_time
              ? moment(getOneEventDetail?.one_event?.event_time).format("hh:mm")
              : "",
            time: getOneEventDetail?.one_event?.event_time
              ? moment(getOneEventDetail?.one_event?.event_time).format("hh:mm")
              : "",
            event_place: getOneEventDetail?.one_event?.event_place
              ? getOneEventDetail?.one_event?.event_place
              : "",
            event_description: getOneEventDetail?.one_event?.event_description
              ? getOneEventDetail?.one_event?.event_description
              : "",
            event_banner: getOneEventDetail?.one_event?.event_banner
              ? getOneEventDetail?.one_event?.event_banner
              : "",
            delete_pic: getOneEventDetail?.one_event?.event_banner
              ? getOneEventDetail?.one_event?.event_banner
              : "",
            banner_name: getOneEventDetail?.one_event?.event_banner
              ? "Chosen"
              : "",
            depart: deptId
              ? [`${deptId}`]
              : getOneEventDetail?.one_event?.for_department?.length > 0
              ? departments
              : [],
            new_depart: deptId
              ? [`${deptId}`]
              : getOneEventDetail?.one_event?.for_department?.length > 0
              ? departments
              : [],
            deletedepart: deptId
              ? [`${deptId}`]
              : getOneEventDetail?.one_event?.for_department?.length > 0
              ? departments
              : [],
          });
          setDateInput("");
          onRefetchWhenEventCreate();
        })
        .catch((err) => {
          setDisabled(false);
        });
    }

    // setNotificationState({
    //   msg: "Something went wrong",
    //   run: true,
    // });
  };
  // console.info(getOneEventDetail?.one_event);
  return (
    <>
      {!clickDept && (
        <div className={style.createEvent}>
          <div
            className={`${style.peventlefttop} ${style.peventlefttopflexleft}`}
          >
            <img
              src="/images/back.svg"
              alt="back"
              onClick={() => setViewStatus("")}
            />
            {getOneEventDetail?.one_event
              ? t("update_event")
              : t("create_new_event")}
          </div>
          <div className={style.peventleftbody}>
            {!deptId && (
              <div className={style.peventinputContainer}>
                <div
                  className={style.item}
                  onClick={() => setClickDept((clickDept) => !clickDept)}
                >
                  <div className={style.select}>
                    {eventData.depart?.length > 1 ? (
                      <p>
                        {eventData.depart?.length} {t("departments")}
                      </p>
                    ) : eventData.depart?.length === 1 ? (
                      <p>
                        {eventData.depart?.length} {t("department")}
                      </p>
                    ) : (
                      <p>{t("select_dept_")}</p>
                    )}
                    <img
                      className={style.selectclass}
                      src="/images/members/selectclass.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
            <div className={style.peventinputContainer}>
              <TextInput
                type="text"
                label={t("event_name_title")}
                placeholder={t("select_dept_eg")}
                value={eventData.event_name}
                handleChange={(e) =>
                  setEventData({
                    ...eventData,
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
              <TextInput
                type="text"
                label={t("guest_name")}
                placeholder={t("name_of_guest")}
                value={eventData.event_guest}
                handleChange={(e) =>
                  setEventData({
                    ...eventData,
                    event_guest: e.target.value,
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
                  bottom: "2rem",
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
                  bottom: "0.6rem",
                  height: "1rem",
                }}
                range={false}
                label={t("date")}
                placeholder={t("date_of_event")}
                dateInput={dateInput}
                setDateInput={onDateFunction}
              />
            </div>
            <div className={style.peventinputContainer}>
              <TextInput
                type="time"
                label={t("time")}
                placeholder={t("time_of_event")}
                value={eventData.event_time}
                handleChange={(e) =>
                  setEventData({
                    ...eventData,
                    event_time: e.target.value,
                    time: e.target.value,
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>
            <div className={style.peventinputContainer}>
              <TextInput
                type="text"
                label={t("place_of_event")}
                placeholder={t("plage_eg")}
                value={eventData.event_place}
                handleChange={(e) =>
                  setEventData({
                    ...eventData,
                    event_place: e.target.value,
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>

            <div className={style.peventinputContainer}>
              <h6>{t("description_event")}</h6>
              <textarea
                className={style.pollTextarea}
                id="pollTextArea"
                type="text"
                required
                // maxlength="140"
                placeholder={t("description_please")}
                value={eventData.event_description}
                onChange={(e) =>
                  setEventData({
                    ...eventData,
                    event_description: e.target.value,
                  })
                }
              />
            </div>

            <div className={style.switchcontainerflex}>
              <input
                class={style.upload}
                type="file"
                id="formFile"
                name="file"
                // accept="application/pdf"
                onChange={handleChangeAttachment}
              />
              <div className={style.fileinputflexContainer}>
                <h6>
                  {t("bvanner_poster")}{" "}
                  <span className={style.labelspan}>*</span>
                </h6>
                <div className={style.fileinputflex}>
                  <label for="formFile" className={style.fileinputflexleft}>
                    <div className={style.fileinputflexleftdiv}>
                      {t("chose_file")}
                    </div>
                  </label>
                  <div
                    className={`${style.fileinputflexleft} ${style.fileinputflexright}`}
                  >
                    {eventData.banner_name !== ""
                      ? eventData.banner_name
                      : t("no_file_chosen")}
                  </div>
                </div>
              </div>
            </div>

            {eventData.event_name !== "" &&
            eventData.event_date !== "" &&
            eventData.event_time !== "" &&
            eventData.event_place !== "" &&
            eventData.depart.length > 0 ? (
              <div
                className={style.button_main}
                style={{
                  marginTop: "2rem",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={handleCreateEvent}
              >
                <span>{t("save_entry")}</span>

                {/* {disabled && (
                  <div style={{ marginTop: "0.7vw" }}>
                    <LoaderButton />
                  </div>
                )} */}
              </div>
            ) : (
              <DisabledButton
                buttonText={t("save_entry")}
                customStyleButton={{ marginTop: "2rem", width: "100%" }}
              />
            )}

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
        </div>
      )}

      {clickDept && (
        <div className={style.createEvent}>
          <div className={`${style.peventlefttop} ${style.peventlefttopflex}`}>
            <div className={`${style.peventlefttopflexleft}`}>
              <img
                src="/images/back.svg"
                alt="back"
                onClick={() => setClickDept(false)}
              />
              {t("select_dept_")}
            </div>
            {clickDept === true && eventData.depart?.length ? (
              <div
                className={style.selectBtn}
                onClick={() => setClickDept(false)}
              >
                {t("select")}
              </div>
            ) : (
              ""
            )}
          </div>
          {allDepartment?.institute?.depart?.map((dept, index) => (
            <SelectDept
              indexNumber={index}
              dept={dept}
              key={dept._id}
              eventData={eventData}
              setEventData={setEventData}
              classMasterIndex={classMasterIndex}
              setClassMasterIndex={setClassMasterIndex}
              setClickDept={setClickDept}
            />
          ))}
        </div>
      )}
      {disabled && <QLoader />}
    </>
  );
}

export default CreateEvent;
