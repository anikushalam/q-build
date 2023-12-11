import { useFinanceAllStudentMessageHistory } from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import UserMemberContainerWrapper from "../../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import { nextPage } from "../../../../Utils/Functions/nextPage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import style from "../../FinanceManager.module.css";
import Loading from "../../../../Loader/Loading";
import StudentMessageHistoryCard from "./StudentMessageHistoryCard";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import EmptyMessage from "../../../../Utils/EmptyMessage/EmptyMessage";
const StudentMessageHistory = ({ instituteId }) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();

  const {
    financeAllStudentMessageHistory,
    financeAllStudentMessageHistoryLoading,
  } = useFinanceAllStudentMessageHistory({
    data: {
      id: instituteId,
      page: page,
      limit: 10,
      flow: "INSTITUTE_ADMIN",
    },
    skip: !instituteId,
  });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeAllStudentMessageHistory?.length?.length) {
      let obj = nextPage(financeAllStudentMessageHistory?.list?.length);
      setState(() => obj);
    }
  }, [financeAllStudentMessageHistory?.length?.length]);
  return (
    <UserMemberContainerWrapper>
      <UserMemberContentWrapper>
        <div className={style.fm_header_container}>
          <h6>{t("student_message_history")}</h6>
        </div>
      </UserMemberContentWrapper>
      <BorderBottom />
      <UserMemberContentWrapper
        customStyle={{
          paddingTop: "0.3rem",
        }}
      >
        {financeAllStudentMessageHistory?.list?.map((data, index) =>
          financeAllStudentMessageHistory?.list?.length === index + 1 ? (
            <div key={data?._id} ref={ref}>
              <StudentMessageHistoryCard data={data} />
            </div>
          ) : (
            <StudentMessageHistoryCard data={data} key={data?._id} />
          )
        )}
        {financeAllStudentMessageHistoryLoading ? (
          <Loading />
        ) : (
          !financeAllStudentMessageHistory?.list?.length && (
            <EmptyMessage
              customStyleContainer={{
                marginTop: "1.5rem",
              }}
              title="No student messages added."
            />
          )
        )}
      </UserMemberContentWrapper>
    </UserMemberContainerWrapper>
  );
};

export default StudentMessageHistory;
