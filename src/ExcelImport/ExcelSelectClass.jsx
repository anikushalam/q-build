import React, { useEffect, useState } from "react";
import { useAllClass } from "../Department/Institute/Components/DepartmentApi/depart-api";
import { useFileUpload } from "../hooks/authentication-api";
import QLoader from "../Loader/QLoader";
import { useExcelSubject } from "../hooks/institute/institute-staff-student-api";
import QvipleLoading from "../Loader/QvipleLoading";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "../MembersTab/staff/Mainbody/DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import ClassCard from "../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionConfirm/ConfirmProcess/ClassCard";
const ExcelSelectClass = ({ onClose, batchId, onParentClose }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [department, setDepartment] = useState("");
  const { allClass, allClassRefetch } = useAllClass({
    bid: batchId,
    skip: !batchId,
  });
  const [oneFileUpload] = useFileUpload();
  const [excelSubject] = useExcelSubject();
  useEffect(() => {
    if (allClass?.batch?.classroom) {
      setShowingDataLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allClass?.batch?.classroom]);

  useEffect(() => {
    if (batchId) {
      setShowingDataLoading(true);
      allClassRefetch();
    }
  }, [batchId, allClassRefetch]);

  const onExcelFileUpload = (e) => {
    if (e.target.files?.length) {
      setDisabled(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            excelSubject({
              cid: department,
              excelFile: {
                excel_file: res.data?.imageKey,
              },
            })
              .then(() => {
                setDisabled(false);
                onParentClose();
              })
              .catch({});
          } else {
            setDisabled(false);
          }
        })
        .catch({});
    }
  };

  return (
    <>
      <PopupWrapper onClose={onClose}>
        <div className={style.seating_modal}>
          <section
            className={style.seating_modal_title_left}
            style={{
              position: "relative",
            }}
          >
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onClose}
              alt=""
            />
            <h6>{t("select_excel_upload_department")}</h6>
          </section>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginBottom: "0.6rem",
            }}
          />
          {allClass?.batch?.classroom?.map((cls) => (
            <label
              htmlFor="uploadSubjectExcel"
              style={{
                width: "100%",
              }}
              onClick={() => setDepartment(cls?._id)}
            >
              <ClassCard classData={cls} key={cls._id} isView="ONLY_SUBJECT" />
            </label>
          ))}

          {showingDataLoading && <QvipleLoading status="white" />}
          <input
            type="file"
            id="uploadSubjectExcel"
            accept=".xlsx"
            onChange={onExcelFileUpload}
            style={{
              display: "none",
            }}
          />
          {disabled && <QLoader />}
        </div>
      </PopupWrapper>
    </>
  );
};

export default ExcelSelectClass;
