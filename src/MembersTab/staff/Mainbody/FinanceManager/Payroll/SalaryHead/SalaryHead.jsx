import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useGetPayrollHeadList } from "../../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import style from "../Payroll.module.css";
import AddSalaryHead from "./AddSalaryHead";
import SalaryHeadCard from "./SalaryHeadCard";
const SalaryHead = ({ carryParentState }) => {
  const { t } = useTranslation();
  const fid = useSelector((state) => state.financeChange.fid);
  const [openSalaryHead, setOpenSalaryHead] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [salaryHeadList, setSalaryHeadList] = useState([]);

  const { getPayrollHeadList, getPayrollHeadListRefetch } =
    useGetPayrollHeadList({
      data: {
        fid: fid,
        page: page,
        limit: 10,
        search: "",
        filter: "",
      },
      skip: !fid,
    });

  useEffect(() => {
    if (fid) {
      setShowingDataLoading(true);
      getPayrollHeadListRefetch();
    }
  }, [fid, page, getPayrollHeadListRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setSalaryHeadList(getPayrollHeadList?.all_masters);
      setRefetchStatus(false);
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

  const onRefetchWhenAdd = () => {
    setRefetchStatus(true);
    setPage(1);
    setShowingDataLoading(true);
    getPayrollHeadListRefetch();
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <h6
          className={style.add_new_payroll}
          onClick={() => setOpenSalaryHead(true)}
        >
          {t("add_new_employess")}
        </h6>
      </div>
      {salaryHeadList?.map((head, index) =>
        salaryHeadList?.length === index + 1 ? (
          <div ref={ref} key={head?._id}>
            <SalaryHeadCard head={head} carryParentState={carryParentState} />
          </div>
        ) : (
          <SalaryHeadCard
            head={head}
            key={head?._id}
            carryParentState={carryParentState}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {openSalaryHead && (
        <AddSalaryHead
          onClose={() => setOpenSalaryHead(false)}
          onRefetch={onRefetchWhenAdd}
        />
      )}
    </>
  );
};

export default SalaryHead;
