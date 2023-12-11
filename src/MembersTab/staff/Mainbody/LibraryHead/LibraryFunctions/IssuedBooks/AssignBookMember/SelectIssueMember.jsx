import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  useApproveStudentList,
  useSearchStudent,
} from "../../../../../../../hooks/institute/institute-staff-student-api";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import AssignBookMemberHeader from "./AssignBookMemberHeader";
import MemberItem from "./MemberItem";

const SelectIssueMember = ({ instituteId, onAddMember, onBack, step }) => {
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({ skip: search });
  const [allStudent, setAllStudent] = useState([]);
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { approveStudentList, approveStudentListRefetch } =
    useApproveStudentList({
      data: {
        id: instituteId,
        page: page,
        limit: 10,
      },
      skip: !instituteId,
    });

  const { searchStudent, searchStudentRefetch } = useSearchStudent({
    data: { search: search, page: 1, limit: 10, id: instituteId },
    skip: !search,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search && instituteId) {
      setShowingDataLoading(true);
      searchStudentRefetch();
    }
  }, [search, instituteId, page, searchStudentRefetch]);

  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      approveStudentListRefetch();
    }
  }, [instituteId, page, approveStudentListRefetch]);

  useEffect(() => {
    if (search) {
      if (searchStudent?.student) {
        if (page === 1) {
          setAllStudent(searchStudent?.student);
        } else {
          setAllStudent((prevState) =>
            [
              ...new Set(
                [...prevState, ...searchStudent?.student]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
        }

        setShowingDataLoading(false);
      } else if (searchStudent?.student?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    } else {
      if (approveStudentList?.studentIns) {
        if (page === 1) {
          setAllStudent(approveStudentList?.studentIns);
        } else {
          setAllStudent((prevState) =>
            [
              ...new Set(
                [...prevState, ...approveStudentList?.studentIns]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
        }
        setShowingDataLoading(false);
      } else if (approveStudentList?.studentIns?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (approveStudentList?.studentIns?.length === 10) setState(true);
    else setState(false);
  }, [approveStudentList?.studentIns, searchStudent?.student]);

  const onSearch = (val) => {
    setPage((page) => (page = 1));
    setSearch(val);
  };

  return (
    <>
      <AssignBookMemberHeader onBack={onBack} step={step} onSearch={onSearch} />
      {allStudent?.map((student, index) =>
        allStudent?.length === index + 1 ? (
          <div ref={ref} key={student?._id}>
            <MemberItem student={student} onAddMember={onAddMember} />
          </div>
        ) : (
          <MemberItem
            key={student?._id}
            student={student}
            onAddMember={onAddMember}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
    </>
  );
};

export default SelectIssueMember;
