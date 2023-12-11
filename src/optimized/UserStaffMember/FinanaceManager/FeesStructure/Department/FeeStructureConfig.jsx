import { useState } from "react";
import BatchList from "./BatchList";
import style from "../FeesStructure.module.css";
import { useLocation, useSearchParams } from "react-router-dom";
import StandardList from "./StandardList";
import FeesStructureList from "../FeesStructureList";
import QvipleLoader from "../../../../Loader/QvipleLoader";
import { useFinanceAddExcelStructure } from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import UploadExcelButton from "../../../../Ui/Button/UploadExcelButton";
import CreateButton from "../../../../Ui/Button/CreateButton";
import { useFileUpload } from "../../../../Hooks/ApiHooks/Auth/auth-api";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import AddFeeStructure from "../Structure/AddFeeStructure";

const FeeStructureConfig = ({ fid, instituteId }) => {
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();
  const [add, setAdd] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [fileUpload] = useFileUpload();
  const [financeAddExcelStructure] = useFinanceAddExcelStructure();
  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onExcelFileUpload = (e) => {
    if (e.target.files?.length && fid && getQuery.state?.did) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      fileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            financeAddExcelStructure({
              fid: fid,
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
      {!searchParams.get("u") ? null : (
        <>
          <div className={style.structure_container_title}>
            <h6>
              {getQuery.state?.dName ?? ""}
              {getQuery.state?.batchName ? (
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "13px",
                  }}
                >
                  {" "}
                  ({getQuery.state?.batchName ?? ""})
                </span>
              ) : null}
              {getQuery.state?.clsName ? (
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "13px",
                  }}
                >
                  {" - "}({getQuery.state?.clsName ?? ""})
                </span>
              ) : null}
            </h6>
            <div className={style.upload_excel_container}>
              <UploadExcelButton onExcelFileUpload={onExcelFileUpload} />
              <CreateButton
                label="add_new_fees_structure"
                customStyle={{
                  marginBlock: "0.5rem",
                }}
                onAction={onClose}
              />
            </div>
          </div>
          <BorderBottom />
        </>
      )}

      {!searchParams.get("u") ? (
        <FeesStructureList
          financeId={fid}
          instituteId={instituteId}
          getQuery={getQuery.state}
        />
      ) : searchParams.get("u") === "batch" ? (
        <BatchList
          departmentId={getQuery?.state?.did ?? ""}
          carryParentState={getQuery?.state}
        />
      ) : searchParams.get("u") === "standard" ? (
        <StandardList
          departmentId={getQuery?.state?.did ?? ""}
          instituteId={instituteId}
          carryParentState={getQuery?.state}
        />
      ) : null}

      {disabled && <QvipleLoader />}

      {add && (
        <AddFeeStructure
          instituteId={instituteId}
          fid={fid}
          did={getQuery?.state?.did}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default FeeStructureConfig;
