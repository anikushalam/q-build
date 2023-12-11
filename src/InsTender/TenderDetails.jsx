import React from "react";
import style from "./VacancyDetails.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  useGetBiderlist,
  useGetSingleTenderDetail,
} from "../hooks/member_tab/career-api";
import ConfirmMarkComplete from "./ConfirmMarkComplete";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import BiderItem from "./BiderItem";

function TenderDetails({ setStatus }) {
  const tenderId = useSelector((state) => state.tenderChange);
  const { t } = useTranslation();
  const jobDesc =
    "B.sc Departmentesdjvc sdkjcbnjskdcnjksdncsadvcj sdciknsjdkc sdjkcnjsdncijsdkncvjskdncj dsknxzc mijsd piasjdkncijsdknvc ijsdcnjs sdfcfsjndcn sdchjn sdcufjbnipajdsnc";
  const { getTenderDetail, getTenderDetailRefetch } = useGetSingleTenderDetail({
    tid: tenderId?.tid,
    skip: !tenderId?.tid,
  });
  const [isOpen, setIsOpen] = useState(false);
  // --------------------------------------
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [biderList, setBiderList] = useState([]);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getBiderlist, getBiderListRefetch } = useGetBiderlist({
    data: {
      tid: tenderId?.tid,
      page: page,
      limit: 10,
    },
    skip: !tenderId?.tid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (tenderId?.tid) {
      setShowingDataLoading(true);
      getBiderListRefetch();
    }
  }, [page, tenderId?.tid, search, getBiderListRefetch]);

  useEffect(() => {
    if (search) {
      setBiderList(getBiderlist?.all_bids);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setBiderList((prevState) =>
          [
            ...new Set(
              [...getBiderlist?.all_bids, ...prevState]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else if (editRefetchStatus) {
        setBiderList((prevState) =>
          [...new Set([...getBiderlist?.all_bids]?.map(JSON.stringify))]?.map(
            JSON.parse
          )
        );
        setShowingDataLoading(false);
        setEditRefetchStatus(false);
      } else {
        if (getBiderlist?.all_bids) {
          setBiderList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getBiderlist?.all_bids]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getBiderlist?.all_bids?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getBiderlist?.all_bids?.length === 10) setState(true);
    else setState(false);
  }, [getBiderlist?.all_bids]);

  console.info(tenderId?.tid);

  return (
    <div className={style.vacancyDetails}>
      <div className={`${style.peventlefttop} ${style.peventlefttopflexleft}`}>
        <img
          src="/images/career/insCareer/arrow-left-white.svg"
          alt="back"
          onClick={() => setStatus("")}
        />
        {t("tender_mgt")}
      </div>
      <div className={style.vacancyDetailsmid}>
        <div className={style.vacancyDetailsmidLeft}>
          <img src="/images/career/insCareer/career_job.svg" />
          <div className={style.vacancyDetailsmidLeftRight}>
            <h6 className={style.insCareerCardsubject}>
              {getTenderDetail?.tender?.tender_requirement}
            </h6>
            <p className={style.insCareerCarddept}>
              {getTenderDetail?.tender?.department?.dName}
            </p>
            <p className={style.insCareerCarddesig}>
              {t("budget_")}: Rs. {getTenderDetail?.tender?.tender_budget}
            </p>
            <p className={style.insCareerCarddesig}>
              {" "}
              {t("bids")}: {getTenderDetail?.tender?.bid_count}
            </p>
          </div>
        </div>
        <div className={style.vacancyDetailsmiddesc}>
          <h6 className={style.insCareerCardsubject}>{t("tender_desc")}:</h6>
          <p className={style.insCareerCarddept}>
            {getTenderDetail?.tender?.tender_about?.length > 165
              ? `${getTenderDetail?.tender?.tender_about?.substring(0, 165)}...`
              : getTenderDetail?.tender?.tender_about}
          </p>
        </div>
        <div className={style.vacancyDetailsmidright}>
          <img src="/images/career/insCareer/edit_jd.svg" />
          <img
            src="/images/career/insCareer/file_download_green.svg"
            style={{ height: "1.2rem" }}
          />
          <p onClick={() => setIsOpen(true)}>{t("mark_as_complete")}</p>
        </div>
      </div>
      <div className={style.searchContainerr}>
        <div className={style.searchContainer}>
          <img alt="" src="/images/search-dept-icon.svg" />
          <input
            type="text"
            //   onChange={(e) => onSearch(e.target.value)}
            placeholder={t("search-label")}
            required
          />
        </div>
      </div>

      <div className={style.header}>
        <div className={style.oneRowDate}>
          <p className={style.joinigDate}>{t("date")}</p>
        </div>
        <div className={style.oneRowName}>
          <p className={style.name}>{t("name")}</p>
        </div>
        <div className={style.oneRowContact}>
          <p className={style.contact}>{t("contact_number")}</p>
        </div>
        <div className={` ${style.oneRowwIndex}`}>
          <p className={style.index}>{t("quotation")}</p>
        </div>
      </div>
      <div className={style.container}>
        {biderList?.map((bid, index) =>
          biderList?.length === index + 1 ? (
            <div ref={ref} key={index} className={style.itemIcon}>
              <BiderItem tid={tenderId?.tid} bid={bid} setStatus={setStatus} />
            </div>
          ) : (
            <div key={index} className={style.itemIcon}>
              <BiderItem tid={tenderId?.tid} bid={bid} setStatus={setStatus} />
            </div>
          )
        )}
      </div>
      {isOpen && (
        <ConfirmMarkComplete
          open={isOpen}
          setStatus={setStatus}
          hideModal={(w) => setIsOpen(w)}
          tid={tenderId?.tid}
          getTenderDetailRefetch={getTenderDetailRefetch}
        />
      )}
    </div>
  );
}

export default TenderDetails;
