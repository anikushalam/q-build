import React, { useState } from "react";
import style from "./StudentAProfileView.module.css";
import StudentAProfileView from "./StudentAProfileView";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
const StudentReportInsDetails = React.lazy(() =>
  import("./StudentReportCardIns/StudentReportCardInsDetails")
);
export default function StudentAProfile({
  studentId,
  studentList,
  setPage,
  state,
  showingDataLoading,
}) {
  const [sid, setSid] = useState(studentId);
  const [yearId, setYearId] = useState("");
  const [reportCard, setReportCard] = useState(false);

  React.useEffect(() => {
    if (studentId) setSid(studentId);
  }, [studentId]);
  // for the infinit scroll
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  // console.info(yearId, reportCard);

  return (
    <>
      {reportCard ? (
        <CustomSuspense>
          <StudentReportInsDetails
            yearId={yearId}
            setReportCard={setReportCard}
          />
        </CustomSuspense>
      ) : (
        <div className={style.container}>
          <div>
            <div className={style.leftHeadContainer}>
              <div className={style.leftHeadIndex}>
                <p className={style.leftHeadIndexValue}>Gr No.</p>
              </div>
              <div className={style.leftHeadName}>
                <p className={style.leftHeadNameValue}>Name</p>
              </div>
            </div>
            <div className={style.leftBodyContainer}>
              {studentList &&
                studentList.map((row, index) =>
                  studentList?.length === index + 1 ? (
                    <div
                      ref={ref}
                      key={row.studentGRNO}
                      onClick={() => setSid(row._id)}
                      className={
                        row?._id === sid
                          ? style.studentlistItemactive
                          : style.studentlistItem
                      }
                    >
                      <div className={style.leftBodyRow}>
                        <div className={style.leftBodyRowIndex}>
                          <p>{row.studentGRNO}</p>
                        </div>
                        <div className={style.leftBodyRowDetail}>
                          <div className={style.leftBodyRowImage}>
                            <img
                              src={
                                row?.photoId !== "1"
                                  ? `${imageShowUrl}/${row?.studentProfilePhoto}`
                                  : "/images/ins_default_profile.svg"
                              }
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <div className={style.leftBodyRowHeadDetail}>
                            <p className={style.leftBodyRowName}>
                              {`${row.studentFirstName} ${
                                row.studentMiddleName
                                  ? row.studentMiddleName
                                  : ""
                              } ${row.studentLastName}`}
                            </p>
                            <p className={style.leftBodyRowDest}>
                              {row.studentClass
                                ? row.studentClass.className
                                : "Class Name"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className={style.leftBodyRowBottomBorder}></p>
                    </div>
                  ) : (
                    <div
                      key={row.studentGRNO}
                      onClick={() => setSid(row._id)}
                      className={
                        row?._id === sid
                          ? style.studentlistItemactive
                          : style.studentlistItem
                      }
                    >
                      <div className={style.leftBodyRow}>
                        <div className={style.leftBodyRowIndex}>
                          <p>{row.studentGRNO}</p>
                        </div>
                        <div className={style.leftBodyRowDetail}>
                          <div className={style.leftBodyRowImage}>
                            <img
                              src={
                                row?.photoId !== "1"
                                  ? `${imageShowUrl}/${row?.studentProfilePhoto}`
                                  : "/images/ins_default_profile.svg"
                              }
                              loading="lazy"
                              alt=""
                            />
                          </div>
                          <div className={style.leftBodyRowHeadDetail}>
                            <p className={style.leftBodyRowName}>
                              {`${row.studentFirstName} ${
                                row.studentMiddleName
                                  ? row.studentMiddleName
                                  : ""
                              } ${row.studentLastName}`}
                            </p>
                            <p className={style.leftBodyRowDest}>
                              {row.studentClass
                                ? row.studentClass.className
                                : "Class Name"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className={style.leftBodyRowBottomBorder}></p>
                    </div>
                  )
                )}
              {showingDataLoading && <QvipleLoading />}
            </div>
          </div>
          <div className={style.rightBodyContainer}>
            <StudentAProfileView
              setReportCard={setReportCard}
              setYearId={setYearId}
              sid={sid}
            />
          </div>
        </div>
      )}
    </>
  );
}
