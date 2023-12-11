import React, { useEffect, useState } from "react";
import { useDepartmentAllChecklist } from "../../../../../hooks/member_tab/department-api";
import style from "../Exminations/Exminations.module.css";
import ChecklistForm from "./ChecklistFrom/ChecklistForm";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import DepartmentChecklistCard from "./ChecklistList/DepartmentChecklistCard";
function Checklist({ did, bid }) {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [feesList, setFeesList] = useState([]);
  const [noAnySearch, setNoAnySearch] = useState(false);

  const { departmentAllChecklist, departmentAllChecklistRefetch } =
    useDepartmentAllChecklist({
      data: {
        did: did,
        page: 1,
        limit: 20,
      },
      skip: !did,
    });
  useEffect(() => {
    if (did) departmentAllChecklistRefetch();
  }, [did, departmentAllChecklistRefetch]);

  useEffect(() => {
    if (departmentAllChecklist?.checklist?.length) {
      setFeesList(departmentAllChecklist?.checklist);
      setShowingDataLoading(false);
    } else if (departmentAllChecklist?.checklist?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [departmentAllChecklist?.checklist]);
  const onToggleAdd = () => {
    setAdd((pre) => !pre);
  };

  const onSearchEvent = (e) => {
    if (e.target.value) {
      const filterFees = departmentAllChecklist?.checklist?.filter((fees) => {
        if (
          fees?.checklistName
            ?.toLowerCase()
            ?.includes(e.target.value?.toLowerCase())
        ) {
          return fees;
        } else {
          return null;
        }
      });
      if (filterFees?.length === 0) {
        setNoAnySearch(true);
      } else {
        setNoAnySearch(false);
      }
      setFeesList(filterFees);
    } else {
      setNoAnySearch(false);
      setFeesList(departmentAllChecklist?.checklist);
    }
  };

  useEffect(() => {
    if (did) {
      departmentAllChecklistRefetch();
    }
  }, [departmentAllChecklistRefetch, did]);
  // console.info("THis is all checklist", departmentAllChecklist);
  return (
    <>
      <div className={style.exam_container}>
        <div className={style.with_search}>
          <h6>{t("previous_checklist_list")}</h6>
          <section className={style.search_container}>
            <div className={style.search_container_input}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder="Search checklist..."
                onChange={onSearchEvent}
              />
            </div>
          </section>
        </div>
        <BorderBottom
          customStyle={{
            marginTop: "0.5rem",
            marginBottom: "0.6rem",
            width: "100%",
          }}
        />

        <div className={style.add_new_container}>
          <p className={style.add_new_exam} onClick={onToggleAdd}>
            {t("create_new_checklist")}
          </p>
        </div>
        {feesList?.map((checklist) => (
          <DepartmentChecklistCard
            key={checklist._id}
            checklist={checklist}
            onRefetch={departmentAllChecklistRefetch}
            did={did}
          />
        ))}
        {!showingDataLoading && !departmentAllChecklist?.checklist?.length && (
          <EmptyInfo
            customStyleContainer={{
              marginTop: "9rem",
            }}
            title={"No any checklist found"}
            subtitle={"Please make sure you have created checklist."}
          />
        )}
        {noAnySearch && (
          <EmptyInfo
            customStyleContainer={{
              marginTop: "9rem",
            }}
            title={"No any search found"}
          />
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
      {add && (
        <ChecklistForm
          did={did}
          bid={bid}
          onRefetch={departmentAllChecklistRefetch}
          onClose={onToggleAdd}
        />
      )}
    </>
  );
}

export default Checklist;
