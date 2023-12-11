import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useUserPaymentHistory } from "../../../../../../hooks/setting-api";
import HistoryCrad from "./HistoryCrad";

const ReceiptUser = () => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const [state, setState] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [ref, inView] = useInView();
  const [allHistory, setAllHistory] = React.useState([]);
  const { userPayment, userPaymentRefetch } = useUserPaymentHistory({
    data: {
      uid: ids?.id,
      page: page,
      limit: 10,
      filter: "Expense",
    },
    skip: !ids?.id,
  });
  React.useEffect(() => {
    if (ids?.id) userPaymentRefetch();
  }, [ids?.id, userPaymentRefetch, page]);

  React.useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (userPayment?.history) {
      const uniquePost = [...allHistory, ...userPayment?.history];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setAllHistory(uniqueRefind);
    }
    //for next api is call or not dashboard
    if (userPayment?.history.length === 10) setState(true);
    else setState(false);
  }, [userPayment?.history]);

  return (
    <>
      {allHistory.map((history, index) =>
        allHistory?.length === index + 1 ? (
          <div key={index} ref={ref}>
            <HistoryCrad history={history} />
          </div>
        ) : (
          <HistoryCrad key={index} history={history} />
        )
      )}
      {!allHistory?.length && <section>{t("no_receipt")}</section>}
    </>
  );
};

export default ReceiptUser;
