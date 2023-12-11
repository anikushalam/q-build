import React, { useState, useEffect } from "react";
import style from "./CreateDepartment.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../AddDisplay.css";
import { imageShowUrl } from "../../../../services/BaseUrl";
import {
  useAddNewDepartment,
  useAllDepartment,
  useOneDepartmenteEdit,
} from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import LoaderButton from "../../../../Loader/LoaderButton";
import { useDispatch, useSelector } from "react-redux";
import { idChangeAction } from "../../../../redux/store/department-slice";
import AssignStaffModal from "../../../../Department/Institute/AssignStaff/AssignStaffModal";
import StringLength from "../../../../Custom/Validation/StringLength";
function CreateDepartment({
  departmentModal,
  hideModal,
  edit,
  setEdit,
  editDepartment,
  onReftech,
}) {
  const id = useSelector((state) => state.idChange.id);
  const [assignHead, setAssignHead] = useState(false);
  const [assignHeadStaff, setAssignHeadStaff] = useState(
    edit && editDepartment?.dHead
  );
  const [disabled, setDisabled] = useState(false);
  const [fillAllDetail, setFillAllDetail] = useState(true);
  const { t } = useTranslation();
  const [createClass, setCreateClass] = useState({
    dName: (edit && editDepartment?.dName) || "",
    dTitle: (edit && editDepartment?.dTitle) || "",
    sid: (edit && editDepartment?.dHead?._id) || "",
    gr_initials: (edit && editDepartment?.gr_initials) || "",
  });
  const { allDepartmentRefetch } = useAllDepartment({
    id: id,
    skip: !id,
  });
  const [addDepartment] = useAddNewDepartment();
  const [departmentEdit] = useOneDepartmenteEdit();
  const dispatch = useDispatch();
  //FOr edit of department detail
  useEffect(() => {
    if (edit && editDepartment) {
      setCreateClass({
        dName: editDepartment?.dName || "",
        dTitle: editDepartment?.dTitle || "",
        sid: editDepartment?.dHead?._id || "",
        gr_initials: editDepartment?.gr_initials || "",
      });
      setAssignHeadStaff(editDepartment?.dHead);
    }
  }, [edit, editDepartment]);

  const classheadSelect = (assing) => {
    setAssignHeadStaff(assing);
    setCreateClass({ ...createClass, sid: assing._id });
    setFillAllDetail(true);
  };

  const classSubmitHandler = () => {
    if (
      // createClass.sid &&
      createClass.dName &&
      createClass.dTitle
      // &&
      // createClass.gr_initials
    ) {
      setDisabled(true);

      if (!edit) {
        addDepartment({
          departmentCreate: createClass,
          id: id,
        })
          .then((res) => {
            if (res) {
              hideModal(false);
              allDepartmentRefetch();
              setDisabled(false);
              setCreateClass({
                dName: "",
                dTitle: "",
                sid: "",
                gr_initials: "",
              });
              setAssignHeadStaff("");
            }
          })
          .catch({});
      } else {
        const departmentDetail = {
          dName:
            editDepartment?.dName === createClass.dName
              ? ""
              : createClass.dName,
          dTitle:
            editDepartment?.dTitle === createClass.dTitle
              ? ""
              : createClass.dTitle,
          sid:
            editDepartment?.dHead?._id === createClass.sid
              ? ""
              : createClass.sid,
          gr_initials:
            editDepartment?.gr_initials === createClass.gr_initials
              ? ""
              : createClass.gr_initials,
        };
        departmentEdit({
          department: departmentDetail,
          did: editDepartment?._id,
        })
          .then((res) => {
            if (res) {
              dispatch(
                idChangeAction.editOneDepartment({
                  did: editDepartment?._id,
                  dName: createClass.dName,
                  dTitle: createClass.dTitle,
                  dHead: assignHeadStaff,
                })
              );
              onReftech();
              hideModal(false);
              setDisabled(false);
              setCreateClass({
                dName: "",
                dTitle: "",
                sid: "",
                gr_initials: "",
              });
              setAssignHeadStaff("");
            }
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
    setCreateClass({
      dName: "",
      dTitle: "",
      sid: "",
      gr_initials: "",
    });
    setAssignHeadStaff("");
  };

  return (
    <>
      <Dialog open={departmentModal}>
        <div className={style.DModal}>
          <div className={style.title}>
            {!edit ? (
              <h5>{t("add_new_dept")}</h5>
            ) : (
              <h5>{t("edit_department")}</h5>
            )}
            <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
          </div>
          <div hidden={fillAllDetail} className={style.notFound}>
            {t("fill_all_the_details")}
          </div>
          <div className={style.input}>
            <h6>{t("department_name")}</h6>
            <input
              type="text"
              value={createClass.dName}
              onChange={(e) => {
                if (e.target.value?.length <= 45) {
                  setCreateClass({
                    ...createClass,
                    dName: e.target.value,
                  });
                  setFillAllDetail(true);
                }
              }}
              required
              placeholder={t("dept_example")}
            />
            <StringLength maxLength={45} valueLength={createClass.dName} />
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
                      assignHeadStaff.staffMiddleName
                        ? assignHeadStaff.staffMiddleName
                        : ""
                    } ${assignHeadStaff?.staffLastName}`
                  : `${t("assign_dhead")} ${t("optional")}`}
              </h6>
              <p>{t("search_from_joined_list")}</p>
            </div>
          </div>
          <div className={style.input}>
            <h6>{t("give_dhead_title")}</h6>
            <input
              type="text"
              value={createClass.dTitle}
              onChange={(e) => {
                if (e.target.value?.length <= 40) {
                  setCreateClass({
                    ...createClass,
                    dTitle: e.target.value,
                  });
                  setFillAllDetail(true);
                }
              }}
              placeholder={t("dhead_example")}
              required
            />
            <StringLength maxLength={40} valueLength={createClass.dTitle} />
          </div>
          <div className={style.input}>
            <h6>{t("department_initials")}</h6>
            <input
              type="text"
              value={createClass.gr_initials}
              onChange={(e) => {
                if (e.target.value?.length <= 10) {
                  setCreateClass({
                    ...createClass,
                    gr_initials: e.target.value,
                  });
                  setFillAllDetail(true);
                }
              }}
              placeholder={t("department_initials_placeholder")}
              required
            />
            <StringLength
              maxLength={10}
              valueLength={createClass.gr_initials}
            />
          </div>
          <button
            className={style.btn}
            onClick={classSubmitHandler}
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

      {assignHead && (
        <AssignStaffModal
          assignHead={assignHead}
          headSelect={classheadSelect}
          title={t("assign-d-head")}
          onClose={() => setAssignHead((pre) => !pre)}
        />
      )}
    </>
  );
}

export default CreateDepartment;
