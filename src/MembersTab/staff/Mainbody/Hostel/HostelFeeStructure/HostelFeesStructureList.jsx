import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetHostelFeeStructureList } from "../../../../../hooks/member_tab/hostel-api";
import QLoader from "../../../../../Loader/QLoader";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import AddFeesStructure from "../../FinanceManager/FeesStructure/AddFeesStructure";
import ApplicationPreviewDetail from "../../FinanceManager/FeesStructure/ApplicationPreviewDetail";
import style from "./HostelFeeStructure.module.css";
import { useNavigate } from "react-router-dom";

const HostelFeesStructureList = ({
  financeId,
  hostelId,
  instituteId,
  viewAs,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [structureList, setStructureList] = useState([]);
  const [structureId, setStructureId] = useState("");
  const [disabled, setDisabled] = useState(false);
  // const [oneFileUpload] = useFileUpload();
  // const [addExcelStructureByFinance] = useAddExcelStructureByFinance();

  const { getHostelFeeStructureList, getHostelFeeStructureListRefetch } =
    useGetHostelFeeStructureList({
      data: {
        hid: hostelId,
        page: page,
        limit: 10,
      },
      skip: !hostelId,
    });

  useEffect(() => {
    if (hostelId) {
      setShowingDataLoading(true);
      getHostelFeeStructureListRefetch();
    }
  }, [hostelId, page, getHostelFeeStructureListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setStructureList(getHostelFeeStructureList?.all_structures);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getHostelFeeStructureList?.all_structures) {
        setStructureList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getHostelFeeStructureList?.all_structures]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getHostelFeeStructureList?.all_structures?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getHostelFeeStructureList?.all_structures?.length === 10)
      setState(true);
    else setState(false);
  }, [getHostelFeeStructureList?.all_structures]);

  const onClose = () => {
    setAdd((pre) => !pre);
  };

  const onRefetchWhenFeesStructureCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getHostelFeeStructureListRefetch();
  };

  // const onExcelFileUpload = (e) => {
  //   // console.info("this is excel up,lsd", e.target.files[0]);
  //   setDisabled((pre) => !pre);
  //   const formData = new FormData();
  //   formData.append("file", e.target.files[0]);
  //   oneFileUpload({
  //     fileUpload: formData,
  //   })
  //     .then((res) => {
  //       if (res.data?.imageKey) {
  //         addExcelStructureByFinance({
  //           fid: financeId,
  //           did: hostelId,
  //           excelFile: {
  //             excel_file: res.data?.imageKey,
  //           },
  //         })
  //           .then(() => {
  //             setDisabled((pre) => !pre);
  //           })
  //           .catch({});
  //       } else {
  //         setDisabled((pre) => !pre);
  //       }
  //     })
  //     .catch({});
  // };
  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  return (
    <>
      <div
        className={style.structure_container_title}
        style={{
          justifyContent:
            viewAs === "HOSTEL_SEARCH" ? "flex-start" : "space-between",
          gap: "1rem",
        }}
      >
        {viewAs === "HOSTEL_SEARCH" && (
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onBackWithArrowLeft}
            alt="go to previous tab"
            title="Go Back"
            style={{
              cursor: "pointer",
            }}
          />
        )}
        <h6>{t("fees_structure")}</h6>
        <div className={style.upload_excel_container}>
          {/* <label className={style.upload_excel_file} htmlFor="uploadExcel">
            <img
              src="/images/upload-xslx-icon.svg"
              alt="add student icon"
              title="Upload excel file"
            />
          </label>

          <input
            type={"file"}
            id="uploadExcel"
            accept=".xlsx"
            onChange={onExcelFileUpload}
            style={{
              display: "none",
            }}
          /> */}
          {viewAs === "HOSTEL_SEARCH" ? (
            ""
          ) : (
            <p className={style.add_new_category} onClick={onClose}>
              {t("add_new_fees_structure")}
            </p>
          )}
        </div>
      </div>
      <BorderBottom customStyle={{ marginBottom: "1rem" }} />

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
      {disabled && <QLoader />}
      {showingDataLoading && <QvipleLoading />}
      {add && (
        <AddFeesStructure
          onClose={onClose}
          financeId={financeId}
          departmentId={hostelId}
          onRefetch={onRefetchWhenFeesStructureCreate}
          instituteId={instituteId}
          flowAs="Hostel_Manager"
        />
      )}
      {structureId && (
        <ApplicationPreviewDetail
          structureId={structureId}
          setStructureId={setStructureId}
          onRefetch={onRefetchWhenFeesStructureCreate}
          departmentId={hostelId}
          instituteId={instituteId}
          financeId={financeId}
          flowAs="Hostel_Manager"
          viewAs={viewAs}
        />
      )}
    </>
  );
};

export default HostelFeesStructureList;
