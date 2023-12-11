import React, { useState, useEffect } from "react";
import style from "./CreateSubject.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../AddDisplay.css";
import {
  useOneDepartmentAddSubjectClass,
  useOneDepartmentAllSubjectMaster,
  useOneDepartmentAllSubjectOneClass,
  useOneDepartmentClassProfile,
  useOneSubjectEdit,
  useOneSubjectEditDetail,
} from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { imageShowUrl } from "../../../../services/BaseUrl";
import LoaderButton from "../../../../Loader/LoaderButton";
import AssignStaffModal from "../../../../Department/Institute/AssignStaff/AssignStaffModal";
import StringLength from "../../../../Custom/Validation/StringLength";
import MarkValue from "../../../../Custom/Validation/MarkValue";
import CustomSelectDepartment from "../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import { useGetClassAllBatch } from "../../../../hooks/member_tab/class-api";

function Options({ options, switchOption }) {
  return (
    <div className={style.profileToolTip}>
      <div className={style.triangle}></div>
      <div className={style.profilelist}>
        {options?.map((option, index) => (
          <div
            value={option._id}
            onClick={() => switchOption(option)}
            key={index}
          >
            {option.subjectName}{" "}
            {option?.subjectType === "Optional" && `(${option?.subjectType})`}
          </div>
        ))}
      </div>
    </div>
  );
}

function CreateSubject({
  departmentModal,
  hideModal,
  id,
  did,
  bid,
  cid,
  edit,
  setEdit,
  editSubject,
  isEditBy,
  onRefetch,
}) {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const { subjectEditDetail, subjectEditDetailRefetch } =
    useOneSubjectEditDetail({
      sid: editSubject,
      skip: !editSubject,
    });
  useEffect(() => {
    if (editSubject) subjectEditDetailRefetch();
  }, [editSubject, departmentModal, subjectEditDetailRefetch]);
  const [classs, setClasss] = useState(
    (edit && subjectEditDetail?.subject?.subjectName) ||
      t("please_select_subject_")
  );
  const [disabled, setDisabled] = useState(false);
  const [fillAllDetail, setFillAllDetail] = useState(true);
  const [markValidation, setMarkValidation] = useState(false);
  const [selectOptions, setSelectOptions] = useState([]);
  const [assignHead, setAssignHead] = useState(false);
  const [batch, setBacth] = useState("Full Class");
  const [batchArr, setBatchArr] = useState([]);
  const [filled, setFilled] = useState("");
  const [assignHeadStaff, setAssignHeadStaff] = useState(
    edit && subjectEditDetail?.subject?.subjectTeacherName
  );
  const [createClass, setCreateClass] = useState({
    msid: (edit && subjectEditDetail?.subject?.subjectMasterName) || "",
    subjectTitle: (edit && subjectEditDetail?.subject?.subjectTitle) || "",
    sid: (edit && subjectEditDetail?.subject?.subjectTeacherName?._id) || "",
    subjectPassingMarks:
      (edit && subjectEditDetail?.subject?.setting?.subjectPassingMarks) || 0,
    subject_category:
      (edit && subjectEditDetail?.subject?.subject_category) || "Full Class",
  });

  const { allSubjectMaster } = useOneDepartmentAllSubjectMaster({
    data: {
      id: id,
      did: did,
    },
    skip: !id,
  });
  const [addSubjectInClass] = useOneDepartmentAddSubjectClass();
  const { oneClassAllSubjectRefetch } = useOneDepartmentAllSubjectOneClass({
    cid: cid,
    skip: !cid,
  });
  const { oneClassProfileRefetch } = useOneDepartmentClassProfile({
    cid: cid,
    skip: !cid,
  });
  const { getClassAllBatch, getClassAllBatchRefetch } = useGetClassAllBatch({
    cid: cid,
    skip: batch === "Particular Batch" ? !cid : true,
  });
  const [subjectEdit] = useOneSubjectEdit();
  //FOr edit of class detail
  useEffect(() => {
    if (edit && subjectEditDetail?.subject) {
      setCreateClass({
        msid: subjectEditDetail?.subject?.subjectMasterName || "",
        subjectTitle: subjectEditDetail?.subject?.subjectTitle || "",
        sid: subjectEditDetail?.subject?.subjectTeacherName?._id || "",
        subjectPassingMarks:
          subjectEditDetail?.subject?.setting?.subjectPassingMarks || 0,
        subject_category:
          subjectEditDetail?.subject?.subject_category || "Full Class",
      });
      setClasss(
        subjectEditDetail?.subject?.subjectName || t("select_standerd_")
      );
      setAssignHeadStaff(subjectEditDetail?.subject?.subjectTeacherName);
      if (subjectEditDetail?.subject?.selected_batch_query) {
        setBatchArr([subjectEditDetail?.subject?.selected_batch_query]);
        setBacth("Particular Batch");
      }
    }
  }, [edit, subjectEditDetail?.subject]);

  useEffect(() => {
    if (cid && batch === "Particular Batch") {
      getClassAllBatchRefetch();
    }
  }, [batch, cid, getClassAllBatchRefetch]);
  useEffect(() => {
    if (allSubjectMaster?.subjectMaster) {
      setSelectOptions(allSubjectMaster?.subjectMaster);
    }
  }, [allSubjectMaster]);

  const classheadSelect = (assing) => {
    setAssignHeadStaff(assing);
    setCreateClass({ ...createClass, sid: assing._id });
    setFillAllDetail(true);
  };
  const switchClass = (option) => {
    if (option?.subjectType === "Optional")
      setClasss(`${option.subjectName} (${option?.subjectType})`);
    else setClasss(option.subjectName);
    setCreateClass({ ...createClass, msid: option._id });
    setFillAllDetail(true);
  };

  const onResetState = () => {
    setCreateClass({
      msid: "",
      subjectTitle: "",
      sid: "",
      subjectPassingMarks: 0,
      subject_category: "Theory",
    });
    setBatchArr([]);
    setBacth("");
  };
  const subjectSubmitHandler = () => {
    if (
      createClass.msid &&
      // && createClass.sid
      createClass.subjectTitle
    ) {
      if (!edit) {
        let flag = true;
        if (batch) {
          if (batch === "Particular Batch" && !batchArr?.length) {
            setFilled({ batchList: "* required" });
            flag = false;
          }
        } else {
          setFilled({ batch: "* required" });
          flag = false;
        }

        if (flag) {
          setDisabled(true);
          addSubjectInClass({
            subjectAdd: {
              ...createClass,
              batch_arr: batchArr?.[0]?._id ? [batchArr?.[0]?._id] : [],
            },
            id: id,
            did: did,
            bid: bid,
            cid: cid,
          })
            .then((res) => {
              if (res) {
                hideModal(false);
                setDisabled(false);
                onResetState();
                setAssignHeadStaff("");
                oneClassProfileRefetch();
                oneClassAllSubjectRefetch();
              }
            })
            .catch({});
        }
      } else {
        setDisabled(true);

        const subjectDetail = {
          smId:
            // subjectEditDetail?.subject?.subjectMasterName === createClass.msid
            //   ? ""
            //   :
            createClass.msid,
          subjectTitle:
            subjectEditDetail?.subject?.subjectTitle ===
            createClass.subjectTitle
              ? ""
              : createClass.subjectTitle,
          sid:
            subjectEditDetail?.subject?.subjectTeacherName?._id ===
            createClass.sid
              ? ""
              : createClass.sid,
          subjectPassingMarks: +createClass.subjectPassingMarks,
          subject_category: createClass.subject_category,
          batch_arr:
            subjectEditDetail?.subject?.selected_batch_query?._id ===
            batchArr?.[0]?._id
              ? []
              : [batchArr?.[0]?._id],
          delete_arr:
            subjectEditDetail?.subject?.selected_batch_query?._id ===
            batchArr?.[0]?._id
              ? []
              : subjectEditDetail?.subject?.selected_batch_query?._id
              ? [subjectEditDetail?.subject?.selected_batch_query?._id]
              : [],
        };
        subjectEdit({
          subject: subjectDetail,
          sid: subjectEditDetail?.subject?._id,
        })
          .then(() => {
            if (isEditBy === "DEPARTMENT_HEAD") onRefetch();
            hideModal(false);
            setDisabled(false);
            setEdit(false);
            onResetState();
            setAssignHeadStaff("");
            oneClassAllSubjectRefetch();
          })
          .catch({});
      }
    } else {
      setFillAllDetail(false);
    }
  };

  const onClose = () => {
    hideModal(false);
    setEdit(false);
    setClasss(t("please_select_subject_"));
    onResetState();
    setAssignHeadStaff("");
  };

  const onBatchType = (value) => {
    setBacth((prev) => (prev = value));
  };

  const onBatchSelect = (val) => {
    setBatchArr(() => [val]);
  };

  const onSubjectCategory = (value) => {
    setCreateClass((prev) => ({
      ...prev,
      subject_category: value,
    }));
  };
  return (
    <>
      <Dialog open={departmentModal}>
        <div className={style.DModal}>
          <div className={style.title}>
            {!edit ? (
              <h5>{t("add-subject-n-place")}</h5>
            ) : (
              <h5>Edit Subject</h5>
            )}

            <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
          </div>
          <div hidden={fillAllDetail} className={style.notFound}>
            {t("fill_all_fields_to_add_subject")}
          </div>

          <div className={style.item} onClick={() => setClick(!click)}>
            <h6>{t("select-subject-place")}</h6>
            <div className={style.select}>
              <p>{classs}</p>

              <img src="/images/select-icon.svg" alt="" />
            </div>

            {click && (
              <div className={style.tooltip}>
                <Options options={selectOptions} switchOption={switchClass} />
              </div>
            )}
          </div>
          <h6
            style={{
              marginTop: "0.7rem",
            }}
          >
            {t("subject_category")}
          </h6>

          <section className={style.subject_tile_container}>
            <div
              className={
                createClass.subject_category === "Full Class"
                  ? style.subject_tile_active
                  : style.subject_tile
              }
              onClick={() => onSubjectCategory("Full Class")}
            >
              {t("all")}
            </div>
            <div
              className={
                createClass.subject_category === "Theory"
                  ? style.subject_tile_active
                  : style.subject_tile
              }
              onClick={() => onSubjectCategory("Theory")}
            >
              {t("theory")}
            </div>
            <div
              className={
                createClass.subject_category === "Tutorial"
                  ? style.subject_tile_active
                  : style.subject_tile
              }
              onClick={() => onSubjectCategory("Tutorial")}
            >
              {t("tutorial")}
            </div>
            <div
              className={
                createClass.subject_category === "Practical"
                  ? style.subject_tile_active
                  : style.subject_tile
              }
              onClick={() => onSubjectCategory("Practical")}
            >
              {t("practical")}
            </div>
          </section>
          <div className={style.mid} onClick={() => setAssignHead(true)}>
            <img
              src={
                assignHeadStaff?.staffProfilePhoto
                  ? `${imageShowUrl}/${assignHeadStaff.staffProfilePhoto}`
                  : "/images/avatar-icon.png"
              }
              alt=""
            />
            <div className={style.text}>
              <h6>
                {assignHeadStaff
                  ? `${assignHeadStaff?.staffFirstName} ${
                      assignHeadStaff?.staffMiddleName || ""
                    } ${assignHeadStaff?.staffLastName}`
                  : `${t("assign_subject_head")} ${t("optional")}`}
              </h6>
              <p>{t("search_from_joined_list")}</p>
            </div>
          </div>
          <div className={style.input}>
            <h6>{t("give-s-head-title")}</h6>
            <input
              type="text"
              value={createClass.subjectTitle}
              onChange={(e) => {
                if (e.target.value?.length <= 40) {
                  setCreateClass({
                    ...createClass,
                    subjectTitle: e.target.value,
                  });
                  setFillAllDetail(true);
                }
              }}
              required
              placeholder={t("shead_example")}
            />
            <StringLength
              maxLength={40}
              valueLength={createClass.subjectTitle}
            />
          </div>
          <h6>{t("batch")}</h6>
          <section className={style.subject_tile_container}>
            <div
              className={
                batch === "Full Class"
                  ? style.subject_tile_active
                  : style.subject_tile
              }
              onClick={() => onBatchType("Full Class")}
            >
              Full Class
            </div>
            <div
              className={
                batch === "Particular Batch"
                  ? style.subject_tile_active
                  : style.subject_tile
              }
              onClick={() => onBatchType("Particular Batch")}
            >
              Particular Batch
            </div>
          </section>
          {/* <CustomSelectDepartment
                selectLabel={t("batch")}
                selectedValue={t("please_select_batch_full_or_particular")}
                options={["Full Class", "Particular Batch"]}
                onClick={onBatchType}
                viewAs="NORMAL_FILTER"
                defalutValue={batch}
                errorShow={filled["batch"]}
              /> */}
          {batch === "Particular Batch" ? (
            <CustomSelectDepartment
              selectLabel={t("select_batch")}
              selectedValue={t("please_select_batch")}
              options={getClassAllBatch?.all_batches ?? []}
              onClick={onBatchSelect}
              viewAs="NORMAL_FILTER"
              defalutValue={batchArr?.[0]?.batchName ?? ""}
              openAs="PROMOTE"
              errorShow={filled["batchList"]}
            />
          ) : null}
          <div className={style.input}>
            <h6>{t("subject_passing")}</h6>
            <input
              type="tel"
              value={createClass.subjectPassingMarks}
              onChange={(e) => {
                if (+e.target.value <= 100) {
                  setCreateClass({
                    ...createClass,
                    subjectPassingMarks: +e.target.value,
                  });
                  setFillAllDetail(true);
                } else {
                  setMarkValidation(true);
                }
              }}
              placeholder="E.g. 40"
            />
            {markValidation && (
              <MarkValue message={"Mark is not greater than 100"} />
            )}
          </div>

          <button
            className={style.btn}
            onClick={subjectSubmitHandler}
            disabled={disabled}
          >
            {!edit ? <p>{t("create")}</p> : <p>{t("update")}</p>}
            {disabled && (
              <div>
                <LoaderButton />
              </div>
            )}
          </button>
        </div>
      </Dialog>

      {assignHead &&
        (isEditBy === "DEPARTMENT_HEAD" ? (
          <AssignStaffModal
            assignHead={assignHead}
            headSelect={(data) => {
              classheadSelect(data);
              setAssignHead((pre) => !pre);
            }}
            title={t("assign_shead")}
            onClose={() => setAssignHead((pre) => !pre)}
            instituteId={id}
            viewAs="ADMISSION_ADMIN"
          />
        ) : (
          <AssignStaffModal
            assignHead={assignHead}
            headSelect={classheadSelect}
            title={t("assign_shead")}
            onClose={() => setAssignHead((pre) => !pre)}
          />
        ))}
    </>
  );
}

export default CreateSubject;
