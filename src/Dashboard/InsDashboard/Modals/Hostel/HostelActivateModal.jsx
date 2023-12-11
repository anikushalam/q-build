import React, { useState } from "react";
import { Dialog, Divider } from "@mui/material";
import style from "../finance/FinanceModal.module.css";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AssignStaffModal from "../../../../Department/Institute/AssignStaff/AssignStaffModal";
import QLoader from "../../../../Loader/QLoader";
import { useSelector } from "react-redux";
import {
  useHostelActivate,
  useHostelEidtActivate,
} from "../../../../hooks/member_tab/hostel-api";

const HostelActivateModal = ({
  hostelModal,
  hideModal,
  edit,
  hostelManagerName,
  onParentRefetch,
}) => {
  const { t } = useTranslation();
  const [assignHead, setAssignHead] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [assignHeadStaff, setAssignHeadStaff] = useState("");
  const ids = useSelector((state) => state.idChange);
  const [hostelActivate] = useHostelActivate();
  const [hostelEidtActivate] = useHostelEidtActivate();
  const navigate = useNavigate();

  const onActivateHostel = () => {
    // if (assignHeadStaff?._id !== "") {
    setDisabled(true);
    hostelActivate({
      id: ids.id,
      fActivate: {
        sid: assignHeadStaff?._id,
      },
    })
      .then((res) => {
        setDisabled(false);
        if (res.data.status) {
          navigate(`/q/${ids.loginProfile?.username}/hostel`, {
            state: {
              hid: res.data.hostel,
            },
          });
        }
      })
      .catch({});
    // }
  };

  const onEditHostel = () => {
    if (assignHeadStaff?._id && hostelManagerName?._id) {
      setDisabled(true);
      hostelEidtActivate({
        osid: hostelManagerName?._id,
        nsid: assignHeadStaff?._id,
      })
        .then(() => {
          onParentRefetch();
          setDisabled(false);
          hideModal();
        })
        .catch({});
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
        <Dialog open={hostelModal} onClose={() => hideModal(false)}>
          <div className={style.financeModal}>
            <div className={style.financeModalhead}>
              <h6>{edit ? t("edit_hostel_dept") : t("active_hostel")}</h6>
              <img
                onClick={() => hideModal(false)}
                src="/images/close-post-icon.svg"
                alt=""
              />
            </div>
            <Divider />
            <div className={style.financeModalbody}>
              {!assignHeadStaff && !edit && (
                // <img
                //   className={style.assignManager}
                //   onClick={() => setAssignHead(true)}
                //   src="/images/finance/assign-manager.svg"
                //   alt=""
                // />
                <div
                  className={style.assignDesignation}
                  onClick={() => setAssignHead(true)}
                >
                  <img
                    className={style.assignManager}
                    src="/images/sports/avatar-circle.svg"
                    alt=""
                  />
                  <div>
                    <h6>{t("assign_hostel_head")}</h6>
                    <p>{t("search_from_joined_list")}</p>
                  </div>
                </div>
              )}

              {(assignHeadStaff || hostelManagerName) && (
                <div
                  className={style.sidebarbottomitem}
                  onClick={() => setAssignHead(true)}
                >
                  <img
                    alt="not found"
                    src={
                      assignHeadStaff?.staffProfilePhoto ||
                      hostelManagerName?.staffProfilePhoto
                        ? `${imageShowUrl}/${
                            assignHeadStaff.staffProfilePhoto ??
                            hostelManagerName?.staffProfilePhoto
                          }`
                        : "/images/finance/assign-manager.svg"
                    }
                  />
                  <div>
                    <p className={style.namee}>{`${
                      assignHeadStaff?.staffFirstName ??
                      hostelManagerName?.staffFirstName ??
                      ""
                    } 
                    ${
                      assignHeadStaff?.staffMiddleName ??
                      hostelManagerName?.staffMiddleName ??
                      ""
                    }
                    ${
                      assignHeadStaff?.staffLastName ??
                      hostelManagerName?.staffLastName ??
                      ""
                    } `}</p>
                    <p className={style.desig}>
                      No.{" "}
                      {assignHeadStaff?.staffROLLNO ??
                        hostelManagerName?.staffROLLNO ??
                        ""}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className={style.financeModalfooter}>
              {!edit && (
                // <Link to={`/q/finance`}>
                <div className={style.activebtn} onClick={onActivateHostel}>
                  {t("activate")}
                </div>
                // </Link>
              )}

              {edit && assignHeadStaff?._id && (
                <div className={style.activebtn} onClick={onEditHostel}>
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
          title={t("secect_hostel_head")}
          onClose={() => setAssignHead((pre) => !pre)}
          disabledId={hostelManagerName?._id}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default HostelActivateModal;
