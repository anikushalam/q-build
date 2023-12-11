import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import AddButton from "../../../Ui/Button/AddButton";
import AddButtonWrapper from "../../../Ui/Button/AddButtonWrapper";
import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { customDebounce } from "../../../Utils/Functions/debounce";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import style from "../FinanceManager.module.css";
import { useFinanceAllInternalFee } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import AddInternalFees from "./AddInternalFees";
import InternalFeesCard from "./InternalFeesCard";
import Loading from "../../../Loader/Loading";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";
import QvipleLoader from "../../../Loader/QvipleLoader";

const InternalFees = ({ fid }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [addFees, setAddFees] = useState(false);
  const [ref, inView] = useInView({ skip: search });

  const { financeAllInternalFee, financeAllInternalFeeLoading } =
    useFinanceAllInternalFee({
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
    if (financeAllInternalFee?.list?.length) {
      let obj = nextPage(financeAllInternalFee?.list?.length);
      setState(() => obj);
    }
  }, [financeAllInternalFee?.list?.length]);

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
    setAddFees((pre) => !pre);
  };
  return (
    <>
      <UserMemberContainerWrapper>
        <UserMemberContentWrapper>
          <div className={style.fm_header_container}>
            <h6>{t("internal_fees")}</h6>
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
            paddingTop: "0",
          }}
        >
          <AddButtonWrapper>
            <AddButton label="create_new_fees" onAction={onToggle} />
          </AddButtonWrapper>

          {financeAllInternalFee?.list?.map((fees, index) =>
            financeAllInternalFee?.list?.length === index + 1 ? (
              <div key={fees?._id} ref={ref}>
                <InternalFeesCard fees={fees} />
              </div>
            ) : (
              <InternalFeesCard fees={fees} key={fees?._id} />
            )
          )}
          {financeAllInternalFeeLoading ? (
            search ? (
              <QvipleLoader />
            ) : (
              <Loading />
            )
          ) : search ? (
            !financeAllInternalFee?.list?.length && (
              <EmptyMessage
                customStyleContainer={{
                  marginTop: "1.5rem",
                }}
                title="No internal fees fuond related this search."
              />
            )
          ) : (
            !financeAllInternalFee?.list?.length && (
              <EmptyMessage
                customStyleContainer={{
                  marginTop: "1.5rem",
                }}
                title="No internal fees added."
              />
            )
          )}
        </UserMemberContentWrapper>
      </UserMemberContainerWrapper>
      {addFees && <AddInternalFees onClose={onToggle} fid={fid} />}
    </>
  );
};

export default InternalFees;
