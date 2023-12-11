import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import {
  useAddExcelStructureByFinance,
  useGetAllFeesStructure,
} from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import AddFeesStructure from "./AddFeesStructure";
import ApplicationPreviewDetail from "./ApplicationPreviewDetail";
import style from "./FeesStructure.module.css";

const FeesStructureList = ({ financeId, getQuery, instituteId }) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [structureList, setStructureList] = useState([]);
  const [structureId, setStructureId] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [addExcelStructureByFinance] = useAddExcelStructureByFinance();

  const { getAllFeesStructure, getAllFeesStructureRefetch } =
    useGetAllFeesStructure({
      data: {
        did: getQuery?.did,
        filterBy: getQuery?.clsId,
        page: page,
        limit: 10,
        batch_by: getQuery?.batchId,
      },
      skip: !getQuery?.did,
    });

  useEffect(() => {
    if (getQuery?.did) {
      setShowingDataLoading(true);
      getAllFeesStructureRefetch();
    }
  }, [getQuery?.did, page, getAllFeesStructureRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setStructureList(getAllFeesStructure?.all_structures);
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

  const onClose = () => {
    setAdd((pre) => !pre);
  };

  const onRefetchWhenFeesStructureCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getAllFeesStructureRefetch();
  };

  const onExcelFileUpload = (e) => {
    // console.info("this is excel up,lsd", e.target.files[0]);
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        if (res.data?.imageKey) {
          addExcelStructureByFinance({
            fid: financeId,
            did: getQuery?.did,
            excelFile: {
              excel_file: res.data?.imageKey,
            },
          })
            .then(() => {
              setDisabled((pre) => !pre);
            })
            .catch({});
        } else {
          setDisabled((pre) => !pre);
        }
      })
      .catch({});
  };

  // console.info("this is ain", getAllFeesStructure);
  return (
    <>
      <div className={style.structure_container_title}>
        <h6>{getQuery?.dName ?? ""}</h6>
        <div className={style.upload_excel_container}>
          <label className={style.upload_excel_file} htmlFor="uploadExcel">
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
          />
          <p className={style.add_new_category} onClick={onClose}>
            {t("add_new_fees_structure")}
          </p>
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
                <h6>{`(${t("rs")}. ${category?.applicable_fees ?? 0})`}</h6>
              </div>
              <div className={style.fees_card_text_bottom}>
                <h6>{category?.structure_name ?? ""}</h6>
                <h6>
                  {t("rs")}.{category?.total_admission_fees ?? 0}
                </h6>
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
                <h6>{`(${t("rs")}. ${category?.applicable_fees ?? 0})`}</h6>
              </div>
              <div className={style.fees_card_text_bottom}>
                <h6>{category?.structure_name ?? ""}</h6>
                <h6>
                  {t("rs")}.{category?.total_admission_fees ?? 0}
                </h6>
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
          departmentId={getQuery?.did}
          onRefetch={onRefetchWhenFeesStructureCreate}
          instituteId={instituteId}
          flowAs="Finance_Manager"
        />
      )}
      {structureId && (
        <ApplicationPreviewDetail
          structureId={structureId}
          setStructureId={setStructureId}
          onRefetch={onRefetchWhenFeesStructureCreate}
          departmentId={getQuery?.did}
          instituteId={instituteId}
          financeId={financeId}
          flowAs="Finance_Manager"
        />
      )}
    </>
  );
};

export default FeesStructureList;
