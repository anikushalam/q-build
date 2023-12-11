import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import AddFeesStructure from "../../FinanceManager/FeesStructure/AddFeesStructure";
import ApplicationPreviewDetail from "../../FinanceManager/FeesStructure/ApplicationPreviewDetail";
import style from "../../Hostel/HostelFeeStructure/HostelFeeStructure.module.css";
import { useGetTransportFeeStructureList } from "../../../../../hooks/member_tab/transport-api";

const TransportFeesStructureList = ({
  financeId,
  transportId,
  instituteId,
  viewAs,
  isRootAccess,
}) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [structureList, setStructureList] = useState([]);
  const [structureId, setStructureId] = useState("");

  const { getTransportFeeStructureList, getTransportFeeStructureListRefetch } =
    useGetTransportFeeStructureList({
      data: {
        tid: transportId,
        page: page,
        limit: 10,
      },
      skip: !transportId,
    });

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
    if (refetchStatus) {
      setStructureList(getTransportFeeStructureList?.all_structures);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
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
    }
    if (getTransportFeeStructureList?.all_structures?.length === 10)
      setState(true);
    else setState(false);
  }, [getTransportFeeStructureList?.all_structures]);

  const onClose = () => {
    setAdd((pre) => !pre);
  };

  const onRefetchWhenFeesStructureCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getTransportFeeStructureListRefetch();
  };

  return (
    <>
      <div className={style.structure_container_title}>
        <h6>{t("fees_structure")}</h6>
        {isRootAccess === "VALID" ? (
          <div className={style.upload_excel_container}>
            <p className={style.add_new_category} onClick={onClose}>
              {t("add_new_fees_structure")}
            </p>
          </div>
        ) : null}
      </div>
      <BorderBottom customStyle={{ marginBottom: "1rem", width: "100%" }} />

      {structureList?.map((category, index) =>
        structureList?.length === index + 1 ? (
          <div
            className={style.fees_card}
            key={category?._id}
            ref={ref}
            onClick={() => setStructureId(category?._id)}
            style={{
              cursor: "pointer",
            }}
          >
            <img src="/images/fees-category-icon.svg" alt="categor icon" />
            <div className={style.fees_card_text}>
              <div className={style.fees_card_text_bottom}>
                <h6>{category?.category_master?.category_name ?? ""}</h6>
                <h6>{category?.class_master?.className ?? ""}</h6>
              </div>
              <div className={style.fees_card_text_bottom}>
                <h6>{category?.structure_name ?? ""}</h6>
                <h6>{category?.total_admission_fees ?? 0}</h6>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={style.fees_card}
            key={category?._id}
            onClick={() => setStructureId(category?._id)}
            style={{
              cursor: "pointer",
            }}
          >
            <img src="/images/fees-category-icon.svg" alt="categor icon" />
            <div className={style.fees_card_text}>
              <div className={style.fees_card_text_bottom}>
                <h6>{category?.category_master?.category_name ?? ""}</h6>
                <h6>{category?.class_master?.className ?? ""}</h6>
              </div>
              <div className={style.fees_card_text_bottom}>
                <h6>{category?.structure_name ?? ""}</h6>
                <h6>{category?.total_admission_fees ?? 0}</h6>
              </div>
            </div>
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {add && (
        <AddFeesStructure
          onClose={onClose}
          financeId={financeId}
          departmentId={transportId}
          onRefetch={onRefetchWhenFeesStructureCreate}
          instituteId={instituteId}
          flowAs="Transport_Manager"
        />
      )}
      {structureId && (
        <ApplicationPreviewDetail
          structureId={structureId}
          setStructureId={setStructureId}
          onRefetch={onRefetchWhenFeesStructureCreate}
          departmentId={transportId}
          instituteId={instituteId}
          financeId={financeId}
          flowAs="Transport_Manager"
          viewAs={viewAs}
          isRootAccess={isRootAccess}
        />
      )}
    </>
  );
};

export default TransportFeesStructureList;
