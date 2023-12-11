import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../SeatingArrangement/SeatingArrangement.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInputView from "../../../../../../JoiningForm/Student/Form/JoinFormInputView";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useGetAllCopoAttainment } from "../../../../../../hooks/member_tab/subject-api";

const AddAttainmentInSubject = ({
  onBack,
  stationaryPoint,
  smid,
  subjectName,
  onGrabAttainment,
  createdBy,
}) => {
  const { t } = useTranslation();
  const [copo, setCopo] = useState([]);
  const [filled, setFilled] = useState("");
  const [subjectInfo, setSubjectInfo] = useState({
    totalMarks: "",
  });
  const { getAllCopoAttainment, getAllCopoAttainmentRefetch } =
    useGetAllCopoAttainment({
      data: {
        smid: smid,
        flow: "MARKING_COPO",
      },
      skip: !smid,
    });
  useEffect(() => {
    if (smid) getAllCopoAttainmentRefetch();
  }, [smid, getAllCopoAttainmentRefetch]);
  useEffect(() => {
    if (getAllCopoAttainment?.attainment) {
      let arr = [];
      for (let att of getAllCopoAttainment?.attainment) {
        arr.push({
          attainmentId: att?._id,
          attainment_name: att?.attainment_name,
          marks: "",
        });
      }
      setCopo(arr);
    }
  }, [getAllCopoAttainment?.attainment]);
  const onInputChange = (e, ids) => {
    const inputarr = [...copo];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inputarr[inp]?.attainmentId === ids) {
        inputarr[inp].marks = +e.target.value;
      }
    }
    setCopo(inputarr);
  };

  const onAddCopo = () => {
    let validateCo = copo;
    let freshCo = [];
    for (let co of validateCo) {
      if (co?.marks) {
        freshCo.push(co);
      }
    }
    if (createdBy === "SUBJECT_ASSIGNMENT") {
      if (!subjectInfo?.totalMarks) {
        setFilled({ totalMarks: "* required" });
      } else {
        onGrabAttainment({
          copo_list: freshCo,
          assignment_total_mark: subjectInfo.totalMarks,
        });
      }
    } else {
      onGrabAttainment(freshCo);
    }
  };
  const onInputChangeMarks = (e) => {
    setSubjectInfo((prev) => ({
      ...prev,
      totalMarks: +e.target.value,
    }));
  };
  return (
    <div
      className={style.seating_modal}
      style={
        createdBy === "SUBJECT_ASSIGNMENT"
          ? {
              width: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
            }
          : {
              color: "inherit",
            }
      }
    >
      {createdBy === "SUBJECT_ASSIGNMENT" ? null : (
        <>
          <section
            className={style.seating_modal_title_left}
            style={{
              position: "relative",
            }}
          >
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onBack}
              alt="back"
            />
            <h6>{t("copo_details")}</h6>
            <button className={style.next_btn} title="Next" onClick={onAddCopo}>
              {t("next")}
            </button>
          </section>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          />
        </>
      )}

      {createdBy === "SUBJECT_TEACHER" ||
      createdBy === "SUBJECT_ASSIGNMENT" ? null : (
        <JoinFormInputView labelText={t("subject_exam")} value={subjectName} />
      )}
      {createdBy === "SUBJECT_ASSIGNMENT" ? (
        <JoinFormInput
          labelText={t("marks")}
          placeholder={t("enter_the_marks")}
          name={"totalMarks"}
          value={subjectInfo?.totalMarks}
          type={"number"}
          onChange={onInputChangeMarks}
          errorShow={filled["totalMarks"]}
        />
      ) : (
        <JoinFormInputView
          labelText={`${t("marks")} : `}
          value={stationaryPoint?.showSubject?.totalMarks}
        />
      )}

      {copo?.map((co, index) => (
        <JoinFormInput
          key={index}
          labelText={co["attainment_name"]}
          placeholder={t("enter_the_marks")}
          name={co["attainmentId"]}
          value={co["marks"]}
          type={"number"}
          onChange={(e) => onInputChange(e, co["attainmentId"])}
        />
      ))}
      {createdBy === "SUBJECT_ASSIGNMENT" ? (
        <div
          className={`${style.assignment_btn} ${style.assignment_btn_active}`}
          onClick={onAddCopo}
        >
          {t("create_assignment")}
        </div>
      ) : null}
    </div>
  );
};

export default AddAttainmentInSubject;
