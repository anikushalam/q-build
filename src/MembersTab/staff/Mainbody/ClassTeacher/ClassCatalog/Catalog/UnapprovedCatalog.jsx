import React, { useEffect } from "react";
import { useState } from "react";
import { useClassAllUnApprovedStudent } from "../../../../../../hooks/member_tab/class-api";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./Catalog.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UniversalTab from "../../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
const UnapprovedCatalog = ({ cid, carryParentState }) => {
  const params = useParams();
  const getQuery = useLocation();
  const { t } = useTranslation();
  const [students, setStudents] = useState([]);

  const tabList = [
    {
      name: t("catalog"),
      id: 0,
      url: `member/class/${params.cname}?a=catalog`,
    },
    {
      name: t("unapproved_student"),
      id: 1,
      url: `member/class/${params.cname}?a=catalog&unapproved`,
    },
  ];

  const { classAllUnApprovedStudent, classAllUnApprovedStudentRefetch } =
    useClassAllUnApprovedStudent({
      data: {
        cid: cid,
        page: 1,
        limit: 30,
      },
      skip: !cid,
    });
  useEffect(() => {
    if (cid) classAllUnApprovedStudentRefetch();
  }, [cid, classAllUnApprovedStudentRefetch]);
  useEffect(() => {
    if (classAllUnApprovedStudent?.classes) {
      setStudents(classAllUnApprovedStudent?.classes);
    }
  }, [classAllUnApprovedStudent?.classes]);

  const onSearchStudent = (e) => {
    if (e.target.value) {
      const filterStudent = classAllUnApprovedStudent?.classes?.filter(
        (student) => {
          if (
            `${student?.studentFirstName} ${
              student?.studentMiddleName ? student?.studentMiddleName + " " : ""
            }${student?.studentLastName}`
              ?.toLowerCase()
              ?.includes(e.target.value?.toLowerCase())
          ) {
            return student;
          } else {
            return null;
          }
        }
      );
      setStudents(filterStudent);
    } else {
      setStudents(classAllUnApprovedStudent?.classes);
    }
  };

  return (
    <div className={style.catalog}>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={getQuery.search?.substring(3) === "catalog" ? 0 : 1}
        showAs
        customStyleLink={{
          width: "50%",
        }}
        carryParentState={carryParentState}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />
      <div className={style.searchContainerr}>
        <div className={style.searchContainer}>
          <img alt="" src="/images/search-dept-icon.svg" />
          <input
            type="text"
            placeholder={t("search-label")}
            onChange={onSearchStudent}
          />
        </div>
      </div>

      <div className={style.itemsContainer}>
        {students?.map((stu) => (
          <Link
            to={`/q/${params.username}/student/profile`}
            state={{ sid: stu?._id, viewAs: "CLASS_CATALOG" }}
          >
            <div className={style.item}>
              <p>{stu?.studentROLLNO}</p>
              <img
                alt=""
                src={
                  stu?.studentProfilePhoto
                    ? `${imageShowUrl}/${stu?.studentProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
              />
              {/* <p>
                {stu?.studentFirstName}{" "}
                {stu?.studentMiddleName ? stu?.studentMiddleName : " "}{" "}
                {stu?.studentLastName}
              </p> */}
              <div className={style.student_catalog_name}>
                <h5>
                  {stu?.studentFirstName ?? ""} {stu?.studentMiddleName ?? " "}{" "}
                  {stu?.studentLastName ?? ""}
                </h5>
                <h6>
                  {t("gr_number")}{" "}
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    {stu?.studentGRNO ?? ""}
                  </span>
                </h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UnapprovedCatalog;
