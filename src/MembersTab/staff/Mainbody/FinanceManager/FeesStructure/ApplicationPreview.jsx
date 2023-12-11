import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { onWhichInstallment } from "../../../../../Functions/Finance/Installment";
import JoinFormInputView from "../../../../../JoiningForm/Student/Form/JoinFormInputView";
import style from "./FeesStructure.module.css";
import EditFeeStructureType from "./EditFeeStructureType";
const ApplicationPreview = ({
  master,
  feesStructure,
  allInstallment,
  feeHead,
  FeeHeadAmount,
  onAddFeesStructure,
  openAs,
  onSetNewIndex,
  activePopupIndex,
  flowAs,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState("");
  const onAction = () => {
    if (
      openAs === "EDIT" &&
      flowAs !== "Hostel_Manager" &&
      flowAs !== "Transport_Manager"
    ) {
      onSetNewIndex(6);
    } else {
      onAddFeesStructure("");
    }
  };
  const onActionType = () => {
    if (state) {
      onAddFeesStructure(state);
    }
  };
  return (
    <>
      {activePopupIndex === 3 ? (
        <>
          <JoinFormInputView
            labelText={t("fee_structure_name")}
            value={feesStructure?.structure_name}
            customStyleContainer={{
              width: "100%",
            }}
            // customStyleLabel={{
            //   marginRight: "0",
            // }}
          />
          {master?.batch_master && (
            <JoinFormInputView
              labelText={`${t("batch")}: `}
              value={master?.batch_master}
              customStyleContainer={{
                width: "100%",
              }}
              // customStyleLabel={{
              //   marginRight: "0",
              // }}
            />
          )}
          <JoinFormInputView
            labelText={t("fees_category_name")}
            value={master?.category}
            customStyleContainer={{
              width: "100%",
            }}
            // customStyleLabel={{
            //   marginRight: "0",
            // }}
          />
          {master?.standard ? (
            <JoinFormInputView
              labelText={t("standard_master")}
              value={master?.standard}
              customStyleContainer={{
                width: "100%",
              }}
              //   customStyleLabel={{
              //     marginRight: "0",
              //   }}
            />
          ) : (
            ""
          )}
          {master?.unit_master ? (
            <JoinFormInputView
              labelText={t("hostel_unit")}
              value={master?.unit_master}
              customStyleContainer={{
                width: "100%",
              }}
              //   customStyleLabel={{
              //     marginRight: "0",
              //   }}
            />
          ) : (
            ""
          )}
          {master?.vehicle_master ? (
            <JoinFormInputView
              labelText={t("transport_vehicle")}
              value={master?.vehicle_master}
              customStyleContainer={{
                width: "100%",
              }}
              //   customStyleLabel={{
              //     marginRight: "0",
              //   }}
            />
          ) : (
            ""
          )}

          <section className={style.fees_head_title}>
            <h6>{t("total_fees")}</h6>
            <h6>
              {t("rs")}. {feesStructure?.total_admission_fees ?? 0}
            </h6>
          </section>
          {flowAs === "Transport_Manager" ? null : (
            <section className={style.fees_head_installment}>
              <h6
                style={{
                  color: "#002BBE",
                }}
              >
                {t("applicable_fees_only")}
              </h6>
              <h6
                style={{
                  color: "#002BBE",
                }}
              >
                {t("rs")}. {feesStructure?.applicable_fees ?? 0}
              </h6>
            </section>
          )}

          {allInstallment?.map((install, index) => (
            <section className={style.fees_head_installment} key={index}>
              <h6
                style={{
                  textTransform: "capitalize",
                }}
              >
                {t(onWhichInstallment(index))} {t("installment")}
              </h6>
              <h6>
                {t("rs")}. {install?.fees ?? 0}
              </h6>
            </section>
          ))}
          <section className={style.table_container}>
            <div className={style.table_heading}>
              <h6>{t("fee_heads")}</h6>
              <h6>{t("amount")}</h6>
            </div>
            <div className={style.table_body}>
              {feeHead?.map((feehead, index) => (
                <div className={style.table_body_list} key={index}>
                  <h6>{feehead?.head_name}</h6>
                  <h6>{feehead?.head_amount}</h6>
                </div>
              ))}
            </div>
            <div className={style.table_body}>
              <div
                className={style.table_body_list}
                style={{
                  borderTopColor: "rgba(18, 18, 18, 0.8)",
                  borderTopWidth: "2px",
                  borderTopStyle: "solid",
                  borderBottomColor: "rgba(18, 18, 18, 0.8)",
                  borderBottomWidth: "2px",
                }}
              >
                <h6 className={style.fees_total}>{t("total")}</h6>
                <h6 className={style.fees_total}>{FeeHeadAmount}</h6>
              </div>
            </div>
          </section>

          <button
            className={style.create_fees_structure_btn}
            title="Create Fees"
            onClick={onAction}
            style={{ justifyContent: "center" }}
          >
            {openAs === "EDIT"
              ? flowAs === "Hostel_Manager" || flowAs === "Transport_Manager"
                ? t("update_fees_structure")
                : t("update_fees_structure_as")
              : t("create_fees_structure")}
          </button>
        </>
      ) : (
        <EditFeeStructureType
          setState={setState}
          state={state}
          onActionType={onActionType}
        />
      )}
    </>
  );
};

export default ApplicationPreview;
