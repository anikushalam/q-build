import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDepartmentBacklogSubjectAllStudentDropout } from "../../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import StudentItem from "./StudentItem";

const DropoutStudent = ({ subjectMasterId }) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [studentList, setStudentList] = useState([]);

  const {
    backlogSubjectAllStudentDropout,
    backlogSubjectAllStudentDropoutRefetch,
  } = useDepartmentBacklogSubjectAllStudentDropout({
    data: {
      smid: subjectMasterId,
      page: page,
      limit: 10,
    },
    skip: !subjectMasterId,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (subjectMasterId) {
      setShowingDataLoading(true);
      backlogSubjectAllStudentDropoutRefetch();
    }
  }, [page, subjectMasterId, backlogSubjectAllStudentDropoutRefetch]);

  useEffect(() => {
    if (backlogSubjectAllStudentDropout?.student_array) {
      const uniquePost = [
        ...studentList,
        ...backlogSubjectAllStudentDropout?.student_array,
      ];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setStudentList(uniqueRefind);
      setShowingDataLoading(false);
    } else if (backlogSubjectAllStudentDropout?.student_array?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (backlogSubjectAllStudentDropout?.student_array?.length === 10)
      setState(true);
    else setState(false);
  }, [backlogSubjectAllStudentDropout?.student_array]);

  //   console.info("skdfgdjsdsfg,mdg", backlogSubjectAllStudentDropout);
  return (
    <>
      {studentList?.map((student, index) =>
        studentList?.length === index + 1 ? (
          <div ref={ref} key={student?._id}>
            <StudentItem student={student} clickable={false} />
          </div>
        ) : (
          <StudentItem key={student?._id} student={student} clickable={false} />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default DropoutStudent;
