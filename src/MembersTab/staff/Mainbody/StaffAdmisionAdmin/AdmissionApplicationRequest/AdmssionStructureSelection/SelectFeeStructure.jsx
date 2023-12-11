import React, { useEffect, useState } from "react";
import style from "../../../FinanceManager/FeesStructure/FeesStructure.module.css";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import { useInView } from "react-intersection-observer";
import { useGetAllFeesStructure } from "../../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const SelectFeeStructure = ({
  onClose,
  departmentId,
  classMasterId,
  batchId,
  onSelectedStudent,
  onSelectedStrucutre,
  asOpen,
}) => {
  const { t } = useTranslation();
  const [confirm, setConfirm] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [structureList, setStructureList] = useState([]);
  const [feeStructureId, setFeeStructureId] = useState("");
  const { getAllFeesStructure, getAllFeesStructureRefetch } =
    useGetAllFeesStructure({
      data: {
        did: departmentId,
        filterBy: classMasterId,
        page: page,
        limit: 10,
        batch_by: batchId ?? "",
      },
      skip: !departmentId,
    });

  // console.info(departmentId, classMasterId);
  useEffect(() => {
    if (departmentId) {
      setShowingDataLoading(true);
      getAllFeesStructureRefetch();
    }
  }, [departmentId, page, getAllFeesStructureRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setStructureList((prevState) =>
        [
          ...new Set(
            [...getAllFeesStructure?.all_structures, ...prevState]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getAllFeesStructure?.all_structures) {
        setStructureList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getAllFeesStructure?.all_structures]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getAllFeesStructure?.all_structures?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getAllFeesStructure?.all_structures?.length === 10) setState(true);
    else setState(false);
  }, [getAllFeesStructure?.all_structures]);

  const onSelectedApplicant = () => {
    onSelectedStudent(feeStructureId?._id);
    onClose();
  };
  const onConfirm = (val) => {
    if (asOpen === "STUDENT_JOINING_FORM") {
      onSelectedStudent(val);
      onClose();
    } else if (asOpen === "ADMISSION_APPLICATION_WISE") {
      onSelectedStrucutre(val);
      onClose();
    } else if (asOpen === "ADMISSION_APPLICATION") {
      onSelectedStrucutre(val);
    } else if (asOpen === "STUDENT_VIEW_STRUCTURE") {
      onSelectedStrucutre(val?._id);
    } else {
      setConfirm((pre) => !pre);
      setFeeStructureId(val);
    }
  };

  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={
          confirm
            ? {
                width: "30rem",
                minHeight: "10rem",
                height: "fit-content",
              }
            : {
                width: "40rem",
                minHeight: "10rem",
                maxHeight: "35rem",
                overflowY: "auto",
                overflowX: "hidden",
                scrollBehavior: "smooth",
              }
        }
      >
        {!confirm ? (
          <>
            <section
              className={style.add_category_modal_title_left}
              style={{ marginBottom: "1.2rem" }}
            >
              <img
                src="/images/arrow-left-fees-icon.svg"
                onClick={onClose}
                alt="back arrow"
              />
              <h6>
                {asOpen === "SELECTED_TAB" ||
                asOpen === "ADMISSION_APPLICATION_WISE"
                  ? t("edit_fee_structure")
                  : asOpen === "ADMISSION_APPLICATION"
                  ? t("select_fee_structure_for_application")
                  : asOpen === "STUDENT_VIEW_STRUCTURE"
                  ? t("admission_fees")
                  : t("select_fee_structure_of_student")}
              </h6>
            </section>
            <BorderBottom
              customStyle={{
                width: "100%",
                marginTop: "-0.5rem",
                marginBottom: "1rem",
              }}
            />
            {structureList?.map((category, index) =>
              structureList?.length === index + 1 ? (
                <div
                  className={`${style.fees_card} ${style.fees_card_hover}`}
                  key={category?._id}
                  ref={ref}
                  onClick={() => onConfirm(category)}
                >
                  <img
                    src="/images/fees-category-icon.svg"
                    alt="categor icon"
                  />
                  <div className={style.fees_card_text}>
                    {/* <h6>{category?.category_master?.category_name ?? ""}</h6> */}
                    <h6>{category?.unique_structure_name ?? ""}</h6>

                    <div
                      className={style.fees_card_text_bottom}
                      style={{ marginTop: "0.3rem" }}
                    >
                      {/* <h6>{category?.class_master?.className ?? ""}</h6> */}
                      <h6>
                        {t("applicable_fees_only")} {t("rs")}.
                        {category?.applicable_fees ?? 0}
                      </h6>
                      <h6>
                        {t("total_admission_fees")} {" : "} {t("rs")}.
                        {category?.total_admission_fees ?? 0}
                      </h6>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`${style.fees_card} ${style.fees_card_hover}`}
                  key={category?._id}
                  onClick={() => onConfirm(category)}
                >
                  <img
                    src="/images/fees-category-icon.svg"
                    alt="categor icon"
                  />
                  <div className={style.fees_card_text}>
                    {/* <h6>{category?.category_master?.category_name ?? ""}</h6> */}
                    <h6>{category?.unique_structure_name ?? ""}</h6>

                    <div
                      className={style.fees_card_text_bottom}
                      style={{ marginTop: "0.3rem" }}
                    >
                      {/* <h6>{category?.class_master?.className ?? ""}</h6> */}
                      {/* <h6>
                        {t("rs")}.{category?.total_admission_fees ?? 0}
                      </h6> */}
                      <h6>
                        {t("applicable_fees_only")} {t("rs")}.
                        {category?.applicable_fees ?? 0}
                      </h6>
                      <h6>
                        {t("total_admission_fees")} {" : "} {t("rs")}.
                        {category?.total_admission_fees ?? 0}
                      </h6>
                    </div>
                  </div>
                </div>
              )
            )}
          </>
        ) : (
          <section
            className={style.fee_middle_section_container}
            style={{ marginBottom: "1.2rem" }}
          >
            <h6>{t("fee_structure")}</h6>

            <BorderBottom
              customStyle={{
                width: "100%",
                marginTop: "0.7rem",
              }}
            />
            <div className={style.fee_middle_section}>
              <p>{t("fee_structure_of_student_is")}</p>
              <h6>{feeStructureId?.category_master?.category_name}</h6>
              <p>
                {" "}
                {t("total_admission_fees")} {" : "} {t("rs")}{" "}
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {feeStructureId?.total_admission_fees ?? 0}
                </span>
              </p>
              <p>
                {t("applicable_fees_amount")} {" : "} {t("rs")}{" "}
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {feeStructureId?.applicable_fees ?? 0}
                </span>
              </p>
            </div>
            <button
              onClick={onSelectedApplicant}
              className={style.fee_middle_confirm_button}
            >
              {t("confirm")}
            </button>
          </section>
        )}

        {showingDataLoading && <QvipleLoading />}
      </div>
    </PopupWrapper>
  );
};

export default SelectFeeStructure;
