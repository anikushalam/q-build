import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import style from "../../FeesStructure/FeesStructure.module.css";
import { debounce } from "lodash";
import { useGetPayrollHeadList } from "../../../../../../hooks/member_tab/finance-api";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
const SelectSalaryHead = ({
  onClose,
  financeId,
  setAddFeeHead,
  filterBy,
  setAddFeeHeadDecution,
}) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [search, setSearch] = useState("");
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [salaryHeadList, setSalaryHeadList] = useState([]);
  const [selectedFee, setSelectedFee] = useState([]);
  const [selectedFeeId, setSelectedFeeId] = useState([]);
  const { getPayrollHeadList, getPayrollHeadListRefetch } =
    useGetPayrollHeadList({
      data: {
        fid: financeId,
        page: page,
        limit: 10,
        search: search,
        filter: filterBy,
      },
      skip: !financeId,
    });
  useEffect(() => {
    if (financeId) {
      setShowingDataLoading(true);
      getPayrollHeadListRefetch();
    }
  }, [financeId, page, search, getPayrollHeadListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setSalaryHeadList(getPayrollHeadList?.all_masters);
      setShowingDataLoading(false);
    } else {
      if (getPayrollHeadList?.all_masters) {
        setSalaryHeadList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getPayrollHeadList?.all_masters]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getPayrollHeadList?.all_masters?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getPayrollHeadList?.all_masters?.length === 10) setState(true);
    else setState(false);
  }, [getPayrollHeadList?.all_masters]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  const onSelectButton = () => {
    if (filterBy === "Deduction") {
      setAddFeeHeadDecution((prev) => [...prev, ...selectedFee]);
    } else {
      setAddFeeHead((prev) => [...prev, ...selectedFee]);
    }
    onClose();
  };
  const onSelect = (val) => {
    const objProperties = {
      master_name: val?.payroll_head_name,
      master_amount: 0,
      master_status: val?.payroll_head_type,
      master_id: val?._id,
    };
    if (selectedFeeId?.includes(val?._id)) {
      let selectedIndex = selectedFeeId?.indexOf(val?._id);
      let selectedFeeItem = [];
      for (let i = 0; i < selectedFee?.length; i++) {
        if (i === selectedIndex) {
        } else {
          selectedFeeItem.push(selectedFee[i]);
        }
      }
      setSelectedFeeId((prevState) =>
        prevState?.filter((obj) => obj !== val?._id)
      );
      setSelectedFee(selectedFeeItem);
    } else {
      setSelectedFeeId((prevState) => [...prevState, val?._id]);
      setSelectedFee((prevState) => [...prevState, objProperties]);
    }
    // setSelectedFee((prevState)=())
  };
  return (
    <>
      <div className={style.add_category_modal_title}>
        <section className={style.add_category_modal_title_left}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt=""
          />
          <h6>{t("select_salary_head")}</h6>
        </section>
        <h6
          style={{
            color: "#002BBE",
            cursor: "pointer",
          }}
          onClick={onSelectButton}
        >
          {t("select")}
        </h6>
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />

      <div className={style.search_container}>
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
            // onClick={onClick}
          />
        </div>
      </div>

      {salaryHeadList?.map((head, index) =>
        salaryHeadList?.length === index + 1 ? (
          <div
            className={
              selectedFeeId?.includes(head?._id)
                ? `${style.category_card} ${style.category_card_hover_active}`
                : `${style.category_card} ${style.category_card_hover}`
            }
            key={head?._id}
            ref={ref}
            style={{
              height: "74px",
            }}
            onClick={() => onSelect(head)}
          >
            <img
              style={{
                height: "36px",
                width: "36px",
              }}
              src="/images/fees-category-icon.svg"
              alt="categor icon"
            />
            <div className={style.category_card_fee}>
              <h6
                style={{
                  marginBottom: "0.3rem",
                }}
              >
                {head?.payroll_head_name ?? ""}
              </h6>
              <h6
                style={{
                  color: "rgba(18, 18, 18, 0.5)",
                }}
              >
                {head?.payroll_head_type ?? ""}
              </h6>
            </div>
          </div>
        ) : (
          <div
            className={
              selectedFeeId?.includes(head?._id)
                ? `${style.category_card} ${style.category_card_hover_active}`
                : `${style.category_card} ${style.category_card_hover}`
            }
            key={head?._id}
            style={{
              height: "74px",
            }}
            onClick={() => onSelect(head)}
          >
            <img
              style={{
                height: "36px",
                width: "36px",
              }}
              src="/images/fees-category-icon.svg"
              alt="categor icon"
            />
            <div className={style.category_card_fee}>
              <h6
                style={{
                  marginBottom: "0.3rem",
                }}
              >
                {head?.payroll_head_name ?? ""}
              </h6>
              <h6
                style={{
                  color: "rgba(18, 18, 18, 0.5)",
                }}
              >
                {head?.payroll_head_type ?? ""}
              </h6>
            </div>
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default SelectSalaryHead;
