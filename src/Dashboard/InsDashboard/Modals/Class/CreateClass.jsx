import React, { useState, useEffect } from "react";
import "../AddDisplay.css";
import style from "./CreateClass.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  useOneClassEdit,
  useOneDepartmentAddClass,
  useOneDepartmentAllClassMaster,
  useOneViewDepartment,
} from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { imageShowUrl } from "../../../../services/BaseUrl";
import LoaderButton from "../../../../Loader/LoaderButton";
import AssignStaffModal from "../../../../Department/Institute/AssignStaff/AssignStaffModal";
import StringLength from "../../../../Custom/Validation/StringLength";
import MarkValue from "../../../../Custom/Validation/MarkValue";

function Options({ options, switchOption, customStyle }) {
  return (
    <div className={style.profileToolTip} style={{ ...customStyle }}>
      <div className={style.triangle}></div>

      <div className={style.profilelist}>
        {options?.map((option, index) => (
          <div
            value={option._id}
            onClick={() => switchOption(option)}
            key={index}
          >
            {option.className}
          </div>
        ))}
      </div>
    </div>
  );
}

function CreateClass({
  departmentModal,
  hideModal,
  id,
  did,
  bid,
  edit,
  setEdit,
  editClass,
  onRefetch,
  isEditBy,
}) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [fillAllDetail, setFillAllDetail] = useState(true);
  const [click, setClick] = useState(false);
  const [clickOptional, setClickOptional] = useState(false);
  const [selectOptions, setSelectOptions] = useState([]);
  const [markValidation, setMarkValidation] = useState(false);
  const selectOptionCount = [
    {
      className: 0,
    },
    {
      className: 1,
    },
    {
      className: 2,
    },
    {
      className: 3,
    },
    {
      className: 4,
    },
    {
      className: 5,
    },
  ];
  const [classs, setClasss] = useState(
    (edit && editClass?.className) || t("select_standerd_")
  );
  const [createClass, setCreateClass] = useState({
    mcId: (edit && editClass?.masterClassName) || "",
    classTitle: (edit && editClass?.classTitle) || "",
    classHeadTitle: (edit && editClass?.classHeadTitle) || "",
    sid: (edit && editClass?.classTeacher?._id) || "",
    aggregatePassingPercentage:
      (edit && editClass?.finalReportsSettings?.aggregatePassingPercentage) ||
      "",
    optionalSubjectCount:
      (edit && editClass?.optionalSubjectCount) ||
      t("select_number_of_subject"),
  });
  const [assignHead, setAssignHead] = useState(false);
  const [assignHeadStaff, setAssignHeadStaff] = useState(
    edit && editClass?.classTeacher
  );

  const { allClassMaster } = useOneDepartmentAllClassMaster({
    data: {
      id: id,
      did: did,
    },
    skip: !id ? !id : !did,
  });
  const [addClass] = useOneDepartmentAddClass();
  const [classEdit] = useOneClassEdit();
  const { oneDepartmentRefetch } = useOneViewDepartment({
    did: did,
    skip: !did,
  });

  //FOr edit of class detail
  useEffect(() => {
    if (edit && editClass) {
      setCreateClass({
        mcId: editClass?.masterClassName || "",
        classTitle: editClass?.classTitle || "",
        classHeadTitle: editClass?.classHeadTitle || "",
        sid: editClass?.classTeacher?._id || "",
        aggregatePassingPercentage:
          editClass?.finalReportsSettings?.aggregatePassingPercentage || 0,
        optionalSubjectCount:
          editClass?.optionalSubjectCount || t("select_number_of_subject"),
      });
      setClasss(editClass?.className || "Please select standard");
      setAssignHeadStaff(editClass?.classTeacher);
    }
  }, [edit, editClass]);

  useEffect(() => {
    if (allClassMaster?.classMaster) {
      setSelectOptions(allClassMaster?.classMaster);
    }
  }, [allClassMaster]);
  const switchClass = (option) => {
    setClasss(option.className);
    setCreateClass({ ...createClass, mcId: option._id });
    setFillAllDetail(true);
  };
  const switchOptionalCount = (option) => {
    setCreateClass({ ...createClass, optionalSubjectCount: option.className });
    setFillAllDetail(true);
  };
  const classheadSelect = (assing) => {
    setAssignHeadStaff(assing);
    setCreateClass({ ...createClass, sid: assing._id });
    setFillAllDetail(true);
  };

  const classSubmitHandler = () => {
    if (
      createClass.mcId &&
      createClass.classTitle &&
      createClass.classHeadTitle
      //  &&
      // createClass.sid
    ) {
      setDisabled(true);
      if (!edit) {
        addClass({
          classCreate: {
            mcId: createClass.mcId,
            classTitle: createClass.classTitle,
            classHeadTitle: createClass.classHeadTitle,
            sid: createClass.sid,
            aggregatePassingPercentage:
              createClass.aggregatePassingPercentage || 0,
            optionalSubjectCount:
              createClass.optionalSubjectCount === t("select_number_of_subject")
                ? 0
                : +createClass.optionalSubjectCount,
          },
          id: id,
          did: did,
          bid: bid,
        })
          .then(() => {
            hideModal(false);
            setDisabled(false);
            oneDepartmentRefetch();
            setCreateClass({
              mcId: "",
              classTitle: "",
              classHeadTitle: "",
              sid: "",
              aggregatePassingPercentage: 0,
              optionalSubjectCount:
                "Please select no. of subjects one can choose",
            });
            setAssignHeadStaff("");
          })
          .catch({});
      } else {
        const classDetail = {
          mcId:
            // editClass?.masterClassName === createClass.mcId
            //   ? ""
            //   :
            createClass.mcId,
          classTitle:
            editClass?.classTitle === createClass.classTitle
              ? ""
              : createClass.classTitle,
          classHeadTitle:
            editClass?.classHeadTitle === createClass.classHeadTitle
              ? ""
              : createClass.classHeadTitle,
          classTeacher:
            editClass?.classTeacher?._id === createClass.sid
              ? ""
              : createClass.sid,
          aggregatePassingPercentage: +createClass.aggregatePassingPercentage,
          optionalSubjectCount:
            createClass.optionalSubjectCount === t("select_number_of_subject")
              ? 0
              : +createClass.optionalSubjectCount,
        };
        classEdit({
          classDetail: classDetail,
          cid: editClass?._id,
        })
          .then(() => {
            hideModal(false);
            setDisabled(false);
            setEdit(false);
            oneDepartmentRefetch();
            if (isEditBy === "DEPARTMENT_HEAD") onRefetch();
            setCreateClass({
              mcId: "",
              classTitle: "",
              classHeadTitle: "",
              sid: "",
              aggregatePassingPercentage: 0,
              optionalSubjectCount: t("select_number_of_subject"),
            });
            setAssignHeadStaff("");
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
    setClasss(t("select_standerd_"));
    setCreateClass({
      mcId: "",
      classTitle: "",
      classHeadTitle: "",
      sid: "",
      aggregatePassingPercentage: 0,
      optionalSubjectCount: t("select_number_of_subject"),
    });
    setAssignHeadStaff("");
  };
  return (
    <>
      <Dialog open={departmentModal}>
        <div className={style.DModal}>
          <div className={style.title}>
            {!edit ? <h5>{t("add_class_n_place")}</h5> : <h5>Edit Class</h5>}
            <img src="/images/close-post-icon.svg" alt="" onClick={onClose} />
          </div>
          <div hidden={fillAllDetail} className={style.notFound}>
            Please Fill all details to create a Class
          </div>
          <div className={style.item} onClick={() => setClick(!click)}>
            <h6>{t("select_standard_grade_place")}</h6>
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
          <div className={style.input}>
            <h6>{t("class_name")}</h6>
            <input
              type="text"
              value={createClass.classTitle}
              onChange={(e) => {
                if (e.target.value?.length <= 45) {
                  setCreateClass({
                    ...createClass,
                    classTitle: e.target.value,
                  });
                  setFillAllDetail(true);
                }
              }}
              placeholder="e.g. 6th A / FY BSC"
              required
            />
            <StringLength maxLength={45} valueLength={createClass.classTitle} />
          </div>

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
                  : `${t("assign_chead")} ${t("optional")}`}
              </h6>
              <p>{t("search_from_joined_list")}</p>
            </div>
          </div>

          <div className={style.input}>
            <h6>{t("give_chead_title")}</h6>
            <input
              type="text"
              value={createClass.classHeadTitle}
              onChange={(e) => {
                if (e.target.value?.length <= 40) {
                  setCreateClass({
                    ...createClass,
                    classHeadTitle: e.target.value,
                  });
                  setFillAllDetail(true);
                }
              }}
              required
              placeholder={t("class_head_example")}
            />
            <StringLength
              maxLength={40}
              valueLength={createClass.classHeadTitle}
            />
          </div>
          <div className={style.input}>
            <h6>
              {t("pass_percentage")} {t("optional")}
            </h6>
            <input
              type="text"
              value={createClass.aggregatePassingPercentage}
              onChange={(e) => {
                if (+e.target.value <= 100) {
                  setCreateClass({
                    ...createClass,
                    aggregatePassingPercentage: +e.target.value,
                  });
                  setFillAllDetail(true);
                } else {
                  setMarkValidation(true);
                }
              }}
              placeholder="E.g. 34"
            />
            {markValidation && (
              <MarkValue message={"Mark is not greater than 100"} />
            )}
          </div>
          <div
            className={style.item}
            onClick={() => setClickOptional((pre) => !pre)}
          >
            <h6>{t("optional_subject")}</h6>
            <div className={style.select}>
              <p>{createClass.optionalSubjectCount}</p>
              <img src="/images/select-icon.svg" alt="" />
            </div>

            {clickOptional && (
              <div className={style.tooltip}>
                <Options
                  customStyle={{ top: "561px", right: "-51px" }}
                  options={selectOptionCount}
                  switchOption={switchOptionalCount}
                />
              </div>
            )}
          </div>
          <button
            className={style.btn}
            onClick={classSubmitHandler}
            disabled={disabled}
          >
            {!edit ? <p>{t("create")}</p> : <p>Update</p>}

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
            title={t("assign_chead")}
            onClose={() => setAssignHead((pre) => !pre)}
            instituteId={id}
            viewAs="ADMISSION_ADMIN"
          />
        ) : (
          <AssignStaffModal
            assignHead={assignHead}
            headSelect={classheadSelect}
            title={t("assign_chead")}
            onClose={() => setAssignHead((pre) => !pre)}
          />
        ))}
    </>
  );
}

export default CreateClass;
