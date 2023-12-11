import React from "react";
import style from "../PromoteDepartment/PromoteDepartment.module.css";
import AdministratorClass from "./AdministratorClass";
import { useLocation, useSearchParams } from "react-router-dom";
import AdministratorClassDetail from "./AdministratorClassDetail";
import AdministratorSubjectDetail from "./AdministratorSubjectDetail";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import SubjectMenu from "./SubjectMenu/SubjectMenu";

const AcademicAdministrator = ({ onClickValue }) => {
  const [searchParams] = useSearchParams();
  const getQuery = useLocation();
  const { t } = useTranslation();
  return (
    <div className={style.departmenthead}>
      <div className={style.demaprtment_list}>
        <div className={style.with_search}>
          {searchParams.get("a") === "class" ? (
            <h6>
              {t("class_name")}
              {" : "}
              {onClickValue?.className ?? ""}
            </h6>
          ) : searchParams.get("a") === "subject-menu" ? (
            <h6>
              {" "}
              {t("subject_name")}
              {" : "}
              {getQuery.state?.subjectName ?? ""}
            </h6>
          ) : searchParams.get("a") === "subject" ? null : (
            <h6>
              {t("department")}
              {" : "}
              {onClickValue?.onClickValue?.academic_department?.dName}
            </h6>
          )}
        </div>
        {searchParams.get("a") === "subject" ? null : (
          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          />
        )}
        {!searchParams.get("a") && <p>{t("all_classes")}</p>}
        {searchParams.get("a") === "class" ? (
          <AdministratorClassDetail carryParentState={onClickValue} />
        ) : searchParams.get("a") === "subject-menu" ? (
          <SubjectMenu
            carryParentState={onClickValue}
            isDepartment="ADMINISTRATOR"
          />
        ) : searchParams.get("a") === "subject" ? (
          <AdministratorSubjectDetail carryParentState={onClickValue} />
        ) : (
          <AdministratorClass
            carryParentState={onClickValue}
            batchId={
              onClickValue?.onClickValue?.academic_department
                ?.departmentSelectBatch
            }
          />
        )}
      </div>
    </div>
  );
};

export default AcademicAdministrator;
