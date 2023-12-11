import React, { useEffect, useState } from "react";
import { useAllDepartment } from "../Department/Institute/Components/DepartmentApi/depart-api";
import { useSelector } from "react-redux";
import { useFileUpload } from "../hooks/authentication-api";
import QLoader from "../Loader/QLoader";
import SelectDepartmentCard from "../Profile/Institute/Pages/Site/SiteDepartment/SelectDepartmentCard";
import {
  useExcelClass,
  useExcelClassMaster,
  useExcelDeprtment,
  useExcelSubjectMaster,
} from "../hooks/institute/institute-staff-student-api";
import QvipleLoading from "../Loader/QvipleLoading";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "../MembersTab/staff/Mainbody/DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import ExcelSelectClass from "./ExcelSelectClass";
const ExcelSelectDepartment = ({ onClose, isAuthority }) => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange.id);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [isSubject, setIsSubject] = useState(false);
  const [department, setDepartment] = useState("");
  const { allDepartment, allDepartmentRefetch } = useAllDepartment({
    id: ids,
    skip: !ids,
  });
  const [oneFileUpload] = useFileUpload();
  const [excelDeprtment] = useExcelDeprtment();
  const [excelClassMaster] = useExcelClassMaster();
  const [excelSubjectMaster] = useExcelSubjectMaster();
  const [excelClass] = useExcelClass();
  useEffect(() => {
    if (allDepartment?.institute?.depart) {
      setShowingDataLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDepartment?.institute?.depart]);

  useEffect(() => {
    if (ids) {
      setShowingDataLoading(true);
      allDepartmentRefetch();
    }
  }, [ids, allDepartmentRefetch]);

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
            if (isAuthority === "ONLY_DEPARTMENT") {
              excelDeprtment({
                id: ids,
                excelFile: {
                  excel_file: res.data?.imageKey,
                },
              })
                .then(() => {
                  setDisabled(false);
                  onClose();
                })
                .catch({});
            } else if (isAuthority === "CLASS_MASTER") {
              excelClassMaster({
                did: department,
                excelFile: {
                  excel_file: res.data?.imageKey,
                },
              })
                .then(() => {
                  setDisabled(false);
                  onClose();
                })
                .catch({});
            } else if (isAuthority === "SUBJECT_MASTER") {
              excelSubjectMaster({
                did: department,
                excelFile: {
                  excel_file: res.data?.imageKey,
                },
              })
                .then(() => {
                  setDisabled(false);
                  onClose();
                })
                .catch({});
            } else if (isAuthority === "ONLY_CLASS") {
              excelClass({
                did: department,
                excelFile: {
                  excel_file: res.data?.imageKey,
                },
              })
                .then(() => {
                  setDisabled(false);
                  onClose();
                })
                .catch({});
            } else {
              setDisabled(false);
            }
          } else {
            setDisabled(false);
          }
        })
        .catch({});
    }
  };

  const onChooseDepartment = (val) => {
    setDepartment(val);
    setIsSubject((pre) => !pre);
  };
  return (
    <>
      {isSubject ? (
        <ExcelSelectClass
          batchId={department}
          onClose={() => onChooseDepartment("")}
          onParentClose={onClose}
        />
      ) : (
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
            {isAuthority === "ONLY_SUBJECT"
              ? allDepartment?.institute?.depart?.map((depart) => (
                  <div
                    style={{
                      width: "100%",
                    }}
                    onClick={() =>
                      onChooseDepartment(depart?.departmentSelectBatch)
                    }
                  >
                    <SelectDepartmentCard
                      depart={depart}
                      key={depart._id}
                      isExcel
                    />
                  </div>
                ))
              : allDepartment?.institute?.depart?.map((depart) => (
                  <label
                    htmlFor="uploadDepartmentExcel"
                    style={{
                      width: "100%",
                    }}
                    onClick={() => setDepartment(depart?._id)}
                  >
                    <SelectDepartmentCard
                      depart={depart}
                      key={depart._id}
                      isExcel
                    />
                  </label>
                ))}

            {showingDataLoading && <QvipleLoading status="white" />}
            <input
              type="file"
              id="uploadDepartmentExcel"
              accept=".xlsx"
              onChange={onExcelFileUpload}
              style={{
                display: "none",
              }}
            />
            {disabled && <QLoader />}
          </div>
        </PopupWrapper>
      )}
    </>
  );
};

export default ExcelSelectDepartment;
