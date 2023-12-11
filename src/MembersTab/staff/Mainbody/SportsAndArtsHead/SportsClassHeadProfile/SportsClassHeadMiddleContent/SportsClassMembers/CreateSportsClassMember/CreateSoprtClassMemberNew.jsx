import React from "react";
import style from "./CreateSoprtClassMemberNew.module.css";
import { Dialog } from "@mui/material";
import { imageShowUrl } from "../../../../../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";
import { useAddStudentInSportClass } from "../../../../../../../../hooks/sports/sports-api";
import { useStudentApprovedArray } from "../../../../../../../../hooks/sports/sports-api";
import { useState } from "react";
import LoaderButton from "../../../../../../../../Loader/LoaderButton";

function Item({
  student,

  studentData,
  setStudentData,
  // handleDeselect,
}) {
  const handleSelect = (sid) => {
    const arr = studentData.students;
    arr.push(sid);
    setStudentData({ ...studentData, students: arr });
  };
  const { t } = useTranslation();
  const handleDeselect = (sid) => {
    let arr = studentData.students;
    const index = arr.indexOf(sid);
    if (index > -1) {
      arr.splice(index, 1);
    }
    setStudentData({ ...studentData, students: arr });
  };
  return (
    <div className={style.studentItemContainer}>
      <div className={style.studentItem}>
        <img
          alt=""
          src={
            student?.photoId !== "1"
              ? `${imageShowUrl}/${student?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
        />
        <div className={style.stext}>
          <h6>
            {student?.studentFirstName} {student?.studentMiddleName}
            {student?.studentLastName}
          </h6>
          <p>
            {t("gr_no")} : {student?.studentGRNO}
          </p>
        </div>
      </div>

      {studentData.students.includes(student?._id) ? (
        <img
          id="check"
          className={style.checkbox}
          src="/images/checkbox-icon.svg"
          alt=""
          onClick={() => handleDeselect(student?._id)}
        />
      ) : (
        <img
          id="check"
          className={style.checkbox}
          src="/images/box-icon.svg"
          alt=""
          onClick={() => handleSelect(student?._id)}
        />
      )}
    </div>
  );
}

function CreateSoprtClassMemberNew({
  openModal,
  hideModal,
  insId,
  cid,
  classMembers,
  refetch,
  studentIDs,
}) {
  const { studentApprovedArray } = useStudentApprovedArray({
    insId: insId,
    skip: !insId,
  });
  const [students, setStudents] = useState([]);
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [studentData, setStudentData] = useState({
    students: [],
  });

  const [addStudentInSportClass] = useAddStudentInSportClass();
  const [loading, setLoading] = useState(false);

  const handleAdd = () => {
    setLoading(true);
    addStudentInSportClass({
      cid: cid,
      request: studentData.students,
    }).then((res) => {
      setLoading(false);
      console.info(res.data);
      hideModal(false);
      refetch();
    });
  };

  // console.info(studentArray?.studentIns);

  // var arr1 = [1, 2, 3, 4],
  //   arr2 = [2, 4],
  //   res = arr1.filter((item) => !arr2.includes(item));
  // console.log(studentArray?.studentIns, classMembers);

  console.info(studentApprovedArray);
  return (
    <Dialog open={openModal}>
      <div className={style.addDisplay}>
        <div className={style.title}>
          <h6>{t("add_members")}</h6>

          <img
            src="/images/close-post-icon.svg"
            onClick={() => hideModal(false)}
          />
        </div>
        <div className={style.content}>
          <div className={style.contentTop}>
            <div className={style.searchContainer}>
              <img alt="" src="/images/search-dept-icon.svg" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder={t("search-label")}
                required
              />
            </div>

            <p>
              {studentData.students?.length} {t("selected_")}{" "}
            </p>
          </div>
          {studentApprovedArray?.studentIns
            ?.filter((val) => {
              if (searchQuery === "" && !studentIDs?.includes(val?._id)) {
                return val;
              } else if (
                (val?.studentFirstName
                  ?.toLowerCase()
                  .includes(searchQuery.toLocaleLowerCase()) &&
                  !studentIDs?.includes(val?._id)) ||
                (!studentIDs?.includes(val?._id) &&
                  val?.studentGRNO
                    ?.toLowerCase()
                    .includes(searchQuery.toLocaleLowerCase()))
              ) {
                return val;
              }
            })
            ?.map((student, index) => (
              <Item
                student={student}
                key={index}
                studentData={studentData}
                setStudentData={setStudentData}
              />
            ))}
        </div>

        <div className={style.footer}>
          {studentData.students.length > 0 ? (
            <button
              disabled={loading ? true : false}
              className={`${style.btn} ${style.btnActive}`}
              onClick={handleAdd}
            >
              <p>{t("add_")}</p>
              {loading && <LoaderButton />}
            </button>
          ) : (
            <div className={style.btn}>
              {" "}
              <p>{t("add_")}</p>{" "}
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default CreateSoprtClassMemberNew;
