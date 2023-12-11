import React, { useState } from "react";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import BatchList from "./BatchList";
import style from "../FeesStructure.module.css";
import { useLocation } from "react-router-dom";
import StandardList from "./StandardList";
import FeesStructureList from "../FeesStructureList";
import { useFileUpload } from "../../../../../../hooks/authentication-api";
import { useAddExcelStructureByFinance } from "../../../../../../hooks/member_tab/finance-api";
import AddFeesStructure from "../AddFeesStructure";
import QLoader from "../../../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";

const FeeStructureConfig = ({
  financeId,
  instituteId,
  accessRole,
  callApi,
  viewAs,
}) => {
  const getQuery = useLocation();
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [addExcelStructureByFinance] = useAddExcelStructureByFinance();
  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onExcelFileUpload = (e) => {
    // console.info("this is excel up,lsd", e.target.files[0]);
    if (e.target.files?.length) {
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
              did: getQuery.state?.did,
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
    }
  };

  return (
    <>
      {getQuery?.search?.substring(9) === "structure" ? (
        <FeesStructureList
          financeId={financeId}
          instituteId={instituteId}
          getQuery={getQuery.state}
        />
      ) : (
        <>
          <div className={style.structure_container_title}>
            <h6>{getQuery.state?.dName ?? ""}</h6>
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
        </>
      )}

      {getQuery?.search?.substring(9) === "structure&batch" && (
        <>
          <BatchList
            departmentId={getQuery?.state?.did ?? ""}
            carryParentState={getQuery?.state}
            accessRole={accessRole}
            callApi={callApi}
            viewAs={viewAs}
          />
        </>
      )}
      {getQuery?.search?.substring(9) === "structure&standard" && (
        <>
          <StandardList
            departmentId={getQuery?.state?.did ?? ""}
            carryParentState={getQuery?.state}
            accessRole={accessRole}
            callApi={callApi}
            viewAs={viewAs}
          />
        </>
      )}

      {disabled && <QLoader />}

      {add && (
        <AddFeesStructure
          onClose={onClose}
          financeId={financeId}
          departmentId={getQuery.state?.did}
          onRefetch={() => {}}
          // onRefetch={onRefetchWhenFeesStructureCreate}
          instituteId={instituteId}
          flowAs="Finance_Manager"
        />
      )}
    </>
  );
};

export default FeeStructureConfig;
