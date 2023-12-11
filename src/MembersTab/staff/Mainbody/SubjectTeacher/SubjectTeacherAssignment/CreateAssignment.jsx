import React from "react";
import { useState, useEffect } from "react";
import style from "./SubjectTeacherAssignment.module.css";
import SelectStudentModal from "./SelectStudentModal/SelectStudentModal";
import { useSubjectCreateAssignment } from "../../../../../hooks/member_tab/subject-api";
import { useTranslation } from "react-i18next";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import JoinFormCalender from "../../../../../JoiningForm/Student/Form/JoinFormCalender";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import JoinFormFileType from "../../../../../JoiningForm/Student/Form/JoinFormFileType";
import QLoader from "../../../../../Loader/QLoader";
import { useNavigate } from "react-router-dom";
import TileWrapper from "../../../../../Department/Institute/Components/exportData/TileWrapper";
import AddAttainmentInSubject from "../../DepartmentHead/Exminations/ExamFrom/AddAttainmentInSubject";
const attainmentList = [
  {
    name: "yes",
    key: "YES",
  },
  {
    name: "no",
    key: "NO",
  },
];
const attainmentTypeList = [
  {
    name: "internal",
    key: "INTERNAL",
  },
  {
    name: "external",
    key: "EXTERNAL",
  },
];
function CreateAssignment({ onRefetch, cid, sid, bid, smid }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [files, setFiles] = useState();
  const [subjectCreateAssignment] = useSubjectCreateAssignment();
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [assignmentData, setAssignmentData] = useState({
    name: "",
    dueDate: "",
    description: "",
    files: [],
    selectedStudents: [],
    copo_attainment: "NO",
    copo_attainment_type: "INTERNAL",
    // copo_list: [],
    // assignment_total_mark: 0,
  });

  const handleDocumentUpload = (e) => {
    setFiles(e.target.files);
  };

  useEffect(() => {
    for (let file in files) {
      if (files[file]["size"]) {
        setUploadedFiles((prev) => [
          ...prev,
          { name: files[file]["name"], type: files[file]["type"] },
        ]);
      }
    }
  }, [files]);

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (obj === "dueDate" || obj === "description" || obj === "files") {
      } else if (obj === "selectedStudents") {
        if (!data[obj]?.length) errors[obj] = `${obj} is required!`;
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };

  const handleSubmit = (data) => {
    const validation = onValidation(assignmentData);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      setDisabled((pre) => !pre);
      const formDatas = new FormData();
      formDatas.append("assignmentName", assignmentData.name);
      formDatas.append("dueDate", assignmentData.dueDate);
      formDatas.append("descritpion", assignmentData.description);
      formDatas.append("copo_attainment", assignmentData.copo_attainment);
      formDatas.append(
        "copo_attainment_type",
        assignmentData.copo_attainment_type
      );
      formDatas.append("total_mark", data?.assignment_total_mark);
      formDatas.append(
        "students",
        JSON.stringify(assignmentData.selectedStudents)
      );
      formDatas.append("copo_list", JSON.stringify(data?.copo_list));
      for (let file in files) {
        if (files[file]["size"]) {
          formDatas.append("file", files[file]);
        }
      }
      subjectCreateAssignment({
        sid: sid,
        assignmentCreate: formDatas,
      }).then((res) => {
        if (res.data) {
          onRefetch();
          navigate(-1);
          setAssignmentData({ ...assignmentData, text: "", files: [] });
          setUploadedFiles([]);
          setDisabled((pre) => !pre);
        }

        // console.info(res);
      });
    }
  };

  const onDateFunction = (val) => {
    const onDateSplit = val?.split("/");
    // setPayData((prev) => ({
    //   ...prev,
    //   transaction_date: `${onDateSplit[2]}-${onDateSplit[1]}-${onDateSplit[0]}`,
    // }));
    setAssignmentData({
      ...assignmentData,
      dueDate: `${onDateSplit[2]}-${onDateSplit[1]}-${onDateSplit[0]}`,
    });
  };

  const onSelectAttainment = (val) => {
    setAssignmentData((prev) => ({
      ...prev,
      copo_attainment: val,
    }));
  };
  const onSelectAttainmentType = (val) => {
    setAssignmentData((prev) => ({
      ...prev,
      copo_attainment_type: val,
    }));
  };
  const onGrabAttainment = (val) => {
    handleSubmit({ ...val });
  };
  return (
    <div className={style.assignmentDetail}>
      <div
        className={style.assignmentDetailTop}
        style={{
          justifyContent: "flex-start",
          gap: "1.3rem",
        }}
      >
        <img
          src="/images/members/arrow-left.svg"
          alt=""
          onClick={() => navigate(-1)}
        />
        <h6>{t("assignment")}</h6>
        {/* <img
          className={style.menu}
          src="/images/menu-dots-dark-icon.svg"
          alt=""
        /> */}
      </div>

      <div className={style.assignmentDetailBody}>
        <JoinFormInput
          labelText={t("ass_name")}
          placeholder={t("enter_the_assignment_name")}
          type={"text"}
          name="name"
          value={assignmentData.name}
          onChange={(e) =>
            setAssignmentData({ ...assignmentData, name: e.target.value })
          }
          errorShow={filled["name"]}
        />

        <JoinFormCalender
          labelText={t("due_date_of_assignement")}
          placeholder={t("select_due_date")}
          name={"dueDate"}
          value={assignmentData.dueDate}
          onDateFunction={onDateFunction}
          customStyleContainer={{
            position: "relative",
            marginTop: "0.5rem",
          }}
          datePickerPosition={{
            top: "-6rem",
          }}
          customStyleLabel={{
            marginTop: "7px",
          }}
          // errorShow={filled["dueDate"]}
        />

        <JoinFormTextArea
          labelText={t("description")}
          placeholder={t("ass_des")}
          name={"description"}
          value={assignmentData.description}
          type={"text"}
          onChange={(e) =>
            setAssignmentData({
              ...assignmentData,
              description: e.target.value,
            })
          }
        />
        <JoinFormFileType
          labelText={t("add_file_or_image")}
          name={"files"}
          value={
            uploadedFiles?.length === 1
              ? { originalName: uploadedFiles[0].name }
              : uploadedFiles?.length > 1
              ? { originalName: `${uploadedFiles.length} selected` }
              : ""
          }
          onChange={handleDocumentUpload}
          // typeAccept={
          //   "image/gif, image/jpeg, image/png,text/plain, application/pdf"
          // }
          typeAccept="*"
          customStyleContainer={{
            marginBottom: "1rem",
          }}
        />

        <div className={style.allfilesOrientation}>
          {files &&
            uploadedFiles.map((file, index) => {
              if (file?.type === "application/pdf") {
                return (
                  <div className={style.img} key={index}>
                    <img src="/images/admin/pdf-icon.svg" alt="" />
                    <p>{file?.name}</p>
                  </div>
                );
              } else {
                return (
                  <div className={style.img} key={index}>
                    <img src="/images/members/img-icon.svg" alt="" />
                    <p>{file?.name}</p>
                  </div>
                );
              }
            })}
        </div>

        <p
          onClick={() => setOpenModal(true)}
          className={style.selectStudent}
          title="Select student for assignment"
        >
          {t("select_students")}

          {filled["selectedStudents"] && (
            <span
              style={{ color: "red", marginLeft: "15px", fontSize: "14px" }}
            >
              * {t("form_require_label")}
            </span>
          )}
        </p>

        <p className={style.selectStudent2}>
          {t("total_selected_student")}:{" "}
          {assignmentData.selectedStudents.length}
        </p>
        <TileWrapper
          labelText="copo_attainment"
          tileList={attainmentList}
          activeTile={assignmentData.copo_attainment}
          onTile={onSelectAttainment}
        />
        {assignmentData.copo_attainment === "YES" && (
          <TileWrapper
            labelText="attainment_type"
            tileList={attainmentTypeList}
            activeTile={assignmentData.copo_attainment_type}
            onTile={onSelectAttainmentType}
          />
        )}

        {assignmentData.copo_attainment === "YES" ? (
          <AddAttainmentInSubject
            smid={smid}
            onGrabAttainment={onGrabAttainment}
            createdBy="SUBJECT_ASSIGNMENT"
          />
        ) : (
          <div
            className={`${style.btn} ${style.btnActive}`}
            onClick={handleSubmit}
          >
            {t("create_assignment")}
          </div>
        )}
      </div>
      {openModal && (
        <SelectStudentModal
          openModal={openModal}
          hideModal={(w) => setOpenModal(w)}
          assignmentData={assignmentData}
          setAssignmentData={setAssignmentData}
          cid={cid}
          bid={bid}
        />
      )}
      {disabled && <QLoader />}
    </div>
  );
}

export default CreateAssignment;
