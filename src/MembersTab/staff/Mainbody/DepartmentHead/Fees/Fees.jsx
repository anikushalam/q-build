import React, { useEffect, useState } from "react";
import { useDepartmentAllFees } from "../../../../../hooks/member_tab/department-api";
import style from "../Exminations/Exminations.module.css";
import FeesForm from "./FeesForm/FeesForm";
import { useTranslation } from "react-i18next";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import DepartmentFeesCard from "./FeesList/DepartmentFeesCard";

function Fees({ did, bid }) {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [feesList, setFeesList] = useState([]);
  const [noAnySearch, setNoAnySearch] = useState(false);
  const { departmentAllFees, departmentAllFeesRefetch } = useDepartmentAllFees({
    data: {
      did: did,
      page: 1,
      limit: 20,
    },
    skip: !did,
  });
  useEffect(() => {
    if (did) departmentAllFeesRefetch();
  }, [did, departmentAllFeesRefetch]);

  useEffect(() => {
    if (departmentAllFees?.depart?.fees?.length) {
      setFeesList(departmentAllFees?.depart?.fees);
      setShowingDataLoading(false);
    } else if (departmentAllFees?.depart?.fees?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
  }, [departmentAllFees?.depart?.fees]);
  const onToggleAdd = () => {
    setAdd((pre) => !pre);
  };

  const onSearchEvent = (e) => {
    if (e.target.value) {
      const filterFees = departmentAllFees?.depart?.fees?.filter((fees) => {
        if (
          fees?.feeName?.toLowerCase()?.includes(e.target.value?.toLowerCase())
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
      setFeesList(departmentAllFees?.depart?.fees);
    }
  };

  return (
    <>
      <div className={style.exam_container}>
        <div className={style.with_search}>
          <h6>{t("previous_fees_list")}</h6>
          <section className={style.search_container}>
            <div className={style.search_container_input}>
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder="Search fees..."
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
            {t("create_new_fees")}
          </p>
        </div>
        {feesList?.map((fees) => (
          <DepartmentFeesCard
            key={fees._id}
            fees={fees}
            onRefetch={departmentAllFeesRefetch}
            did={did}
          />
        ))}
        {!showingDataLoading && !departmentAllFees?.depart?.fees?.length && (
          <EmptyInfo
            customStyleContainer={{
              marginTop: "9rem",
            }}
            title={"No any fees found"}
            subtitle={"Please make sure you have created fees."}
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
        <FeesForm
          did={did}
          bid={bid}
          onRefetch={departmentAllFeesRefetch}
          onClose={onToggleAdd}
        />
      )}
    </>
  );
}

export default Fees;
