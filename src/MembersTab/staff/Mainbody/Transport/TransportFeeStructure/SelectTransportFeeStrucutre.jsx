import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../FinanceManager/FeesStructure/FeesStructure.module.css";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useGetTransportFeeStructureList } from "../../../../../hooks/member_tab/transport-api";

const SelectTransportFeeStrucutre = ({
  onClose,
  onSelectFeeStructure,
  transportId,
  batchId,
  classMasterId,
  vehicleId,
}) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [structureList, setStructureList] = useState([]);
  const { getTransportFeeStructureList, getTransportFeeStructureListRefetch } =
    useGetTransportFeeStructureList({
      data: {
        tid: transportId,
        page: page,
        limit: 10,
        filter_by: batchId,
        master_by: classMasterId ?? "",
        vehicle_by: vehicleId ?? "",
      },
      skip: !transportId,
    });

  // console.info(transportId, classMasterId);
  useEffect(() => {
    if (transportId) {
      setShowingDataLoading(true);
      getTransportFeeStructureListRefetch();
    }
  }, [transportId, page, getTransportFeeStructureListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getTransportFeeStructureList?.all_structures) {
      setStructureList((prevState) =>
        [
          ...new Set(
            [
              ...prevState,
              ...getTransportFeeStructureList?.all_structures,
            ]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getTransportFeeStructureList?.all_structures?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getTransportFeeStructureList?.all_structures?.length === 10)
      setState(true);
    else setState(false);
  }, [getTransportFeeStructureList?.all_structures]);

  const onConfirm = (val) => {
    onSelectFeeStructure(val);
    onClose();
  };
  return (
    <>
      <PopupWrapper onClose={onClose}>
        <div
          className={style.add_category_modal}
          style={{
            width: "40rem",
            minHeight: "35rem",
            maxHeight: "35rem",
            overflowY: "auto",
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <section
            className={style.add_category_modal_title_left}
            style={{ marginBottom: "1.2rem" }}
          >
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onClose}
              alt="back arrow"
            />
            <h6>{t("select_fee_structure_of_vehicle")}</h6>
          </section>
          {structureList?.map((category, index) =>
            structureList?.length === index + 1 ? (
              <div
                className={`${style.fees_card} ${style.fees_card_hover}`}
                key={category?._id}
                ref={ref}
                onClick={() => onConfirm(category)}
              >
                <img src="/images/fees-category-icon.svg" alt="categor icon" />
                <div className={style.fees_card_text}>
                  <h6>{category?.unique_structure_name ?? ""}</h6>

                  <div
                    className={style.fees_card_text_bottom}
                    style={{ marginTop: "0.3rem" }}
                  >
                    {/* <h6>
                      {t("applicable_fees_only")} {t("rs")}.
                      {category?.applicable_fees ?? 0}
                    </h6> */}
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
                <img src="/images/fees-category-icon.svg" alt="categor icon" />
                <div className={style.fees_card_text}>
                  <h6>{category?.unique_structure_name ?? ""}</h6>

                  <div
                    className={style.fees_card_text_bottom}
                    style={{ marginTop: "0.3rem" }}
                  >
                    {/* <h6>
                      {t("applicable_fees_only")} {t("rs")}.
                      {category?.applicable_fees ?? 0}
                    </h6> */}
                    <h6>
                      {t("total_admission_fees")} {" : "} {t("rs")}.
                      {category?.total_admission_fees ?? 0}
                    </h6>
                  </div>
                </div>
              </div>
            )
          )}
          {showingDataLoading && <QvipleLoading />}
        </div>
      </PopupWrapper>
    </>
  );
};

export default SelectTransportFeeStrucutre;
