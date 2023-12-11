import React, { useEffect, useState } from "react";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
import style from "../../FinanceManager/FeesStructure/FeesStructure.module.css";
import styleOther from "../../PromoteDepartment/PromoteDepartment.module.css";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../../Loader/QLoader";
import {
  useAdmissionReminder,
  useGetAllDepartment,
  useGetOsReminderStudentList,
} from "../../../../../hooks/member_tab/admission-api";
import {
  useOneDepartmentAllClassMaster,
  useOneViewDepartment,
} from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import CustomSelectDepartment from "../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import OsReminderStudentCard from "../../PromoteDepartment/Promote/OsReminderStudentCard";
import EmptyInfo from "../../../../../Loader/EmptyInfo";

const RemainingNotify = ({ onClose, onRefetch, aid, instituteId }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [admissionReminder] = useAdmissionReminder();
  const [isNext, setIsNext] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [studentListCopy, setStudentListCopy] = useState([]);
  const [sendNotify, setSendNotify] = useState({
    alarm_mode: "APP_NOTIFICATION",
    content: "",
  });
  const [filterData, setFilterData] = useState({
    depart: "",
    batch: "",
    master: [],
    batch_status: "",
    all_depart: "",
  });
  const [selectedId, setSelectedId] = useState([]);
  const [isAllSelect, setIsAllSelect] = useState(false);

  const [getOsReminderStudentList] = useGetOsReminderStudentList();
  const { allDepartmentList, allDepartmentListRefetch } = useGetAllDepartment({
    aid: aid,
    skip: !aid,
  });
  const { allClassMaster, allClassMasterRefetch } =
    useOneDepartmentAllClassMaster({
      data: {
        id: instituteId,
        did: filterData.depart,
      },
      skip: filterData.all_depart !== "All" ? !filterData.depart : true,
    });
  const { oneDepartment, oneDepartmentRefetch } = useOneViewDepartment({
    did: filterData.depart,
    skip: filterData.all_depart !== "All" ? !filterData.depart : true,
  });

  useEffect(() => {
    if (aid) {
      allDepartmentListRefetch();
    }
  }, [aid, allDepartmentListRefetch]);

  useEffect(() => {
    if (filterData.depart && filterData.all_depart !== "All") {
      allClassMasterRefetch();
    }
  }, [filterData.depart, allClassMasterRefetch]);

  useEffect(() => {
    if (filterData.depart && filterData.all_depart !== "All") {
      oneDepartmentRefetch();
    }
  }, [filterData.depart, oneDepartmentRefetch]);

  const onAction = () => {
    if (aid && sendNotify.alarm_mode && selectedId?.length > 0) {
      setDisabled((pre) => !pre);
      admissionReminder({
        aid: aid,
        alarm_mode: sendNotify.alarm_mode,
        content: sendNotify.content,
        reminderData: {
          ...filterData,
          all_arr: selectedId,
        },
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };

  const onDepartmentSelect = (val) => {
    if (val === "All") {
      setFilterData((prev) => ({
        ...prev,
        depart: "",
        all_depart: "ALL",
      }));
    } else {
      setFilterData((prev) => ({
        ...prev,
        depart: val,
        all_depart: "PARTICULAR",
      }));
    }
  };
  const onBatchSelect = (val) => {
    if (val === "All") {
      setFilterData((prev) => ({
        ...prev,
        batch: "",
        batch_status: "ALL_BATCH",
      }));
    } else {
      setFilterData((prev) => ({
        ...prev,
        batch: val,
        batch_status: "PARTICULAR_BATCH",
      }));
    }
  };
  const onMasterSelect = (val) => {
    setFilterData((prev) => ({
      ...prev,
      master: [val],
    }));
  };

  const onNext = () => {
    if (aid) {
      setDisabled((pre) => !pre);
      getOsReminderStudentList({
        aid: aid,
        pendingData: filterData,
      })
        .then((res) => {
          setStudentList(res?.data?.all_student);
          setStudentListCopy(res?.data?.all_student);
          setDisabled((pre) => !pre);
          setIsNext("LIST");
        })
        .catch({});
    }
  };

  const onSelectStudent = (val) => {
    if (selectedId?.includes(val)) {
      setSelectedId((pre) => pre?.filter((id) => id !== val));
    } else {
      setSelectedId((prev) => [...prev, val]);
    }
  };
  const onRemoveAll = () => {
    setSelectedId([]);
    setIsAllSelect(false);
  };
  const onSelectAll = () => {
    let a = [];
    for (let stu of studentList) {
      a.push(stu?._id);
    }
    setSelectedId(a);
    setIsAllSelect(true);
  };
  const onSearchEvent = (e) => {
    if (e.target.value) {
      let searchData = getStudentSearch(studentListCopy, e.target.value);
      setStudentList(() => searchData);
    } else {
      setStudentList(() => studentListCopy);
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
          minHeight: "10rem",
          maxHeight: "35rem",
          overflowX: "hidden",
          overflowY: "auto",
          scrollBehavior: "smooth",
        }}
      >
        {isNext === "SEND" ? (
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
              {t("Notify_about_Outstanding_Dues")}
            </h6>

            <BorderBottom
              customStyle={{
                width: "100%",
                marginTop: "0.7rem",
                marginBottom: "1rem",
              }}
            />

            <section
              className={style.notify_container}
              onClick={() =>
                setSendNotify((prev) => ({
                  ...prev,
                  alarm_mode: "APP_NOTIFICATION",
                }))
              }
            >
              <img
                src={
                  sendNotify.alarm_mode === "APP_NOTIFICATION"
                    ? "/images/department/radio-blue-icon.svg"
                    : "/images/department/radio-gray-icon.svg"
                }
                alt="icon"
              />
              <div className={style.notify_text}>
                <h6>{t("Notify_with_In_app_Notification")}</h6>
                <p>{t("Notify_with_In_app_Notification_note")}</p>
              </div>
            </section>
            <section
              className={style.notify_container}
              onClick={() =>
                setSendNotify((prev) => ({
                  ...prev,
                  alarm_mode: "EMAIL_NOTIFICATION",
                }))
              }
            >
              <img
                src={
                  sendNotify.alarm_mode === "EMAIL_NOTIFICATION"
                    ? "/images/department/radio-blue-icon.svg"
                    : "/images/department/radio-gray-icon.svg"
                }
                alt="icon"
              />
              <div className={style.notify_text}>
                <h6>{t("Notify_On_Email_and_SMS")}</h6>
                <p>{t("Notify_On_Email_and_SMS_note")}</p>
              </div>
            </section>
            {sendNotify.alarm_mode === "EMAIL_NOTIFICATION" && (
              <JoinFormTextArea
                labelText={t("email_content")}
                placeholder={t("email_content_placeholder")}
                name={"content"}
                value={sendNotify.content}
                type={"text"}
                onChange={(e) =>
                  setSendNotify((prev) => ({
                    ...prev,
                    content: e.target.value,
                  }))
                }
              />
            )}
            <button
              onClick={onAction}
              className={style.fee_middle_confirm_button}
              style={{
                marginTop: "4rem",
              }}
            >
              {t("confirm")}
            </button>
          </section>
        ) : isNext === "LIST" ? (
          <>
            <div className={styleOther.select_header}>
              <h6>
                {selectedId?.length > 0 ? `${selectedId?.length} ` : ""}
                {t("select_student")}
              </h6>
              <div>
                {isAllSelect ? (
                  <button
                    className={styleOther.select_all_btn}
                    title="Remove All Student"
                    onClick={onRemoveAll}
                    style={{
                      marginRight: "0.7rem",
                    }}
                  >
                    {t("remove_all")}
                  </button>
                ) : (
                  <button
                    className={styleOther.select_all_btn}
                    title="Select All Student"
                    onClick={onSelectAll}
                    style={{
                      marginRight: "0.7rem",
                    }}
                  >
                    {t("select_all")}
                  </button>
                )}

                <button
                  className={styleOther.promote_all_btn}
                  onClick={() =>
                    selectedId?.length > 0 ? setIsNext("SEND") : null
                  }
                >
                  {t("next")}
                </button>
              </div>
            </div>
            <BorderBottom
              customStyle={{
                width: "100%",
                marginTop: "0.5rem",
              }}
            />
            <section className={style.search_container}>
              <div className={style.search_container_text}>
                <img
                  className={style.searchIcon}
                  alt="search icon"
                  src="/images/search-dash-icon.svg"
                />
                <input
                  type="text"
                  placeholder={t("search-label")}
                  onChange={onSearchEvent}
                />
              </div>
            </section>
            {studentList?.length < 1 && (
              <EmptyInfo
                customStyleContainer={{
                  marginTop: "9rem",
                }}
                title={"No student found."}
              />
            )}
            {studentList?.map((stu, index) => (
              <OsReminderStudentCard
                key={index}
                stu={stu}
                selectedId={selectedId}
                onSelectStudent={onSelectStudent}
              />
            ))}
          </>
        ) : (
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
              {t("apply_filter")}
            </h6>

            <BorderBottom
              customStyle={{
                width: "100%",
                marginTop: "0.7rem",
                marginBottom: "1rem",
              }}
            />
            <CustomSelectDepartment
              selectLabel={t("select_department")}
              selectedValue={t("all_select_particular_department")}
              options={
                allDepartmentList?.allDB
                  ? ["All", ...allDepartmentList?.allDB]
                  : ["All"]
              }
              onClick={onDepartmentSelect}
            />

            <CustomSelectDepartment
              selectLabel={
                // filterData.all_depart === "All"
                //   ? t("select_current_batch")
                //   :
                t("select_batch_optional")
              }
              selectedValue={
                // filterData.all_depart === "All"
                //   ?
                t("select_pref")
                // : t("all_time_select_batch")
              }
              options={
                filterData.all_depart === "ALL"
                  ? ["All"]
                  : oneDepartment?.department?.batches
                  ? [...oneDepartment?.department?.batches]
                  : []
              }
              onClick={onBatchSelect}
            />

            {filterData.all_depart === "ALL" ? (
              ""
            ) : (
              <CustomSelectDepartment
                selectLabel={t("select_standard_year")}
                selectedValue={t("select_standard_year_placeholder")}
                options={
                  allClassMaster?.classMaster
                    ? [...allClassMaster?.classMaster]
                    : []
                }
                onClick={onMasterSelect}
              />
            )}
            <button
              onClick={onNext}
              className={style.fee_middle_confirm_button}
              style={{
                marginTop: "4rem",
              }}
            >
              {t("next")}
            </button>
          </section>
        )}
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default RemainingNotify;

const getStudentSearch = (list = [], search) => {
  return list.filter((stu) => {
    let name =
      stu?.studentFirstName ??
      "" + " " + stu?.studentMiddleName ??
      "" + " " + stu?.studentLastName ??
      "";
    if (
      name?.toLowerCase()?.includes(search?.toLowerCase()) ||
      stu?.studentGRNO?.toLowerCase()?.includes(search?.toLowerCase())
    ) {
      return stu;
    }
    return null;
  });
};
