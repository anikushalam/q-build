import React, { useEffect, useState } from "react";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
import style from "../../FinanceManager/FeesStructure/FeesStructure.module.css";
import styleOther from "../../PromoteDepartment/PromoteDepartment.module.css";
import QLoader from "../../../../../Loader/QLoader";
import OsReminderStudentCard from "../../PromoteDepartment/Promote/OsReminderStudentCard";
import EmptyInfo from "../../../../../Loader/EmptyInfo";

const ReminderMessageStudentList = ({ onClose, studentList }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (studentList) {
      setList(() => studentList);
    }
  }, [studentList]);
  const onSearchEvent = (e) => {
    if (e.target.value) {
      let searchData = getStudentSearch(studentList, e.target.value);
      setList(() => searchData);
    } else {
      setList(() => studentList);
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
          minHeight: "10rem",
          maxHeight: "35rem",
          overflowX: "hidden",
          overflowY: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <>
          <div className={styleOther.select_header}>
            <h6>{t("student_list")}</h6>
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.5rem",
            }}
          />
          <section className={style.search_container}>
            <div className={style.search_container_text}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder={t("search-label")}
                onChange={onSearchEvent}
              />
            </div>
          </section>
          {list?.length < 1 && (
            <EmptyInfo
              customStyleContainer={{
                marginTop: "9rem",
              }}
              title={"No student found."}
            />
          )}
          {list?.map((stu, index) => (
            <OsReminderStudentCard key={index} stu={stu} isMessage />
          ))}
        </>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default ReminderMessageStudentList;

const getStudentSearch = (list = [], search) => {
  return list.filter((stu) => {
    let name =
      stu?.studentFirstName ??
      "" + " " + stu?.studentMiddleName ??
      "" + " " + stu?.studentLastName ??
      "";
    if (
      name?.toLowerCase()?.includes(search?.toLowerCase()) ||
      stu?.studentGRNO?.toLowerCase()?.includes(search?.toLowerCase())
    ) {
      return stu;
    }
    return null;
  });
};
