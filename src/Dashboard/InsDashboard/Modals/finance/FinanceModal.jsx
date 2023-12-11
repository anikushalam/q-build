import React, { useState } from "react";
import { Dialog, Divider } from "@mui/material";
import style from "./FinanceModal.module.css";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useActivateFinanceHeadMutation } from "../../../../services/financeAPI";
import { financeChangeAction } from "../../../../redux/store/finance-slice";
import { useDispatch, useSelector } from "react-redux";
import AssignStaffModal from "../../../../Department/Institute/AssignStaff/AssignStaffModal";
import QLoader from "../../../../Loader/QLoader";
import { useEditFinanceHead } from "../../../../hooks/institute/institute-finance-api";

function FinanceModal({
  financeModal,
  hideModal,
  edit,
  financeManagerName,
  onParentRefetch,
}) {
  const dispatch = useDispatch();
  const [assignHead, setAssignHead] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { t } = useTranslation();
  const [assignHeadStaff, setAssignHeadStaff] = useState("");
  const ids = useSelector((state) => state.idChange);
  const [financeHeadData] = useActivateFinanceHeadMutation();
  const [editFinanceHead] = useEditFinanceHead();
  const navigate = useNavigate();

  const ActivateFinanceQuery = () => {
    // if (assignHeadStaff?._id !== "") {
    setDisabled(true);
    financeHeadData({
      id: ids.id,
      fActivate: {
        sid: assignHeadStaff?._id,
      },
    }).then((res) => {
      if (res.data.status) {
        dispatch(
          financeChangeAction.financeQuery({
            fid: res.data.finance,
          })
        );
        setDisabled(false);
        navigate(`/q/${ids.loginProfile?.username}/finance`);
      }
    });
    // }
  };

  const onEditFinanceHead = () => {
    if (financeManagerName?._id && assignHeadStaff?._id) {
      setDisabled(true);
      editFinanceHead({
        osid: financeManagerName?._id,
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
        <Dialog open={financeModal} onClose={() => hideModal(false)}>
          <div className={style.financeModal}>
            <div className={style.financeModalhead}>
              <h6>{edit ? t("edit_finance_dept") : t("active_finance")}</h6>
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
                  src="/images/finance/assign-manager.svg"
                  alt=""
                />
              )}

              {(assignHeadStaff || financeManagerName) && (
                <div
                  className={style.sidebarbottomitem}
                  onClick={() => setAssignHead(true)}
                >
                  <img
                    alt="not found"
                    src={
                      assignHeadStaff?.staffProfilePhoto ||
                      financeManagerName?.staffProfilePhoto
                        ? `${imageShowUrl}/${
                            assignHeadStaff.staffProfilePhoto
                              ? assignHeadStaff.staffProfilePhoto
                              : financeManagerName?.staffProfilePhoto
                          }`
                        : "/images/finance/assign-manager.svg"
                    }
                  />
                  <div>
                    <p className={style.namee}>{`${
                      assignHeadStaff?.staffFirstName
                        ? assignHeadStaff?.staffFirstName
                        : financeManagerName?.staffFirstName
                    } 
                    ${
                      assignHeadStaff?.staffMiddleName
                        ? assignHeadStaff?.staffMiddleName
                        : assignHeadStaff?.staffFirstName
                        ? ""
                        : financeManagerName?.staffMiddleName
                        ? financeManagerName?.staffMiddleName
                        : ""
                    }
                    ${
                      assignHeadStaff?.staffLastName
                        ? assignHeadStaff?.staffLastName
                        : financeManagerName?.staffLastName
                    } `}</p>
                    <p className={style.desig}>
                      No.{" "}
                      {assignHeadStaff?.staffROLLNO
                        ? assignHeadStaff?.staffROLLNO
                        : financeManagerName?.staffROLLNO}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className={style.financeModalfooter}>
              {!edit && (
                <div className={style.activebtn} onClick={ActivateFinanceQuery}>
                  {t("activate")}
                </div>
              )}

              {edit && assignHeadStaff?._id && (
                <div className={style.activebtn} onClick={onEditFinanceHead}>
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
          title={t("secect_finance_head")}
          onClose={() => setAssignHead((pre) => !pre)}
          disabledId={financeManagerName?._id}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
}

export default FinanceModal;
