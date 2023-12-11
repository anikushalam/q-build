import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAddFeesStructure } from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";
import AddAdmissionFees from "./AddAdmissionFees";
import AddFeeHead from "./AddFeeHead";
import ApplicationPreview from "./ApplicationPreview";
import style from "./FeesStructure.module.css";
import PopupWrapper from "./PopupWrapper";
import SelectCategoryMaster from "./SelectCategoryMaster";
import SelectFeeHead from "./SelectFeeHead";

const AddFeesStructure = ({
  financeId,
  departmentId,
  onRefetch,
  onClose,
  instituteId,
  openStructureMenu,
  openAs,
  onEdit,
  totalHead,
  flowAs,
}) => {
  const { t } = useTranslation();
  const [activePopupIndex, setActivePopupIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [feesStructure, setFeesStructure] = useState({
    category_master:
      openAs === "EDIT" ? openStructureMenu?.category_master?._id : "",
    class_master:
      openAs === "EDIT" ? openStructureMenu?.class_master?._id : null,
    // due_date: openAs === "EDIT" ? openStructureMenu?.due_date : "",
    total_admission_fees:
      openAs === "EDIT" ? openStructureMenu?.total_admission_fees : "",
    applicable_fees:
      openAs === "EDIT" ? openStructureMenu?.applicable_fees : "",
    total_installments:
      openAs === "EDIT" ? openStructureMenu?.total_installments : "",
    //not come -15-05-2023 comment
    structure_name: openAs === "EDIT" ? openStructureMenu?.structure_name : "",
    batch_master: openAs === "EDIT" ? openStructureMenu?.batch_master?._id : "",
    unit_master: openAs === "EDIT" ? openStructureMenu?.unit_master?._id : null,
    vehicle_master:
      openAs === "EDIT" ? openStructureMenu?.unit_master?._id : null,
  });
  const [allInstallment, setAllInstallment] = useState([]);
  const [master, setMaster] = useState({
    category:
      openAs === "EDIT"
        ? openStructureMenu?.category_master?.category_name
        : "",
    standard:
      openAs === "EDIT" ? openStructureMenu?.class_master?.className : "",
    batch_master:
      openAs === "EDIT" ? openStructureMenu?.batch_master?.batchName : "",
    unit_master:
      openAs === "EDIT"
        ? openStructureMenu?.batch_master?.hostel_unit_name
        : "",
    vehicle_master:
      openAs === "EDIT"
        ? openStructureMenu?.batch_master?.hostel_unit_name
        : "",
  });
  const [feeHead, setFeeHead] = useState([]);
  const [FeeHeadAmount, setFeeHeadAmount] = useState(
    openAs === "EDIT" ? totalHead : 0
  );
  const [addFeesStructure] = useAddFeesStructure();
  const onSetNewIndex = (val) => {
    setActivePopupIndex(val);
  };

  useEffect(() => {
    if (openAs === "EDIT") {
      setFeesStructure({
        category_master:
          openAs === "EDIT" ? openStructureMenu?.category_master?._id : "",
        class_master:
          openAs === "EDIT" ? openStructureMenu?.class_master?._id : "",
        // due_date: openAs === "EDIT" ? openStructureMenu?.due_date : "",
        total_admission_fees:
          openAs === "EDIT" ? openStructureMenu?.total_admission_fees : "",
        applicable_fees:
          openAs === "EDIT" ? openStructureMenu?.applicable_fees : "",
        total_installments:
          openAs === "EDIT" ? openStructureMenu?.total_installments : "",
        structure_name:
          openAs === "EDIT" ? openStructureMenu?.structure_name : "",
        batch_master:
          openAs === "EDIT" ? openStructureMenu?.batch_master?._id : "",
        unit_master:
          openAs === "EDIT" ? openStructureMenu?.unit_master?._id : null,
        vehicle_master:
          openAs === "EDIT" ? openStructureMenu?.unit_master?._id : null,
      });
      setMaster({
        category:
          openAs === "EDIT"
            ? openStructureMenu?.category_master?.category_name
            : "",
        standard:
          openAs === "EDIT" ? openStructureMenu?.class_master?.className : "",
        batch_master:
          openAs === "EDIT" ? openStructureMenu?.batch_master?.batchName : "",
        unit_master:
          openAs === "EDIT"
            ? openStructureMenu?.batch_master?.hostel_unit_name
            : "",
        vehicle_master:
          openAs === "EDIT"
            ? openStructureMenu?.batch_master?.hostel_unit_name
            : "",
      });
      let fHeads = [];
      for (let head of openStructureMenu?.fees_heads) {
        let obj = {
          created_at: head?.created_at,
          head_amount: head?.head_amount,
          head_name: head?.head_name,
          master: head?.master,
          _id: head?._id,
        };
        fHeads.push(obj);
      }
      setFeeHead(fHeads);
      setFeeHeadAmount(openAs === "EDIT" ? totalHead : 0);
      let install = [];
      if (openStructureMenu?.one_installments?.fees) {
        install.push({
          fees: openStructureMenu?.one_installments?.fees,
          // dueDate: openStructureMenu?.one_installments?.dueDate,
        });
      }
      if (openStructureMenu?.two_installments?.fees) {
        install.push({
          fees: openStructureMenu?.two_installments?.fees,
          // dueDate: openStructureMenu?.two_installments?.dueDate,
        });
      }
      if (openStructureMenu?.three_installments?.fees) {
        install.push({
          fees: openStructureMenu?.three_installments?.fees,
          // dueDate: openStructureMenu?.three_installments?.dueDate,
        });
      }
      if (openStructureMenu?.four_installments?.fees) {
        install.push({
          fees: openStructureMenu?.four_installments?.fees,
          // dueDate: openStructureMenu?.four_installments?.dueDate,
        });
      }
      if (openStructureMenu?.five_installments?.fees) {
        install.push({
          fees: openStructureMenu?.five_installments?.fees,
          // dueDate: openStructureMenu?.five_installments?.dueDate,
        });
      }
      if (openStructureMenu?.six_installments?.fees) {
        install.push({
          fees: openStructureMenu?.six_installments?.fees,
          // dueDate: openStructureMenu?.six_installments?.dueDate,
        });
      }
      if (openStructureMenu?.seven_installments?.fees) {
        install.push({
          fees: openStructureMenu?.seven_installments?.fees,
          // dueDate: openStructureMenu?.seven_installments?.dueDate,
        });
      }
      if (openStructureMenu?.eight_installments?.fees) {
        install.push({
          fees: openStructureMenu?.eight_installments?.fees,
          // dueDate: openStructureMenu?.eight_installments?.dueDate,
        });
      }
      if (openStructureMenu?.nine_installments?.fees) {
        install.push({
          fees: openStructureMenu?.nine_installments?.fees,
          // dueDate: openStructureMenu?.nine_installments?.dueDate,
        });
      }
      if (openStructureMenu?.ten_installments?.fees) {
        install.push({
          fees: openStructureMenu?.ten_installments?.fees,
          // dueDate: openStructureMenu?.ten_installments?.dueDate,
        });
      }
      if (openStructureMenu?.eleven_installments?.fees) {
        install.push({
          fees: openStructureMenu?.eleven_installments?.fees,
          // dueDate: openStructureMenu?.eleven_installments?.dueDate,
        });
      }
      if (openStructureMenu?.tweleve_installments?.fees) {
        install.push({
          fees: openStructureMenu?.tweleve_installments?.fees,
          // dueDate: openStructureMenu?.tweleve_installments?.dueDate,
        });
      }
      setAllInstallment(install);
    }
  }, [openAs, openStructureMenu]);
  const onBackWithArrowLeft = () => {
    if (activePopupIndex === 1) onSetNewIndex(0);
    else if (activePopupIndex === 2) onSetNewIndex(1);
    else if (activePopupIndex === 3) onSetNewIndex(2);
    else if (activePopupIndex === 4) onSetNewIndex(2);
    else if (activePopupIndex === 6) onSetNewIndex(3);
    else {
    }
  };

  const onAddFeesStructure = (asEdit) => {
    if (openAs === "EDIT") {
      onEdit(
        {
          ...feesStructure,
          heads: feeHead,
        },
        asEdit
      );
    } else {
      setDisabled((pre) => !pre);
      addFeesStructure({
        fid: financeId,
        flow: flowAs,
        createFeesStructure: {
          ...feesStructure,
          heads: feeHead,
          did: flowAs === "Finance_Manager" ? departmentId : "",
          hid: flowAs === "Hostel_Manager" ? departmentId : "",
          tid: flowAs === "Transport_Manager" ? departmentId : "",
        },
      })
        .then(() => {
          // console.info("thisa ds", res.data);
          onRefetch();
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    }
  };
  return (
    <PopupWrapper onClose={() => {}}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
          minHeight: "10rem",
          maxHeight: "35rem",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        {activePopupIndex !== 5 && (
          <div className={style.add_category_modal_title}>
            {activePopupIndex === 0 ? (
              <h6>
                {openAs === "EDIT"
                  ? t("edit_fees_structure")
                  : t("add_new_fees_structure")}
              </h6>
            ) : (
              <section className={style.add_category_modal_title_left}>
                <img
                  src="/images/arrow-left-fees-icon.svg"
                  onClick={onBackWithArrowLeft}
                  alt=""
                />
                {activePopupIndex === 1 ? (
                  <h6>{t("admission_fees")}</h6>
                ) : activePopupIndex === 2 ? (
                  <h6>{t("fee_heads")}</h6>
                ) : activePopupIndex === 6 ? (
                  <h6>{t("edit_fee_structure_type")}</h6>
                ) : (
                  <h6>{t("application_preview")}</h6>
                )}
              </section>
            )}

            <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
          </div>
        )}

        {activePopupIndex === 0 && (
          <SelectCategoryMaster
            departmentId={departmentId}
            instituteId={instituteId}
            financeId={financeId}
            setFeesStructure={setFeesStructure}
            feesStructure={feesStructure}
            onSetNewIndex={onSetNewIndex}
            setMaster={setMaster}
            master={master}
            flowAs={flowAs}
          />
        )}
        {activePopupIndex === 1 && (
          <AddAdmissionFees
            setFeesStructure={setFeesStructure}
            onSetNewIndex={onSetNewIndex}
            setAllInstallment={setAllInstallment}
            feesStructure={feesStructure}
            allInstallment={allInstallment}
            flowAs={flowAs}
          />
        )}
        {(activePopupIndex === 2 || activePopupIndex === 4) && (
          <AddFeeHead
            departmentId={departmentId}
            instituteId={instituteId}
            financeId={financeId}
            setFeesStructure={setFeesStructure}
            feesStructure={feesStructure}
            onSetNewIndex={onSetNewIndex}
            allInstallment={allInstallment}
            setFeeHead={setFeeHead}
            setFeeHeadAmount={setFeeHeadAmount}
            feeHead={feeHead}
            FeeHeadAmount={FeeHeadAmount}
            activePopupIndex={activePopupIndex}
            flowAs={flowAs}
          />
        )}
        {(activePopupIndex === 3 || activePopupIndex === 6) && (
          <ApplicationPreview
            departmentId={departmentId}
            instituteId={instituteId}
            financeId={financeId}
            setFeesStructure={setFeesStructure}
            feesStructure={feesStructure}
            onSetNewIndex={onSetNewIndex}
            allInstallment={allInstallment}
            master={master}
            feeHead={feeHead}
            FeeHeadAmount={FeeHeadAmount}
            onAddFeesStructure={onAddFeesStructure}
            openAs={openAs}
            activePopupIndex={activePopupIndex}
            flowAs={flowAs}
          />
        )}
        {activePopupIndex === 5 && (
          <SelectFeeHead
            financeId={financeId}
            onClose={() => onSetNewIndex(2)}
            setFeeHead={setFeeHead}
          />
        )}
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AddFeesStructure;
