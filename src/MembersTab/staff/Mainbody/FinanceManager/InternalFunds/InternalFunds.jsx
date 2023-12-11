import React, { useEffect } from "react";
import style from "./InternalFunds.module.css";
import Fund from "./Fund/Fund";
import { useState } from "react";
import FundModal from "./FundModal/FundModal";
import Menu from "./Menu/Menu";
import { useFetchFinanceRemainBalanceQuery } from "../../../../../services/financeAPI";
import { useSelector } from "react-redux";
import { useFinanceDetailManager } from "../../../../../hooks/member_tab/finance-api";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

function InternalFunds({ carryParentState, callApi }) {
  const financeAuthor = useSelector((state) => state.financeChange);
  const { financeDetailManager } = useFinanceDetailManager({
    data: {
      fid: financeAuthor?.fid,
      mod_id: "",
    },
    skip: !financeAuthor?.fid,
  });
  const { data: remainQuery } = useFetchFinanceRemainBalanceQuery(
    `${financeAuthor?.fid}`,
    { skip: !financeAuthor?.fid }
  );
  const [addDisplay, setAddDisplay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectIndex, setSelectIndex] = useState(1);
  const [duration, setDuration] = useState({
    from: "",
    to: "",
  });

  const departments = [
    "Total Institute Fund",
    "Computer Department",
    "Information Technology",
    "Electrical Department",
    "E & Tc Department",
    "Mechanical Department",
  ];
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className={style.insFund}>
      {addDisplay && (
        <FundModal
          hideModal={(w) => setAddDisplay(w)}
          addDisplay={addDisplay}
          duration={duration}
          setDuration={setDuration}
        />
      )}
      <div className={style.insFundTop}>
        <div
          className={style.insFundTopLeft}
          onClick={() => setIsOpen(!isOpen)}
        >
          {departments[selectIndex - 1]}
          <img src="/images/downn-icon.svg" alt="" />

          <Menu
            open={isOpen}
            onClose={() => setIsOpen(false)}
            setSelectIndex={setSelectIndex}
          />
        </div>

        <div className={style.blueTabs}>
          <img
            src="/images/filterBlue.svg"
            alt=""
            onClick={() => setAddDisplay(true)}
          />
        </div>
      </div>

      <Fund
        funds={financeDetailManager?.finance}
        duration={duration}
        remain={remainQuery?.remain}
        carryParentState={carryParentState}
        callApi={callApi}
      />
    </div>
  );
}

export default InternalFunds;
