import { useFinanceModerator } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import AddButton from "../../../Ui/Button/AddButton";
import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { customDebounce } from "../../../Utils/Functions/debounce";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import FinanceModeratorCard from "./FinanceModeratorCard";
import AddFinanceModerator from "./AddFinanceModerator";
import style from "../FinanceManager.module.css";
import AddButtonWrapper from "../../../Ui/Button/AddButtonWrapper";
import Loading from "../../../Loader/Loading";
import QvipleLoader from "../../../Loader/QvipleLoader";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";

const FinanceModerator = ({ fid, instituteId }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const [addModerator, setAddModerator] = useState(false);

  const { financeModerator, financeModeratorLoading } = useFinanceModerator({
    data: {
      fid: fid,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !fid,
  });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeModerator?.list?.length) {
      let obj = nextPage(financeModerator?.list?.length);
      setState(() => obj);
    }
  }, [financeModerator?.list?.length]);

  const onDebounce = useCallback(
    customDebounce((val) => {
      setPage(() => 1);
      setSearch(val);
    }, 500),
    []
  );

  const onSearchEvent = (e) => {
    if (e.target.value) onDebounce(e.target.value);
    else {
      setPage(() => 1);
      setSearch("");
    }
  };

  const onToggle = () => {
    setAddModerator((pre) => !pre);
  };
  return (
    <>
      <UserMemberContainerWrapper>
        <UserMemberContentWrapper>
          <div className={style.fm_header_container}>
            <h6>{t("finance_moderators")}</h6>
            <div className={style.fm_search}>
              <section className={style.fm_search_container}>
                <div className={style.fm_search_container_inner}>
                  <img
                    className={style.fm_search_icon}
                    alt="search icon"
                    src={`${assestsNavbarUrl}/navbar-search.svg`}
                  />
                  <input
                    type="text"
                    placeholder={t("search")}
                    onChange={onSearchEvent}
                  />
                </div>
              </section>
            </div>
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />

        <UserMemberContentWrapper
          customStyle={{
            paddingTop: "0.2rem",
          }}
        >
          <AddButtonWrapper>
            <AddButton label="add_new_moderator" onAction={onToggle} />
          </AddButtonWrapper>

          {financeModerator?.list?.map((moderator, index) =>
            financeModerator?.list?.length === index + 1 ? (
              <div key={moderator?._id} ref={ref}>
                <FinanceModeratorCard
                  moderator={moderator}
                  financeId={fid}
                  instituteId={instituteId}
                />
              </div>
            ) : (
              <FinanceModeratorCard
                moderator={moderator}
                key={moderator?._id}
                financeId={fid}
                instituteId={instituteId}
              />
            )
          )}
          {financeModeratorLoading ? (
            search ? (
              <QvipleLoader />
            ) : (
              <Loading />
            )
          ) : search ? (
            !financeModerator?.list?.length && (
              <EmptyMessage
                customStyleContainer={{
                  marginTop: "1.5rem",
                }}
                title="No moderator fuond related this search."
              />
            )
          ) : (
            !financeModerator?.list?.length && (
              <EmptyMessage
                customStyleContainer={{
                  marginTop: "1.5rem",
                }}
                title="No moderator added."
              />
            )
          )}
        </UserMemberContentWrapper>
      </UserMemberContainerWrapper>
      {addModerator && (
        <AddFinanceModerator
          instituteId={instituteId}
          fid={fid}
          onClose={onToggle}
        />
      )}
    </>
  );
};

export default FinanceModerator;
