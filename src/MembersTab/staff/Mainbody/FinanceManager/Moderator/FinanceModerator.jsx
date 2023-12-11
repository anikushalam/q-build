import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useGetModeratorByFinance } from "../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import FinanceAddModerator from "./AddFinanceModerator";
import style from "./FinanceModerator.module.css";
import FinanceModeratoMenu from "./FinanceModeratoMenu";
import FinanceModeratorCard from "./FinanceModeratorCard";
import { useSelector } from "react-redux";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
const FinanceModerator = ({ financeId, insId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const ids = useSelector((state) => state.financeChange);
  const [addModerator, setAddModerator] = useState(false);
  const [openModeratorMenu, setOpenModeratorMenu] = useState("");
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [moderatorList, setModeratorList] = useState([]);

  const { getModeratorByFinance, getModeratorByFinanceRefetch } =
    useGetModeratorByFinance({
      data: {
        fid: ids.fid ? ids.fid : financeId,
        page: page,
        limit: 10,
      },
      skip: ids.fid ? !ids.fid : !financeId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (ids.fid || financeId) {
      setShowingDataLoading(true);
      getModeratorByFinanceRefetch();
    }
  }, [ids.fid, financeId, page, getModeratorByFinanceRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setModeratorList(getModeratorByFinance?.all_mods);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (getModeratorByFinance?.all_mods) {
        setModeratorList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getModeratorByFinance?.all_mods]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getModeratorByFinance?.all_mods?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (getModeratorByFinance?.all_mods?.length === 10) setState(true);
    else setState(false);
  }, [getModeratorByFinance?.all_mods]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  const onRefetchWhenAdd = () => {
    setRefetchStatus(true);
    setPage(1);
    setShowingDataLoading(true);
    getModeratorByFinanceRefetch();
  };
  // console.info("this s moderator", openModeratorMenu);
  return (
    <div className={style.moderator_container}>
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
        <h6>{t("finance_moderator")}</h6>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <h6
        className={style.add_new_moderator}
        onClick={() => setAddModerator(true)}
      >
        {t("add_new_moderator")}
      </h6>
      <div className={style.refund_list}>
        {moderatorList?.map((moderator, index) =>
          moderatorList?.length === index + 1 ? (
            <div ref={ref} key={moderator?._id}>
              <FinanceModeratorCard
                moderator={moderator}
                setOpenModeratorMenu={setOpenModeratorMenu}
              />
            </div>
          ) : (
            <FinanceModeratorCard
              moderator={moderator}
              key={moderator?._id}
              setOpenModeratorMenu={setOpenModeratorMenu}
            />
          )
        )}
        {addModerator && (
          <FinanceAddModerator
            onClose={() => setAddModerator((pre) => !pre)}
            instituteId={ids.insId ? ids.insId : insId}
            fid={ids.fid ? ids.fid : financeId}
            onRefetchWhenAdd={onRefetchWhenAdd}
          />
        )}
        {openModeratorMenu && (
          <FinanceModeratoMenu
            financeId={ids.fid ? ids.fid : financeId}
            instituteId={ids.insId ? ids.insId : insId}
            onRefetch={onRefetchWhenAdd}
            onClose={() => setOpenModeratorMenu("")}
            openModeratorMenu={openModeratorMenu}
          />
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </div>
  );
};

export default FinanceModerator;
