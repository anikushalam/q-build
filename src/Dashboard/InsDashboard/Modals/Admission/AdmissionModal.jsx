import React, { useState } from "react";
import { Dialog, Divider } from "@mui/material";
import style from "./AdmissionModal.module.css";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { admissionChangeAction } from "../../../../redux/store/admission-slice";
import AssignStaffModal from "../../../../Department/Institute/AssignStaff/AssignStaffModal";
import QLoader from "../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import {
  useAssignAdmissionHead,
  useEditAdmission,
} from "../../../../hooks/member_tab/admission-api";

function AdmissionModal({
  admissionModal,
  hideModal,
  edit,
  admissionManagerName,
  onParentRefetch,
}) {
  const dispatch = useDispatch();
  const [assignHead, setAssignHead] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [assignHeadStaff, setAssignHeadStaff] = useState("");
  const ids = useSelector((state) => state.idChange);
  const [assignAdmissionHead] = useAssignAdmissionHead();
  const [editAdmission] = useEditAdmission();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const ActivateAdmissionQuery = () => {
    // if (assignHeadStaff?._id !== "") {
    setDisabled(true);
    assignAdmissionHead({
      id: ids.id,
      fActivate: {
        sid: assignHeadStaff?._id,
      },
    }).then((res) => {
      if (res.data.status) {
        dispatch(
          admissionChangeAction.admissionQuery({
            aid: res.data.admission,
          })
        );
        setDisabled(false);
        navigate(`/q/${ids.loginProfile?.username}/admission`);
      }
    });
    // }
  };

  const onEditAdmissionHead = () => {
    if (assignHeadStaff?._id && admissionManagerName?._id) {
      setDisabled(true);
      editAdmission({
        osid: admissionManagerName?._id,
        nsid: assignHeadStaff?._id,
      }).then(() => {
        onParentRefetch();
        setDisabled(false);
        hideModal();
      });
    } else {
      hideModal();
    }
  };
  const classheadSelect = (assing) => {
    setAssignHeadStaff(assing);
  };

  return (
    <>
      {!disabled && (
        <Dialog open={admissionModal} onClose={() => hideModal(false)}>
          <div className={style.financeModal}>
            <div className={style.financeModalhead}>
              <h6>
                {edit ? t("edit_asmission_dept") : t("activete_admission_dept")}
              </h6>
              <img
                onClick={() => hideModal(false)}
                src="/images/close-post-icon.svg"
                alt=""
              />
            </div>
            <Divider />
            <div className={style.financeModalbody}>
              {!assignHeadStaff && !edit && (
                <img
                  className={style.assignManager}
                  onClick={() => setAssignHead(true)}
                  src="/images/admin/activate-admission.svg"
                  alt=""
                />
              )}

              {(assignHeadStaff || admissionManagerName) && (
                <div
                  className={style.sidebarbottomitem}
                  onClick={() => setAssignHead(true)}
                >
                  <img
                    alt="not found"
                    src={
                      assignHeadStaff?.staffProfilePhoto ||
                      admissionManagerName?.staffProfilePhoto
                        ? `${imageShowUrl}/${
                            assignHeadStaff.staffProfilePhoto
                              ? assignHeadStaff.staffProfilePhoto
                              : admissionManagerName?.staffProfilePhoto
                          }`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                  />
                  <div>
                    <p className={style.namee}>{`${
                      assignHeadStaff?.staffFirstName
                        ? assignHeadStaff?.staffFirstName
                        : admissionManagerName?.staffFirstName
                    } 
                    ${
                      assignHeadStaff?.staffMiddleName
                        ? assignHeadStaff?.staffMiddleName
                        : assignHeadStaff?.staffFirstName
                        ? ""
                        : admissionManagerName?.staffMiddleName
                        ? admissionManagerName?.staffMiddleName
                        : ""
                    }
                    ${
                      assignHeadStaff?.staffLastName
                        ? assignHeadStaff?.staffLastName
                        : admissionManagerName?.staffLastName
                    } `}</p>
                    <p className={style.desig}>
                      No.{" "}
                      {assignHeadStaff?.staffROLLNO
                        ? assignHeadStaff?.staffROLLNO
                        : admissionManagerName?.staffROLLNO}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className={style.financeModalfooter}>
              {!edit && (
                <div
                  className={style.activebtn}
                  onClick={ActivateAdmissionQuery}
                >
                  {t("activate")}
                </div>
              )}
              {edit && assignHeadStaff?._id && (
                <div className={style.activebtn} onClick={onEditAdmissionHead}>
                  {t("update")}
                </div>
              )}
            </div>
          </div>
        </Dialog>
      )}

      {assignHead && (
        <AssignStaffModal
          assignHead={assignHead}
          headSelect={classheadSelect}
          title="Select Admission Admin"
          onClose={() => setAssignHead((pre) => !pre)}
          disabledId={admissionManagerName?._id}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
}

export default AdmissionModal;
