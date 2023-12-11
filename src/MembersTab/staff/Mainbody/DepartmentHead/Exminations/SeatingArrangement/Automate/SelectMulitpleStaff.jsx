import React, { useState, useCallback, useEffect } from "react";
import style from "../SeatingArrangement.module.css";
import BorderBottom from "../../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useAssignSearchStaff } from "../../../../../../../Post/Institute/Components/search-api";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";

const SelectMulitpleStaff = ({
  instituteId,
  onBack,
  onGrabStaff,
  staff_list,
}) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();
  const [search, setSearch] = useState("");
  const [allStaff, setAllStaff] = React.useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const [selectedStaff, setSelectedStaff] = useState(
    staff_list?.length ? [...staff_list] : []
  );
  const [selectAll, setSelectAll] = useState(false);

  const { assignSearchStaff, assignSearchStaffRefetch } = useAssignSearchStaff({
    skip: !instituteId,
    search: {
      search: search,
      page: page,
      id: instituteId,
      limit: 100,
    },
  });
  React.useEffect(() => {
    if (staff_list?.length) {
      setSelectedStaff(staff_list?.length ? [...staff_list] : []);
    }
  }, [staff_list]);
  React.useEffect(() => {
    if (instituteId) assignSearchStaffRefetch();
  }, [instituteId, search, assignSearchStaffRefetch, page]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (assignSearchStaff?.staff) {
      if (search) {
        setAllStaff(assignSearchStaff?.staff);
        setShowingDataLoading(false);
      } else {
        if (assignSearchStaff?.staff) {
          setAllStaff((prevState) =>
            [
              ...new Set(
                [...prevState, ...assignSearchStaff?.staff]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (assignSearchStaff?.staff?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (assignSearchStaff?.staff.length === 10) setState(true);
    else setState(false);
  }, [assignSearchStaff?.staff]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };

  const onSelectAll = () => {
    let arr = [];
    for (let staff of allStaff) arr.push(staff?._id);
    setSelectedStaff(arr);
    setSelectAll(true);
  };
  const onRemoveAll = () => {
    setSelectedStaff([]);
    setSelectAll(false);
  };

  const onSelectOne = (staff) => {
    if (selectedStaff?.includes(staff)) {
      setSelectedStaff((prev) => prev?.filter((ids) => ids !== staff));
    } else {
      setSelectedStaff((prev) => [...prev, staff]);
    }
  };

  const onNext = () => {
    onGrabStaff(selectedStaff);
  };
  return (
    <div className={style.seating_modal}>
      <section
        className={style.seating_modal_title_left}
        style={{
          position: "relative",
        }}
      >
        <img src="/images/arrow-left-fees-icon.svg" onClick={onBack} alt="" />
        <h6>{t("select_availbale_staff_for_supervision")}</h6>
        <button className={style.next_btn} title="Next" onClick={onNext}>
          {t("next")}
        </button>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.select_mutliple}>
        <p>
          {selectedStaff?.length ? selectedStaff?.length : ""} {` `}
          {t("selected")}
        </p>
        {selectAll ? (
          <button onClick={onRemoveAll}>{t("remove_all")}</button>
        ) : (
          <button onClick={onSelectAll}>{t("select_all")}</button>
        )}
      </div>
      <div
        className={style.search_container}
        style={{
          marginBottom: "0.5rem",
        }}
      >
        <div
          className={style.search_container_input}
          style={{
            width: "100%",
          }}
        >
          <img
            className={style.searchIcon}
            alt="search icon"
            src="/images/search-dash-icon.svg"
          />
          <input
            type="text"
            placeholder={t("search-label")}
            style={{
              width: "100%",
            }}
            onChange={onSearchEvent}
          />
        </div>
      </div>

      {allStaff?.map((value, index) =>
        allStaff?.length === index + 1 ? (
          <div
            className={style.person_container}
            key={value._id}
            ref={ref}
            onClick={() => onSelectOne(value?._id)}
          >
            <img
              src={
                value?.staffProfilePhoto
                  ? `${imageShowUrl}/${value.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="staff profile avatar"
            />
            <div className={style.with_check_container}>
              <div className={style.person_container_text}>
                <h6>{`${value.staffFirstName ?? ""} ${
                  value?.staffMiddleName ?? ""
                } ${value.staffLastName ?? ""}`}</h6>
                <p>
                  {t("index")} {value?.staffROLLNO}
                </p>
              </div>
              {selectedStaff?.includes(value?._id) ? (
                <img
                  src="/images/department/blue-check-icon.svg"
                  alt="checkbox icon"
                  title="Select staff"
                />
              ) : (
                <img
                  src="/images/department/uncheck-icon.svg"
                  alt="checkbox icon"
                  title="Unselect staff"
                />
              )}
            </div>
          </div>
        ) : (
          <div
            className={style.person_container}
            key={value._id}
            onClick={() => onSelectOne(value?._id)}
          >
            <img
              src={
                value?.staffProfilePhoto
                  ? `${imageShowUrl}/${value.staffProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="staff profile avatar"
            />
            <div className={style.with_check_container}>
              <div className={style.person_container_text}>
                <h6>{`${value.staffFirstName ?? ""} ${
                  value?.staffMiddleName ?? ""
                } ${value.staffLastName ?? ""}`}</h6>
                <p>
                  {t("index")} {value?.staffROLLNO}
                </p>
              </div>
              {selectedStaff?.includes(value?._id) ? (
                <img
                  src="/images/department/blue-check-icon.svg"
                  alt="checkbox icon"
                  title="Select staff"
                />
              ) : (
                <img
                  src="/images/department/uncheck-icon.svg"
                  alt="checkbox icon"
                  title="Unselect staff"
                />
              )}
            </div>
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default SelectMulitpleStaff;
