import React from "react";
import style from "./CreateSeminar.module.css";
import { useTranslation } from "react-i18next";
// import SelectOptions from "./SelectOptions";
import { imageShowUrl2 } from "../../../../../../services/BaseUrl";
import { checkPrevDate } from "../../../../../../Functions/timeComparison/prevTimeComparision";
import DisabledButton from "../../../../../../Custom/Button/DisabledButton";
import LoaderButton from "../../../../../../Loader/LoaderButton";
import { InputDateWithoutIcon } from "../../../../../../Custom/Input/InputDateField";
import { useAllDepartment } from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { TextInput } from "../../../../../../Authentication/Auth_New_Flow/InputWithoutIcon/InputWithoutIcon";
import SelectDept from "../Events/SelectDept/SelectDept";
import { useState } from "react";
import {
  useCreateSeminar,
  useGetOneSeminarDetail,
  useSeminarEdit,
} from "../../../../../../hooks/member_tab/event-api";
import { useFileUpload } from "../../../../../../hooks/authentication-api";
import QLoader from "../../../../../../Loader/QLoader";
import { FileNotUpload } from "../../../../../../validation/Snackbar";
import Tabs from "./Tabs/Tabs";
import moment from "moment";

function CreateSeminar({
  insId,
  sid,
  eid,
  onRefetchWhenEventCreate,
  onRefetchWhenEventEdited,
  deptId,
  smid,
  setViewStatus,
  eventMgtRefetch,
}) {
  const { t } = useTranslation();
  const [createNewSeminar] = useCreateSeminar();
  const [seminarEdit] = useSeminarEdit();
  const [clickDept, setClickDept] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [classMasterIndex, setClassMasterIndex] = useState(null);
  const { allDepartment, allDepartmentRefetch } = useAllDepartment({
    id: insId,
    skip: !insId,
  });
  const { getOneSeminarDetail, getOneSeminarDetailRefetch } =
    useGetOneSeminarDetail({
      smid: smid,
      skip: !smid,
    });
  const [dateInput, setDateInput] = useState(
    getOneSeminarDetail?.one_seminar?.seminar_date &&
      getOneSeminarDetail?.one_seminar?.seminar_date?.split("T")[0]
  );
  const [activeIndex, setActiveIndex] = useState(
    getOneSeminarDetail?.one_seminar?.seminar_mode === "Online" ? 1 : 0
  );
  const departments = getOneSeminarDetail?.one_seminar?.for_department?.map(
    function (dept) {
      return dept?._id;
    }
  );
  const [seminarData, setSeminarData] = useState({
    seminar_name: getOneSeminarDetail?.one_seminar?.seminar_name
      ? getOneSeminarDetail?.one_seminar?.seminar_name
      : "",
    seminar_guest: getOneSeminarDetail?.one_seminar?.seminar_guest
      ? getOneSeminarDetail?.one_seminar?.seminar_guest
      : "",
    seminar_date: getOneSeminarDetail?.one_seminar?.seminar_date
      ? getOneSeminarDetail?.one_seminar?.seminar_date?.split("T")[0]
      : "",
    seminar_time: getOneSeminarDetail?.one_seminar?.seminar_time
      ? getOneSeminarDetail?.one_seminar?.seminar_time
          ?.split("T")[1]
          ?.substring(0, 5)
      : "",
    date: getOneSeminarDetail?.one_seminar?.seminar_date
      ? getOneSeminarDetail?.one_seminar?.seminar_date?.split("T")[0]
      : "",
    time: getOneSeminarDetail?.one_seminar?.seminar_time
      ? getOneSeminarDetail?.one_seminar?.seminar_time
          ?.split("T")[1]
          ?.substring(0, 5)
      : "",
    seminar_place: getOneSeminarDetail?.one_seminar?.seminar_place
      ? getOneSeminarDetail?.one_seminar?.seminar_place
      : "",
    seminar_joining_link: getOneSeminarDetail?.one_seminar?.seminar_joining_link
      ? getOneSeminarDetail?.one_seminar?.seminar_joining_link
      : "",
    seminar_mode: getOneSeminarDetail?.one_seminar?.seminar_mode
      ? getOneSeminarDetail?.one_seminar?.seminar_mode
      : "Offline",
    seminar_description: getOneSeminarDetail?.one_seminar?.seminar_description
      ? getOneSeminarDetail?.one_seminar?.seminar_description
      : "",
    seminar_banner: getOneSeminarDetail?.one_seminar?.seminar_banner
      ? getOneSeminarDetail?.one_seminar?.seminar_banner
      : "",
    delete_pic: getOneSeminarDetail?.one_seminar?.seminar_banner
      ? getOneSeminarDetail?.one_seminar?.seminar_banner
      : "",
    banner_name: getOneSeminarDetail?.one_seminar?.seminar_banner
      ? "Chosen"
      : "",
    depart: deptId
      ? [`${deptId}`]
      : getOneSeminarDetail?.one_seminar?.for_department?.length > 0
      ? departments
      : [],
    deletedepart: deptId
      ? [`${deptId}`]
      : getOneSeminarDetail?.one_seminar?.for_department?.length > 0
      ? departments
      : [],
    new_depart: deptId
      ? [`${deptId}`]
      : getOneSeminarDetail?.one_seminar?.for_department?.length > 0
      ? departments
      : [],
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });

  const onDateFunction = (val) => {
    const dobCorrect = checkPrevDate(val);
    console.info(val, dobCorrect[0]);
    if (dobCorrect[0]) {
      setDateInput(dobCorrect[1]);
      setSeminarData({
        ...seminarData,
        seminar_date: dobCorrect[1],
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
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    }).then((res) => {
      setSeminarData({
        ...seminarData,
        seminar_banner: res.data?.imageKey,
        banner_name: e.target.files[0].name,
      });
      setDisabled((pre) => !pre);
    });
  };
  const handleCreateEvent = () => {
    setDisabled(true);

    if (getOneSeminarDetail) {
      seminarEdit({
        smid: smid,
        seminarData: {
          seminar_name: seminarData.seminar_name,
          seminar_guest: seminarData.seminar_guest,
          date: seminarData.date,
          time: seminarData.time,
          seminar_place: seminarData.seminar_place,
          seminar_joining_link: seminarData.seminar_joining_link,
          seminar_mode: seminarData.seminar_mode,
          seminar_description: seminarData.seminar_description,
          seminar_banner: seminarData.seminar_banner,
          delete_pic: seminarData.delete_pic,
          deletedepart: seminarData.deletedepart,
          new_depart: seminarData.new_depart,
        },
      })
        .then((res) => {
          getOneSeminarDetailRefetch();
          eventMgtRefetch();
          setDisabled(false);
          setSeminarData({
            ...seminarData,
            seminar_name: getOneSeminarDetail?.one_seminar?.seminar_name
              ? getOneSeminarDetail?.one_seminar?.seminar_name
              : "",
            seminar_guest: getOneSeminarDetail?.one_seminar?.seminar_guest
              ? getOneSeminarDetail?.one_seminar?.seminar_guest
              : "",
            seminar_date: getOneSeminarDetail?.one_seminar?.seminar_date
              ? moment(getOneSeminarDetail?.one_seminar?.seminar_date).format(
                  "Do MMM YYYY"
                )
              : "",
            seminar_time: getOneSeminarDetail?.one_seminar?.seminar_time
              ? moment(getOneSeminarDetail?.one_seminar?.seminar_time).format(
                  "hh:mm"
                )
              : "",
            date: getOneSeminarDetail?.one_seminar?.seminar_date
              ? getOneSeminarDetail?.one_seminar?.seminar_date?.split("T")[0]
              : "",
            time: getOneSeminarDetail?.one_seminar?.seminar_time
              ? moment(getOneSeminarDetail?.one_seminar?.seminar_time).format(
                  "hh:mm"
                )
              : "",
            seminar_place: getOneSeminarDetail?.one_seminar?.seminar_place
              ? getOneSeminarDetail?.one_seminar?.seminar_place
              : "",
            seminar_joining_link: getOneSeminarDetail?.one_seminar
              ?.seminar_joining_link
              ? getOneSeminarDetail?.one_seminar?.seminar_joining_link
              : "",
            seminar_mode: getOneSeminarDetail?.one_seminar?.seminar_mode
              ? getOneSeminarDetail?.one_seminar?.seminar_mode
              : "Offline",
            seminar_description: getOneSeminarDetail?.one_seminar
              ?.seminar_description
              ? getOneSeminarDetail?.one_seminar?.seminar_description
              : "",
            seminar_banner: getOneSeminarDetail?.one_seminar?.seminar_banner
              ? getOneSeminarDetail?.one_seminar?.seminar_banner
              : "",
            banner_name: getOneSeminarDetail?.one_seminar?.seminar_banner
              ? "Chosen"
              : "",
            delete_pic: getOneSeminarDetail?.one_seminar?.seminar_banner
              ? getOneSeminarDetail?.one_seminar?.seminar_banner
              : "",
            depart: deptId
              ? [`${deptId}`]
              : getOneSeminarDetail?.one_seminar?.for_department?.length > 0
              ? departments
              : [],
            deletedepart: deptId
              ? [`${deptId}`]
              : getOneSeminarDetail?.one_seminar?.for_department?.length > 0
              ? departments
              : [],
            new_depart: deptId
              ? [`${deptId}`]
              : getOneSeminarDetail?.one_seminar?.for_department?.length > 0
              ? departments
              : [],
          });
          setDateInput(
            getOneSeminarDetail?.one_seminar?.seminar_date &&
              moment(getOneSeminarDetail?.one_seminar?.seminar_date).format(
                "Do MMM YYYY"
              )
          );
          onRefetchWhenEventCreate();
          setViewStatus("");
        })
        .catch((err) => {
          setDisabled(false);
        });
    } else {
      createNewSeminar({
        eid: eid,
        seminarData: seminarData,
      })
        .then((res) => {
          console.info(res.data);
          if (smid) {
            getOneSeminarDetailRefetch();
          }
          setDisabled(false);
          setSeminarData({
            ...seminarData,
            seminar_name: getOneSeminarDetail?.one_seminar?.seminar_name
              ? getOneSeminarDetail?.one_seminar?.seminar_name
              : "",
            seminar_guest: getOneSeminarDetail?.one_seminar?.seminar_guest
              ? getOneSeminarDetail?.one_seminar?.seminar_guest
              : "",
            seminar_date: getOneSeminarDetail?.one_seminar?.seminar_date
              ? moment(getOneSeminarDetail?.one_seminar?.seminar_date).format(
                  "Do MMM YYYY"
                )
              : "",
            seminar_time: getOneSeminarDetail?.one_seminar?.seminar_time
              ? moment(getOneSeminarDetail?.one_seminar?.seminar_time).format(
                  "hh:mm"
                )
              : "",
            date: getOneSeminarDetail?.one_seminar?.seminar_date
              ? getOneSeminarDetail?.one_seminar?.seminar_date?.split("T")[0]
              : "",
            time: getOneSeminarDetail?.one_seminar?.seminar_time
              ? moment(getOneSeminarDetail?.one_seminar?.seminar_time).format(
                  "hh:mm"
                )
              : "",
            seminar_place: getOneSeminarDetail?.one_seminar?.seminar_place
              ? getOneSeminarDetail?.one_seminar?.seminar_place
              : "",
            seminar_joining_link: getOneSeminarDetail?.one_seminar
              ?.seminar_joining_link
              ? getOneSeminarDetail?.one_seminar?.seminar_joining_link
              : "",
            seminar_mode: getOneSeminarDetail?.one_seminar?.seminar_mode
              ? getOneSeminarDetail?.one_seminar?.seminar_mode
              : "Offline",
            seminar_description: getOneSeminarDetail?.one_seminar
              ?.seminar_description
              ? getOneSeminarDetail?.one_seminar?.seminar_description
              : "",
            seminar_banner: getOneSeminarDetail?.one_seminar?.seminar_banner
              ? getOneSeminarDetail?.one_seminar?.seminar_banner
              : "",
            banner_name: getOneSeminarDetail?.one_seminar?.seminar_banner
              ? "Chosen"
              : "",
            delete_pic: getOneSeminarDetail?.one_seminar?.seminar_banner
              ? getOneSeminarDetail?.one_seminar?.seminar_banner
              : "",
            depart: deptId
              ? [`${deptId}`]
              : getOneSeminarDetail?.one_seminar?.for_department?.length > 0
              ? departments
              : [],
            deletedepart: deptId
              ? [`${deptId}`]
              : getOneSeminarDetail?.one_seminar?.for_department?.length > 0
              ? departments
              : [],
            new_depart: deptId
              ? [`${deptId}`]
              : getOneSeminarDetail?.one_seminar?.for_department?.length > 0
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
            {t("create_seminar")}
          </div>
          <div className={style.peventleftbody}>
            <Tabs
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              seminarData={seminarData}
              setSeminarData={setSeminarData}
            />
            {!deptId && (
              <div className={style.peventinputContainer}>
                <div
                  className={style.item}
                  onClick={() => setClickDept((clickDept) => !clickDept)}
                >
                  <div className={style.select}>
                    {seminarData.depart?.length > 1 ? (
                      <p>
                        {seminarData.depart?.length} {t("departments")}
                      </p>
                    ) : seminarData.depart?.length === 1 ? (
                      <p>
                        {seminarData.depart?.length} {t("department")}
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
                label={t("seminar_name")}
                placeholder={t("select_dept_eg")}
                value={seminarData.seminar_name}
                handleChange={(e) =>
                  setSeminarData({
                    ...seminarData,
                    seminar_name: e.target.value,
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
                value={seminarData.seminar_guest}
                handleChange={(e) =>
                  setSeminarData({
                    ...seminarData,
                    seminar_guest: e.target.value,
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
                placeholder={t("seminar_date")}
                dateInput={dateInput}
                setDateInput={onDateFunction}
              />
            </div>
            <div className={style.peventinputContainer}>
              <TextInput
                type="time"
                label={t("time")}
                placeholder={t("select_seminar_timing")}
                value={seminarData.seminar_time}
                handleChange={(e) =>
                  setSeminarData({
                    ...seminarData,
                    seminar_time: e.target.value,
                    time: e.target.value,
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>
            {seminarData.seminar_mode === "Offline" && (
              <div className={style.peventinputContainer}>
                <TextInput
                  type="text"
                  label={t("seminar_place")}
                  placeholder={t("select_place_of_seminar")}
                  value={seminarData.seminar_place}
                  handleChange={(e) =>
                    setSeminarData({
                      ...seminarData,
                      seminar_place: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                  }}
                />
              </div>
            )}

            {seminarData.seminar_mode === "Online" && (
              <div className={style.peventinputContainer}>
                <TextInput
                  type="text"
                  label={t("provide_link")}
                  placeholder={t("copy_paste_link")}
                  value={seminarData.seminar_joining_link}
                  handleChange={(e) =>
                    setSeminarData({
                      ...seminarData,
                      seminar_joining_link: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                  }}
                />
              </div>
            )}
            <div className={style.peventinputContainer}>
              <h6>{t("description_event")}</h6>
              <textarea
                className={style.pollTextarea}
                id="pollTextArea"
                type="text"
                required
                // maxlength="140"
                placeholder={t("description_please")}
                value={seminarData.seminar_description}
                onChange={(e) =>
                  setSeminarData({
                    ...seminarData,
                    seminar_description: e.target.value,
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
                <h6>{t("bvanner_poster")} </h6>
                <div className={style.fileinputflex}>
                  <label for="formFile" className={style.fileinputflexleft}>
                    <div className={style.fileinputflexleftdiv}>
                      {t("chose_file")}
                    </div>
                  </label>
                  <div
                    className={`${style.fileinputflexleft} ${style.fileinputflexright}`}
                  >
                    {seminarData.banner_name !== ""
                      ? seminarData.banner_name
                      : t("no_file_chosen")}
                  </div>
                </div>
              </div>
            </div>

            {seminarData.seminar_name !== "" &&
            seminarData.seminar_date !== "" &&
            seminarData.seminar_time !== "" &&
            seminarData.seminar_guest !== "" &&
            seminarData.seminar_mode !== "" &&
            seminarData.depart.length > 0 ? (
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
            {clickDept === true && seminarData.depart?.length ? (
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
              seminarData={seminarData}
              setSeminarData={setSeminarData}
              classMasterIndex={classMasterIndex}
              setClassMasterIndex={setClassMasterIndex}
              setClickDept={setClickDept}
              status="seminar"
            />
          ))}
        </div>
      )}
      {disabled && <QLoader />}
    </>
  );
}

export default CreateSeminar;
