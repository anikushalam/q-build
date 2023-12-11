import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDepartmentBacklogSubjectAllStudent } from "../../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import StudentItem from "./StudentItem";
import BacklogStudentModal from "./BacklogStudentModal";

const CurrentBacklog = ({ subjectMasterId }) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [studentList, setStudentList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { backlogSubjectAllStudent, backlogSubjectAllStudentRefetch } =
    useDepartmentBacklogSubjectAllStudent({
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
      backlogSubjectAllStudentRefetch();
    }
  }, [page, subjectMasterId, refetchStatus, backlogSubjectAllStudentRefetch]);

  useEffect(() => {
    if (backlogSubjectAllStudent?.student_array) {
      if (refetchStatus) {
        const uniquePost = [...backlogSubjectAllStudent?.student_array];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setStudentList(uniqueRefind);
        setRefetchStatus(false);
        setShowingDataLoading(false);
      } else {
        const uniquePost = [
          ...studentList,
          ...backlogSubjectAllStudent?.student_array,
        ];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setStudentList(uniqueRefind);
        setShowingDataLoading(false);
      }
    } else if (backlogSubjectAllStudent?.student_array?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (backlogSubjectAllStudent?.student_array?.length === 10) setState(true);
    else setState(false);
  }, [backlogSubjectAllStudent?.student_array]);

  const onStudentOpen = (val) => {
    setStudentId(val);
    setOpenModal((pre) => !pre);
  };
  const onRefetchWhenConfirm = () => {
    setPage(1);
    setRefetchStatus(true);
  };
  return (
    <>
      {studentList?.map((student, index) =>
        studentList?.length === index + 1 ? (
          <div ref={ref} key={student?._id}>
            <StudentItem
              student={student}
              onStudentOpen={onStudentOpen}
              clickable={true}
            />
          </div>
        ) : (
          <StudentItem
            key={student?._id}
            student={student}
            onStudentOpen={onStudentOpen}
            clickable={true}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {openModal && (
        <BacklogStudentModal
          open={openModal}
          hideModal={(w) => setOpenModal(w)}
          studentId={studentId}
          subjectMasterId={subjectMasterId}
          onRefetchWhenConfirm={onRefetchWhenConfirm}
        />
      )}
    </>
  );
};

export default CurrentBacklog;
