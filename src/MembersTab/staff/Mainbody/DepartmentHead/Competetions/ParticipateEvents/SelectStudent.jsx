import React from "react";
import style from "./ParticipateEvents.module.css";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useParticipateStudentEventList } from "../../../../../../hooks/member_tab/department-api";
import { useState } from "react";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

const MODAL_STYLES = {
  position: "absolute",
  left: "0",
  top: "2.5rem",
  zIndex: 10,
};

function SelectStudent({
  pid,
  open,
  onClose,
  setFormData,
  formData,
  status,
  customStyleOptions,
}) {
  const { t } = useTranslation();
  // --------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [studentList, setStudentList] = useState([]);
  const [state, setState] = useState(true);
  const [timeeOut, setTimeeOut] = useState(false);
  const positions = ["Winner", "Ist Runner", "IInd Runner"];
  const {
    participativeEventStudentList,
    participativeEventStudentListRefetch,
  } = useParticipateStudentEventList({
    data: {
      pid: pid,
      page: page,
      limit: 10,
    },
    skip: !pid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (page) participativeEventStudentListRefetch();
  }, [page, participativeEventStudentListRefetch]);

  useEffect(() => {
    if (participativeEventStudentList?.all_students)
      setStudentList([
        ...new Set([
          ...studentList,
          ...participativeEventStudentList?.all_students,
        ]),
      ]);
    if (participativeEventStudentList?.all_students?.length === 10)
      setState(true);
    else setState(false);
  }, [participativeEventStudentList?.all_students]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeOut(!timeeOut);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      {status === "student" && (
        <div
          style={customStyleOptions ? customStyleOptions : MODAL_STYLES}
          className={style.options}
        >
          {studentList?.length > 0 ? (
            studentList?.map((student, index) => (
              <div
                key={index}
                ref={ref}
                className={style.selectStudentItem}
                onClick={() => {
                  setFormData({
                    ...formData,
                    winner: student,
                  });
                  onClose();
                }}
              >
                <div className={style.imgcontainer}>
                  <img
                    src={
                      student?.studentProfilePhoto
                        ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt=""
                  />
                </div>
                <div className={style.issuedBookItemMidright}>
                  <h6>
                    {student?.studentFirstName}{" "}
                    {student?.studentMiddleName
                      ? student?.studentMiddleName
                      : " "}{" "}
                    {student?.studentLastName}
                  </h6>
                  <p>Gr No. {student?.studentGRNO}</p>
                </div>
              </div>
            ))
          ) : (
            <div className={style.moDataText}>{t("no_student_found")}</div>
          )}
        </div>
      )}

      {status === "runnerUp" && (
        <div
          style={customStyleOptions ? customStyleOptions : MODAL_STYLES}
          className={style.options}
        >
          {studentList?.length > 0 ? (
            studentList
              ?.filter((item) => {
                if (item?._id !== formData?.winner?._id) {
                  return item;
                }
              })

              ?.map((student, index) => (
                <div
                  key={index}
                  ref={ref}
                  className={style.selectStudentItem}
                  onClick={() => {
                    setFormData({
                      ...formData,
                      runnerUp: student,
                    });
                    onClose();
                  }}
                >
                  <div className={style.imgcontainer}>
                    <img
                      src={
                        student?.studentProfilePhoto
                          ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                      alt=""
                    />
                  </div>
                  <div className={style.issuedBookItemMidright}>
                    <h6>
                      {student?.studentFirstName}{" "}
                      {student?.studentMiddleName
                        ? student?.studentMiddleName
                        : " "}{" "}
                      {student?.studentLastName}
                    </h6>
                    <p>Gr No. {student?.studentGRNO}</p>
                  </div>
                </div>
              ))
          ) : (
            <div className={style.moDataText}>{t("no_student_found")}</div>
          )}
        </div>
      )}

      {status === "rsecondRunnerUp" && (
        <div
          style={customStyleOptions ? customStyleOptions : MODAL_STYLES}
          className={style.options}
        >
          {studentList?.length > 0 ? (
            studentList
              ?.filter((item) => {
                if (
                  item?._id !== formData?.winner?._id &&
                  item?._id !== formData?.runnerUp?._id
                ) {
                  return item;
                }
              })

              ?.map((student, index) => (
                <div
                  key={index}
                  ref={ref}
                  className={style.selectStudentItem}
                  onClick={() => {
                    setFormData({
                      ...formData,
                      secondRunnerUp: student,
                    });
                    onClose();
                  }}
                >
                  <div className={style.imgcontainer}>
                    <img
                      src={
                        student?.studentProfilePhoto
                          ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                      alt=""
                    />
                  </div>
                  <div className={style.issuedBookItemMidright}>
                    <h6>
                      {student?.studentFirstName}{" "}
                      {student?.studentMiddleName
                        ? student?.studentMiddleName
                        : " "}{" "}
                      {student?.studentLastName}
                    </h6>
                    <p>Gr No. {student?.studentGRNO}</p>
                  </div>
                </div>
              ))
          ) : (
            <div className={style.moDataText}>{t("no_student_found")}</div>
          )}
        </div>
      )}

      {status === "result" && (
        <div
          style={customStyleOptions ? customStyleOptions : MODAL_STYLES}
          className={style.options}
        >
          {positions?.map((position, index) => (
            <div
              key={index}
              className={style.selectStudentItem}
              onClick={() => {
                setFormData({ ...formData, rank: position });
                onClose();
              }}
            >
              {position}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SelectStudent;
