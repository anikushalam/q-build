import React, { useEffect, useState } from "react";
import { useOneFeeStructureDetail } from "../../../../../hooks/member_tab/finance-api";
import { useTranslation } from "react-i18next";
// import { onWhichInstallment } from "../../../../../Functions/Finance/Installment";
import JoinFormInputView from "../../../../../JoiningForm/Student/Form/JoinFormInputView";
import style from "./FeesStructure.module.css";
import FeeStructureMenu from "./FeeStructureMenu";
import PopupWrapper from "./PopupWrapper";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormCalender from "../../../../../JoiningForm/Student/Form/JoinFormCalender";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
const ApplicationPreviewDetail = ({
  structureId,
  setStructureId,
  onRefetch,
  departmentId,
  instituteId,
  financeId,
  flowAs,
  viewAs,
  onSelectedApplicant,
  isRootAccess,
}) => {
  const { t } = useTranslation();
  const [totalHead, setToltalHead] = useState(0);
  const [openStructureMenu, setOpenStructureMenu] = useState("");
  const [newStructureField, setNewStructureField] = useState({
    renew: "",
    month: "12",
  });
  const [filled, setFilled] = useState("");
  const { oneFeeStructureDetail, oneFeeStructureDetailRefetch } =
    useOneFeeStructureDetail({
      fsid: structureId,
      skip: !structureId,
    });

  useEffect(() => {
    if (structureId) oneFeeStructureDetailRefetch();
  }, [structureId, oneFeeStructureDetailRefetch]);

  const onBackWithArrowLeft = () => {
    setStructureId("");
  };

  useEffect(() => {
    if (oneFeeStructureDetail?.structure?.fees_heads) {
      let val = 0;
      oneFeeStructureDetail?.structure?.fees_heads?.map(
        (value) => (val += value?.head_amount)
      );
      setToltalHead(val);
    }
  }, [oneFeeStructureDetail]);

  const onRenewalDate = (val) => {
    let splitDate = val?.split("/");
    let modify = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setNewStructureField((prev) => ({
      ...prev,
      renew: modify,
    }));
  };

  const onSelectHostelApp = () => {
    if (!newStructureField.month) {
      setFilled({
        total_months: "* field required",
      });
    } else {
      onSelectedApplicant(newStructureField);
      setStructureId("");
    }
  };
  // console.info("dgjdsfhd", oneFeeStructureDetail);
  return (
    <>
      {!openStructureMenu ? (
        <PopupWrapper onClose={() => setStructureId("")}>
          <div
            className={style.add_category_modal}
            style={{
              width: "35rem",
              minHeight: "10rem",
              maxHeight: "35rem",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <div className={style.add_category_modal_title}>
              <section
                className={style.add_category_modal_title_left}
                style={{
                  position: "relative",
                  width: "100%",
                }}
              >
                <img
                  src="/images/arrow-left-fees-icon.svg"
                  onClick={onBackWithArrowLeft}
                  alt=""
                />

                <h6>{t("fee_structure")}</h6>
                {viewAs === "HOSTEL_SEARCH" ||
                viewAs === "HOSTEL_APPLICATION_TAB" ||
                viewAs === "STUDENT" ||
                isRootAccess === "INVALID" ? (
                  ""
                ) : (
                  <img
                    src="/images/bank-edit-icon.svg"
                    alt="edit icon"
                    className={style.edit_icon}
                    onClick={() =>
                      setOpenStructureMenu(oneFeeStructureDetail?.structure)
                    }
                    style={{
                      right: "0",
                    }}
                  />
                )}
              </section>
            </div>
            <BorderBottom
              customStyle={{
                width: "100%",
              }}
            />
            {viewAs === "HOSTEL_APPLICATION_TAB" && (
              <>
                <JoinFormInput
                  labelText={t("total_months")}
                  placeholder={t("total_months_placeholder")}
                  name={"total_months"}
                  value={newStructureField?.month}
                  type={"text"}
                  onChange={(e) =>
                    setNewStructureField((prev) => ({
                      ...prev,
                      month: e.target.value,
                    }))
                  }
                  errorShow={filled["total_months"]}
                />
                <JoinFormCalender
                  labelText={t("renewal_date_optional")}
                  placeholder={t("renewal_date_optional_placeholder")}
                  name={"renewal"}
                  value={newStructureField.renew}
                  onDateFunction={onRenewalDate}
                  customStyleContainer={{
                    position: "relative",
                    width: "100%",
                  }}
                  datePickerPosition={{
                    top: "0rem",
                    left: "2rem",
                  }}
                  // customStyleCaledarIcon={{
                  //   bottom: "1.7rem",
                  // }}
                />
              </>
            )}
            <JoinFormInputView
              labelText={`${t("fee_structure_name")}: `}
              value={
                oneFeeStructureDetail?.structure?.unique_structure_name ?? ""
              }
              customStyleContainer={{
                width: "100%",
              }}
              // customStyleLabel={{
              //   marginRight: "0",
              // }}
            />
            {oneFeeStructureDetail?.structure?.batch_master?.batchName && (
              <JoinFormInputView
                labelText={`${t("batch")}: `}
                value={
                  oneFeeStructureDetail?.structure?.batch_master?.batchName
                }
                customStyleContainer={{
                  width: "100%",
                }}
                // customStyleLabel={{
                //   marginRight: "0",
                // }}
              />
            )}
            <JoinFormInputView
              labelText={`${t("fees_category_name")}`}
              value={
                oneFeeStructureDetail?.structure?.category_master
                  ?.category_name ?? ""
              }
              customStyleContainer={{
                width: "100%",
              }}
              // customStyleLabel={{
              //   marginRight: "0",
              // }}
            />
            {oneFeeStructureDetail?.structure?.class_master?.className ? (
              <JoinFormInputView
                labelText={t("standard_master")}
                value={
                  oneFeeStructureDetail?.structure?.class_master?.className ??
                  ""
                }
                customStyleContainer={{
                  width: "100%",
                }}
                //   customStyleLabel={{
                //     marginRight: "0",
                //   }}
              />
            ) : null}

            <section className={style.fees_head_title}>
              <h6>{t("total_fees")}</h6>
              <h6>
                {t("rs")}.{" "}
                {oneFeeStructureDetail?.structure?.total_admission_fees ?? 0}
              </h6>
            </section>
            {flowAs === "Transport_Manager" ? null : (
              <section className={style.fees_head_installment}>
                <h6
                  style={{
                    color: "#002BBE",
                  }}
                >
                  {t("applicable_fees_only_payable")}
                </h6>
                <h6
                  style={{
                    color: "#002BBE",
                  }}
                >
                  {t("rs")}.{" "}
                  {oneFeeStructureDetail?.structure?.applicable_fees ?? 0}
                </h6>
              </section>
            )}

            <>
              {oneFeeStructureDetail?.structure?.one_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("first")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.one_installments?.fees ??
                      0}
                  </h6>
                </section>
              ) : (
                ""
              )}
              {oneFeeStructureDetail?.structure?.two_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("second")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.two_installments?.fees ??
                      0}
                  </h6>
                </section>
              ) : (
                ""
              )}
              {oneFeeStructureDetail?.structure?.three_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("third")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.three_installments
                      ?.fees ?? 0}
                  </h6>
                </section>
              ) : (
                ""
              )}
              {oneFeeStructureDetail?.structure?.four_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("fourth")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.four_installments
                      ?.fees ?? 0}
                  </h6>
                </section>
              ) : (
                ""
              )}
              {oneFeeStructureDetail?.structure?.five_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("fifth")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.five_installments
                      ?.fees ?? 0}
                  </h6>
                </section>
              ) : (
                ""
              )}
              {oneFeeStructureDetail?.structure?.six_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("sixth")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.six_installments?.fees ??
                      0}
                  </h6>
                </section>
              ) : (
                ""
              )}
              {oneFeeStructureDetail?.structure?.seven_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("seventh")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.seven_installments
                      ?.fees ?? 0}
                  </h6>
                </section>
              ) : (
                ""
              )}
              {oneFeeStructureDetail?.structure?.eight_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("eight")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.eight_installments
                      ?.fees ?? 0}
                  </h6>
                </section>
              ) : (
                ""
              )}
              {oneFeeStructureDetail?.structure?.nine_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("ninth")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.nine_installments
                      ?.fees ?? 0}
                  </h6>
                </section>
              ) : (
                ""
              )}
              {oneFeeStructureDetail?.structure?.ten_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("ten")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.ten_installments?.fees ??
                      0}
                  </h6>
                </section>
              ) : (
                ""
              )}
              {oneFeeStructureDetail?.structure?.eleven_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("eleventh")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.eleven_installments
                      ?.fees ?? 0}
                  </h6>
                </section>
              ) : (
                ""
              )}
              {oneFeeStructureDetail?.structure?.tweleve_installments?.fees ? (
                <section className={style.fees_head_installment}>
                  <h6>
                    {t("twelevth")} {t("installment")}
                  </h6>
                  <h6>
                    {t("rs")}.{" "}
                    {oneFeeStructureDetail?.structure?.tweleve_installments
                      ?.fees ?? 0}
                  </h6>
                </section>
              ) : (
                ""
              )}
            </>
            <section className={style.table_container}>
              <div className={style.table_heading}>
                <h6>{t("fee_heads")}</h6>
                <h6>{t("amount")}</h6>
              </div>
              <div className={style.table_body}>
                {oneFeeStructureDetail?.structure?.fees_heads?.map(
                  (feehead, index) => (
                    <div className={style.table_body_list} key={index}>
                      <h6>{feehead?.head_name}</h6>
                      <h6>{feehead?.head_amount}</h6>
                    </div>
                  )
                )}
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
                  <h6 className={style.fees_total}>{totalHead}</h6>
                </div>
              </div>
            </section>
            {viewAs === "HOSTEL_APPLICATION_TAB" && (
              <button
                style={{
                  justifyContent: "center",
                }}
                className={style.set_fees_structure_btn}
                onClick={onSelectHostelApp}
              >
                {t("confirm")}
              </button>
            )}
          </div>
        </PopupWrapper>
      ) : (
        <FeeStructureMenu
          onDetailRefetch={oneFeeStructureDetailRefetch}
          onClose={() => setOpenStructureMenu("")}
          openStructureMenu={openStructureMenu}
          onRefetch={onRefetch}
          departmentId={departmentId}
          instituteId={instituteId}
          totalHead={totalHead}
          financeId={financeId}
          flowAs={flowAs}
        />
      )}
    </>
  );
};

export default ApplicationPreviewDetail;
