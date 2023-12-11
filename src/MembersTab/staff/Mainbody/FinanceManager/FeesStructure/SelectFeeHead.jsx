import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetAllFeeHeadMaster } from "../../../../../hooks/member_tab/finance-api";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "./FeesStructure.module.css";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
const SelectFeeHead = ({ onClose, financeId, setFeeHead }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [search, setSearch] = useState("");
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [feeHeadList, setFeeHeadList] = useState([]);
  const [selectedFee, setSelectedFee] = useState([]);
  const [selectedFeeId, setSelectedFeeId] = useState([]);
  const { getAllFeeHeadMaster, getAllFeeHeadMasterRefetch } =
    useGetAllFeeHeadMaster({
      data: {
        fid: financeId,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !financeId,
    });
  useEffect(() => {
    if (financeId) {
      setShowingDataLoading(true);
      getAllFeeHeadMasterRefetch();
    }
  }, [financeId, page, search, getAllFeeHeadMasterRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setFeeHeadList(getAllFeeHeadMaster?.all_master);
      setShowingDataLoading(false);
    } else {
      if (getAllFeeHeadMaster?.all_master) {
        setFeeHeadList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getAllFeeHeadMaster?.all_master]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getAllFeeHeadMaster?.all_master?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getAllFeeHeadMaster?.all_master?.length === 10) setState(true);
    else setState(false);
  }, [getAllFeeHeadMaster?.all_master]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  const onSelectButton = () => {
    setFeeHead((prev) => [...prev, ...selectedFee]);
    onClose();
  };
  const onSelect = (val) => {
    const objProperties = {
      head_name: val?.master_name,
      head_amount: val?.master_amount,
      master: val?._id,
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
          <h6>{t("select_fees_head")}</h6>
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
      <BorderBottom />

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

      {feeHeadList?.map((feeHead, index) =>
        feeHeadList?.length === index + 1 ? (
          <div
            className={
              selectedFeeId?.includes(feeHead?._id)
                ? `${style.category_card} ${style.category_card_hover_active}`
                : `${style.category_card} ${style.category_card_hover}`
            }
            key={feeHead?._id}
            ref={ref}
            style={{
              height: "74px",
            }}
            onClick={() => onSelect(feeHead)}
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
                {feeHead?.master_name ?? ""}
              </h6>
              <h6
                style={{
                  color: "rgba(18, 18, 18, 0.5)",
                }}
              >
                {t("rs")}.{feeHead?.master_amount ?? 0}
              </h6>
            </div>
          </div>
        ) : (
          <div
            className={
              selectedFeeId?.includes(feeHead?._id)
                ? `${style.category_card} ${style.category_card_hover_active}`
                : `${style.category_card} ${style.category_card_hover}`
            }
            key={feeHead?._id}
            style={{
              height: "74px",
            }}
            onClick={() => onSelect(feeHead)}
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
                {feeHead?.master_name ?? ""}
              </h6>
              <h6
                style={{
                  color: "rgba(18, 18, 18, 0.5)",
                }}
              >
                {t("rs")}.{feeHead?.master_amount ?? 0}
              </h6>
            </div>
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default SelectFeeHead;
