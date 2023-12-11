import React, { useEffect, useState } from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import StudentCard from "./StudentCard";
import { useGetPromoteStudentByPromote } from "../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import Promote from "../Promote/Promote";
import PromoteUndo from "./PromoteUndo";

const PromoteList = ({ classId }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [promoteStudent, setPromoteStudent] = useState(false);
  // const [students, setStudents] = useState([]);
  const { getPromoteStudentByPromote, getPromoteStudentByPromoteRefetch } =
    useGetPromoteStudentByPromote({
      cid: classId,
      skip: !classId,
    });

  useEffect(() => {
    if (classId) {
      setShowingDataLoading(true);
      getPromoteStudentByPromoteRefetch();
    }
  }, [classId, getPromoteStudentByPromoteRefetch]);
  useEffect(() => {
    if (
      getPromoteStudentByPromote?.promoteStudent ||
      getPromoteStudentByPromote?.promoteStudent?.length === 0
    ) {
      // setStudents(getPromoteStudentByPromote?.promoteStudent ?? []);
      setShowingDataLoading(false);
    }
  }, [getPromoteStudentByPromote?.promoteStudent]);

  const onClose = () => {
    setPromoteStudent((pre) => !pre);
  };
  // const onSearchEvent = (e) => {
  //   if (e.target.value) {
  //     const filterStudent = getPromoteStudentByPromote?.promoteStudent?.filter(
  //       (student) => {
  //         if (
  //           `${student?.studentFirstName} ${
  //             student?.studentMiddleName ? student?.studentMiddleName + " " : ""
  //           }${student?.studentLastName}`
  //             ?.toLowerCase()
  //             ?.includes(e.target.value?.toLowerCase())
  //         ) {
  //           return student;
  //         } else {
  //           return null;
  //         }
  //       }
  //     );
  //     setStudents(filterStudent);
  //   } else {
  //     setStudents(getPromoteStudentByPromote?.promoteStudent);
  //   }
  // };
  return (
    <div>
      <div className={style.promote_undo_container}>
        <button className={style.select_application_btn} onClick={onClose}>
          <div>{t("promote_student")}</div>
          <img src="/images/forward-right-icon.svg" alt="next step" />
        </button>
        <PromoteUndo
          cid={classId}
          onRefetch={getPromoteStudentByPromoteRefetch}
        />
      </div>
      <h6 className={style.total_student_count}>
        {t("total_student")}{" "}
        {getPromoteStudentByPromote?.count?.totalCount ?? 0}
      </h6>
      <div className={style.total_other_count_container}>
        <p>
          {t("boys_promote")}
          {getPromoteStudentByPromote?.count?.boyCount ?? 0}
        </p>
        <p>
          {t("girl_promote")}
          {getPromoteStudentByPromote?.count?.girlCount ?? 0}
        </p>
      </div>
      {getPromoteStudentByPromote?.promoteStudent?.map((stu) => (
        <StudentCard stu={stu} key={stu?._id} viewAs="PROMOTE" />
      ))}
      {showingDataLoading && <QvipleLoading />}

      {promoteStudent && (
        <Promote
          classId={classId}
          onClose={onClose}
          onRefetchParent={getPromoteStudentByPromoteRefetch}
        />
      )}
    </div>
  );
};

export default PromoteList;
