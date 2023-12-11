import React, { useEffect, useState } from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import ClassList from "./ClassList";
import { useGetDepartmentDetailByPromote } from "../../../../../hooks/member_tab/department-api";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import moment from "moment";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import SelectAllBatch from "./SelectAllBatch";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import DepartmentAllBatch from "./DepartmentAllBatch";

const OneDepartment = ({ carryParentState }) => {
  const { t } = useTranslation();
  const tabList = [
    {
      name: t("current_batch"),
      id: 0,
    },
    {
      name: t("all_batch"),
      id: 1,
    },
  ];
  const navigate = useNavigate();
  const getQuery = useLocation();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [allClasses, setAllClasses] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [selectedBatch, setSelectedBatch] = useState("");
  const [openBatch, setOpenBatch] = useState(false);
  const { getDepartmentDetailByPromote, getDepartmentDetailByPromoteRefetch } =
    useGetDepartmentDetailByPromote({
      data: { did: getQuery.state?.did, exist_batch: selectedBatch?._id ?? "" },
      skip: !getQuery.state?.did,
    });
  useEffect(() => {
    if (getQuery.state?.did || selectedBatch?._id) {
      setShowingDataLoading(true);
      getDepartmentDetailByPromoteRefetch();
    }
  }, [
    getQuery.state?.did,
    getDepartmentDetailByPromoteRefetch,
    selectedBatch?._id,
  ]);
  useEffect(() => {
    if (getDepartmentDetailByPromote?.department) {
      setAllClasses(
        getDepartmentDetailByPromote?.department?.departmentSelectBatch
          ?.classroom ??
          getDepartmentDetailByPromote?.department?.batches?.classroom ??
          []
      );
      setShowingDataLoading(false);
    }
  }, [getDepartmentDetailByPromote?.department]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  const onSearchEvent = (e) => {
    if (e.target.value) {
      if (selectedBatch?._id) {
        const filterStudent =
          getDepartmentDetailByPromote?.department?.batches?.classroom?.filter(
            (cls) => {
              if (
                `${cls?.className} ${cls?.classTitle}`
                  ?.toLowerCase()
                  ?.includes(e.target.value?.toLowerCase())
              ) {
                return cls;
              } else {
                return null;
              }
            }
          );
        setAllClasses(filterStudent);
      } else {
        const filterStudent =
          getDepartmentDetailByPromote?.department?.departmentSelectBatch?.classroom?.filter(
            (cls) => {
              if (
                `${cls?.className} ${cls?.classTitle}`
                  ?.toLowerCase()
                  ?.includes(e.target.value?.toLowerCase())
              ) {
                return cls;
              } else {
                return null;
              }
            }
          );
        setAllClasses(filterStudent);
      }
    } else {
      setAllClasses(
        getDepartmentDetailByPromote?.department?.departmentSelectBatch
          ?.classroom ??
          getDepartmentDetailByPromote?.department?.batches?.classroom ??
          []
      );
    }
  };

  const onTabIndex = (value) => {
    setActiveTabIndex(value);
  };

  // console.info("getQuery", getQuery);
  return (
    <>
      <section className={style.moderator_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <div className={style.with_search}>
          <h6>{getDepartmentDetailByPromote?.department?.dName}</h6>
          <div className={style.search_container_input}>
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder="Search Classes"
              onChange={onSearchEvent}
            />
          </div>
        </div>
      </section>

      <BorderBottom
        customStyle={{
          width: "100%",
          marginTop: "0.5rem",
        }}
      />
      <UniversalTab
        tabList={tabList}
        setActiveIndexTab={onTabIndex}
        activeIndexTab={activeTabIndex}
        customStyleTab={{
          width: "50%",
        }}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />
      {activeTabIndex === 0 && (
        <>
          <div
            className={style.class_container}
            title="Choose other batches"
            onClick={() => setOpenBatch(true)}
            style={{
              cursor: "pointer",
            }}
          >
            <img
              className={style.oneRowImage}
              src="/images/master-24-grey-icon.svg"
              alt="batch icon"
              style={{
                borderRadius: "0",
              }}
            />
            <div className={style.class_container_text}>
              <h6>
                {getDepartmentDetailByPromote?.department?.departmentSelectBatch
                  ?.batchName ??
                  selectedBatch?.batchName ??
                  ""}
              </h6>
              <p>
                {t("created_on_")}{" "}
                {selectedBatch?.createdAt
                  ? moment(selectedBatch?.createdAt).format("DD MMM yyyy")
                  : moment(
                      getDepartmentDetailByPromote?.department
                        ?.departmentSelectBatch?.createdAt
                    ).format("DD MMM yyyy")}
              </p>
            </div>
          </div>
          <ClassList classes={allClasses} carryParentState={carryParentState} />
          {showingDataLoading && <QvipleLoading />}
          {openBatch && (
            <SelectAllBatch
              onClose={() => setOpenBatch(false)}
              did={getQuery.state?.did}
              onSelectbatch={setSelectedBatch}
            />
          )}
        </>
      )}
      {activeTabIndex === 1 && (
        <DepartmentAllBatch
          did={getQuery.state?.did}
          selectedId={
            getDepartmentDetailByPromote?.department?.departmentSelectBatch
              ?._id ??
            selectedBatch?._id ??
            ""
          }
          instituteId={getQuery.state?.onClickValue?.institute}
          onParentRefetch={getDepartmentDetailByPromoteRefetch}
        />
      )}
    </>
  );
};

export default OneDepartment;
