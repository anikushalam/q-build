import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import style from "../FinanceManager.module.css";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import CreateButton from "../../../Ui/Button/CreateButton";
import { customDebounce } from "../../../Utils/Functions/debounce";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { useInstituteAllStudent } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import FinanceAllStudentTableHeader from "./FinanceAllStudentTableHeader";
import FinanceAllStudentCard from "./FinanceAllStudentCard";
import AllStudentMessageSend from "./AllStudentMessageSend";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import QvipleLoader from "../../../Loader/QvipleLoader";
import Loading from "../../../Loader/Loading";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";

const FinanceAllStudent = ({
  instituteId,
  studentAlias,
  headId,
  messageId,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const params = useParams();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const [open, setOpen] = useState(false);
  const { instituteAllStudent, instituteAllStudentLoading } =
    useInstituteAllStudent({
      data: {
        id: instituteId,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !instituteId,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (instituteAllStudent?.list) {
      let obj = nextPage(instituteAllStudent?.list?.length);
      setState(() => obj);
    }
  }, [instituteAllStudent?.list]);

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
    setOpen((pre) => !pre);
  };

  const onNavigate = () => {
    navigate(`/q/${params.username}/member/staff/finance?type=message`, {
      state: getQuery.state,
    });
  };
  return (
    <>
      <UserMemberContainerWrapper>
        <UserMemberContentWrapper>
          <div className={style.fm_header_container}>
            <h6>{t("all_students")}</h6>
            <div className={style.fm_both_filter}>
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
                      style={{
                        minWidth: "300px",
                      }}
                    />
                  </div>
                </section>
              </div>
              <img
                src={`${assestsUserFinanceUrl}/history.svg`}
                alt="history icon"
                onClick={onNavigate}
              />
              <CreateButton
                label="student_message"
                customStyle={{
                  margin: "0",
                }}
                onAction={onToggle}
              />
            </div>
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />
        <UserMemberContentWrapper>
          <FinanceAllStudentTableHeader studentAlias={studentAlias} />
        </UserMemberContentWrapper>

        <BorderBottom />
        <UserMemberContentWrapper>
          {instituteAllStudent?.list?.map((student, index) =>
            instituteAllStudent?.list?.length === index + 1 ? (
              <div key={student?._id} ref={ref}>
                <FinanceAllStudentCard
                  student={student}
                  instituteId={instituteId}
                  messageId={messageId}
                  headId={headId}
                />
              </div>
            ) : (
              <FinanceAllStudentCard
                student={student}
                key={student?._id}
                instituteId={instituteId}
                messageId={messageId}
                headId={headId}
              />
            )
          )}
          {instituteAllStudentLoading ? (
            search ? (
              <QvipleLoader />
            ) : (
              <Loading />
            )
          ) : search ? (
            !instituteAllStudent?.list?.length && (
              <EmptyMessage title="No student fuond related this search." />
            )
          ) : (
            !instituteAllStudent?.list?.length && (
              <EmptyMessage title="No students added in institute." />
            )
          )}
        </UserMemberContentWrapper>
      </UserMemberContainerWrapper>

      {open && (
        <AllStudentMessageSend
          onClose={onToggle}
          messageId={messageId}
          instituteId={instituteId}
          headId={headId}
          parentState={getQuery.state}
          toRedirectUrl={`/q/${params.username}/member/staff/finance?type=message`}
          viewAs="FINANCE_MANAGER"
        />
      )}
    </>
  );
};

export default FinanceAllStudent;
