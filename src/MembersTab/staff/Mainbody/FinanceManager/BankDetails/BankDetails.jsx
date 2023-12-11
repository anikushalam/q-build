import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllBankByFinance } from "../../../../../hooks/member_tab/finance-api";
import AddBankForm from "./AddBankForm";
import BankDetailInfo from "./BankDetailInfo";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./BankDetails.module.css";
import { useTranslation } from "react-i18next";
import BankCard from "./BankCard";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

const BankDetails = ({ carryParentState, callApi, financeId, viewAs }) => {
  const navigate = useNavigate();
  const getQuery = useLocation();
  const { t } = useTranslation();
  const fid = useSelector((state) => state.financeChange.fid);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const { getAllBankByFinance, getAllBankByFinanceRefetch } =
    useGetAllBankByFinance({
      data: {
        fid: fid ? fid : financeId,
        page: 1,
        limit: 40,
        search: "",
      },
      skip: fid ? !fid : !financeId,
    });
  useEffect(() => {
    if (fid || financeId) getAllBankByFinanceRefetch();
  }, [fid, financeId, getAllBankByFinanceRefetch]);
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  // console.info("this is all fisfs", getAllBankByFinance);
  const onEditAction = () => {
    setEdit((pre) => !pre);
  };
  return (
    <>
      {getQuery.search?.substring(3) === "bank" ? (
        !add && (
          <div className={style.bank}>
            <div className={style.bank_header}>
              <div className={style.bank_header_left}>
                <img
                  src="/images/left-back-icon.svg"
                  alt="back arrow"
                  className={style.back_icon}
                  onClick={() => navigate(-1)}
                />
                <h6 className={style.bank_header_title}>
                  {t("bank_acount_detail")}
                </h6>
              </div>
              <img
                src="/images/add-plus-blue-icon.svg"
                alt="back arrow"
                className={style.back_icon}
                onClick={() => setAdd(true)}
              />
            </div>
            <div className={style.bank_list}>
              {getAllBankByFinance?.all_accounts?.map((bank) => (
                <BankCard
                  bank={bank}
                  carryParentState={carryParentState}
                  callApi={callApi}
                  viewAs={viewAs}
                />
              ))}
            </div>
          </div>
        )
      ) : (
        <BankDetailInfo
          fid={fid ? fid : financeId}
          getAllBankByFinanceRefetch={getAllBankByFinanceRefetch}
        />
      )}

      {add && (
        <AddBankForm
          bank_query={getAllBankByFinance?.bank_query}
          onRefetch={getAllBankByFinanceRefetch}
          onEditAction={onEditAction}
          edit={edit}
          onClose={() => setAdd(false)}
        />
      )}
      {/* {getBankByFinance?.bank_query && !edit ? (
        <BankDetailInfo
          bank_query={getBankByFinance?.bank_query}
          fid={fid}
          onEditAction={onEditAction}
        />
      ) : (
        <AddBankForm
          bank_query={getBankByFinance?.bank_query}
          onEditRefetch={getAllBankByFinanceRefetch}
          onEditAction={onEditAction}
          edit={edit}
          fid={fid}
        />
      )} */}
    </>
  );
};

export default BankDetails;
