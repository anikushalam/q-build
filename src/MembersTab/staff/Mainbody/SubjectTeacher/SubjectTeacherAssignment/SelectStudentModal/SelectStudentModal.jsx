import React from "react";
import { Dialog } from "@mui/material";
import { Divider } from "@mui/material";
import {
  useClassAllStudent,
  useGetClassBatchAllStudent,
} from "../../../../../../hooks/member_tab/class-api";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";

import style from "./SelectStudentModal.module.css";
import { useEffect } from "react";

function Item({ assignmentData, setAssignmentData, student }) {
  const { t } = useTranslation();
  const handleSelect = () => {
    const arr = assignmentData.selectedStudents;
    arr.push(student?._id);
    setAssignmentData({ ...assignmentData, selectedStudents: arr });
  };

  const handleDeselect = () => {
    const arr = assignmentData.selectedStudents;
    const index = arr.indexOf(student?._id);
    if (index > -1) {
      // only splice array when item is found
      arr.splice(index, 1); // 2nd parameter means remove one item only
    }
    setAssignmentData({ ...assignmentData, selectedStudents: arr });
  };

  // console.info(classAllStudent?.classes?.ApproveStudent);

  return (
    <div className={style.item}>
      <div className={style.subItem}>
        <img
          alt=""
          src={
            student?.studentProfilePhoto
              ? `${imageShowUrl}/${student?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
        />
        <div className={style.itemtext}>
          <div className={style.insName}>
            <h6>
              {student?.studentFirstName}{" "}
              {student?.studentMiddleName ? student?.studentMiddleName : " "}{" "}
              {student?.studentLastName}
            </h6>
          </div>
          <p className={style.insUserName}>
            {t("roll_no")} {student?.studentROLLNO}
          </p>
        </div>
      </div>

      {assignmentData.selectedStudents.includes(student?._id) ? (
        <img
          id="check"
          className={style.checkbox}
          src="/images/checkbox-icon.svg"
          alt=""
          onClick={handleDeselect}
        />
      ) : (
        <img
          id="check"
          className={style.checkbox}
          src="/images/box-icon.svg"
          alt=""
          onClick={handleSelect}
        />
      )}
    </div>
  );
}

function SelectStudentModal({
  openModal,
  hideModal,
  assignmentData,
  setAssignmentData,
  cid,
  bid,
}) {
  const { t } = useTranslation();
  const [selectAll, setSelectAll] = React.useState(false);
  const { classAllStudent, classAllStudentRefetch } = useClassAllStudent({
    data: {
      cid: cid,
      page: 1,
      limit: 30,
    },
    skip: bid ? bid : !cid,
  });

  useEffect(() => {
    if (cid) classAllStudentRefetch();
  }, [cid, classAllStudentRefetch]);

  const { getClassBatchAllStudent, getClassBatchAllStudentRefetch } =
    useGetClassBatchAllStudent({
      data: {
        bid: bid,
        page: 1,
        limit: 1000,
        search: "",
      },
      skip: !bid,
    });
  useEffect(() => {
    if (bid) {
      getClassBatchAllStudentRefetch();
    }
  }, [bid, getClassBatchAllStudentRefetch]);

  const handleSelectAll = () => {
    if (bid) {
      const arr = [];
      for (var i = 0; i < getClassBatchAllStudent?.all_students?.length; i++) {
        arr.push(getClassBatchAllStudent?.all_students[i]._id);
      }
      setAssignmentData({ ...assignmentData, selectedStudents: arr });
      setSelectAll(true);
    } else {
      const arr = [];
      for (
        var i = 0;
        i < classAllStudent?.classes?.ApproveStudent.length;
        i++
      ) {
        arr.push(classAllStudent?.classes?.ApproveStudent[i]._id);
      }
      setAssignmentData({ ...assignmentData, selectedStudents: arr });
      setSelectAll(true);
    }
  };

  const handleSubmit = () => {
    hideModal(false);
  };

  return (
    <Dialog open={openModal}>
      <div className={style.addDisplay}>
        <div className={style.searchContainerr}>
          <div className={style.searchContainer}>
            <img alt="" src="/images/search-dept-icon.svg" />
            <input
              className={style.searchInput}
              type="text"
              placeholder={t("search-label")}
              required
            />
          </div>
          <div className={style.searchContainerrRight}>
            <img
              src="/images/close-post-icon.svg"
              alt=""
              onClick={() => hideModal(false)}
            />
          </div>
        </div>
        <Divider />
        <div className={style.counts}>
          <p>{assignmentData.selectedStudents.length} selected</p>
          <p style={{ cursor: "pointer" }} onClick={handleSelectAll}>
            {t("select_all")}
          </p>
        </div>
        <div className={style.items}>
          {bid
            ? getClassBatchAllStudent?.all_students?.map((student, index) => (
                <div key={index}>
                  <Item
                    student={student}
                    sid="6322ed41aa93f2a1fe6eea1d"
                    img="/images/demo_users/user2.svg"
                    name={`${student?.name}`}
                    assignmentData={assignmentData}
                    setAssignmentData={setAssignmentData}
                    selectAll={selectAll}
                    setSelectAll={setSelectAll}
                  />
                  <Divider />
                </div>
              ))
            : classAllStudent?.classes?.ApproveStudent?.map(
                (student, index) => (
                  <div key={index}>
                    <Item
                      student={student}
                      sid="6322ed41aa93f2a1fe6eea1d"
                      img="/images/demo_users/user2.svg"
                      name={`${student?.name}`}
                      assignmentData={assignmentData}
                      setAssignmentData={setAssignmentData}
                      selectAll={selectAll}
                      setSelectAll={setSelectAll}
                    />
                    <Divider />
                  </div>
                )
              )}
        </div>
        <div className={style.footer}>
          <div className={style.btn} onClick={handleSubmit}>
            {t("select_student")}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default SelectStudentModal;
