import { useTranslation } from "react-i18next";
import FinanceDepositStudentCard from "./FinanceDepositStudentCard";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { customDebounce } from "../../../Utils/Functions/debounce";
import Modal from "../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import style from "../../PlateformUser/PlateformUser.module.css";
import { useFinanceMasterDepositAll } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import Loading from "../../../Loader/Loading";
import QvipleLoader from "../../../Loader/QvipleLoader";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";
const FinanceDepositStudentList = ({ fmid, onClose, onSelectRefund }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });

  const { financeMasterDepositAll, financeMasterDepositAllLoading } =
    useFinanceMasterDepositAll({
      data: {
        fmid: fmid,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !fmid,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeMasterDepositAll?.list?.length) {
      let obj = nextPage(financeMasterDepositAll?.list?.length);
      setState(() => obj);
    }
  }, [financeMasterDepositAll?.list?.length]);

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
  const onSelect = (value) => {
    onSelectRefund(value);
  };

  // console.info("financeMasterDepositAll", financeMasterDepositAll);
  return (
    <Modal onClose={onClose}>
      <div
        className={style.modal_container}
        style={{
          marginBottom: "1rem",
        }}
      >
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("deposit_student_list")}</h6>
            </div>
            <img
              src={`${assestsUserFinanceUrl}/close.svg`}
              alt="close icon"
              onClick={onClose}
            />
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />
        <UserMemberContentWrapper
          customStyle={{
            paddingTop: "0",
          }}
        >
          <div className={style.assign_search_container}>
            <input
              type="text"
              placeholder={t("search")}
              className={style.assign_search_input}
              onChange={onSearchEvent}
            />
            <img
              src={`${assestsNavbarUrl}/navbar-search.svg`}
              alt="search icon"
            />
          </div>

          {financeMasterDepositAll?.list?.map((student, index) =>
            financeMasterDepositAll?.list?.length === index + 1 ? (
              <div key={student?._id} ref={ref}>
                <FinanceDepositStudentCard
                  student={student}
                  onSelect={onSelect}
                />
              </div>
            ) : (
              <FinanceDepositStudentCard
                student={student}
                key={student?._id}
                onSelect={onSelect}
              />
            )
          )}
          {financeMasterDepositAllLoading ? (
            search ? (
              <QvipleLoader />
            ) : (
              <Loading />
            )
          ) : search ? (
            !financeMasterDepositAll?.list?.length && (
              <EmptyMessage
                customStyleContainer={{
                  marginTop: "1.5rem",
                }}
                title="No student fuond related this search."
              />
            )
          ) : (
            !financeMasterDepositAll?.list?.length && (
              <EmptyMessage
                customStyleContainer={{
                  marginTop: "1.5rem",
                }}
                title="No deposit students."
              />
            )
          )}
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default FinanceDepositStudentList;
