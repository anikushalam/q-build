import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useOneInventoryExpneseList } from "../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import InventoryExpnese from "./InventoryExpnese";
import style from "./Inventry.module.css";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

const InventryDetail = ({ inventryId, setInventryId }) => {
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();
  const [allInventoryExpenseList, setAllInventoryExpenseList] = React.useState(
    []
  );
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { inventoryExpneseList, inventoryExpneseListRefetch } =
    useOneInventoryExpneseList({
      data: {
        inid: inventryId?._id,
        page: page,
        limit: 10,
      },
      skip: !inventryId?._id,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (inventryId?._id) setAllInventoryExpenseList([]);
  }, [inventryId?._id]);
  useEffect(() => {
    if (inventryId?._id) {
      setShowingDataLoading(true);
      inventoryExpneseListRefetch();
    }
  }, [page, inventryId?._id, inventoryExpneseListRefetch]);

  useEffect(() => {
    if (inventoryExpneseList?.all_expenses) {
      const uniquePost = [
        ...allInventoryExpenseList,
        ...inventoryExpneseList?.all_expenses,
      ];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setAllInventoryExpenseList(uniqueRefind);
      setShowingDataLoading(false);
    } else if (inventoryExpneseList?.all_expenses?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (inventoryExpneseList?.all_expenses?.length === 10) setState(true);
    else setState(false);
  }, [inventoryExpneseList?.all_expenses]);

  //   console.info("sjgsmgngs", inventoryExpneseList);
  return (
    <div className={style.goods_container_top}>
      <div className={style.goods_detail_top}>
        <img
          src="/images/left-back-icon.svg"
          alt="back icon"
          className={style.goods_detail_top_image}
          onClick={() => setInventryId("")}
        />
        <h6 className={style.goods_detail_toph6}>{inventryId?.goods_name}</h6>
      </div>
      {allInventoryExpenseList?.map((expnese, index) =>
        allInventoryExpenseList?.length === index + 1 ? (
          <div ref={ref} key={expnese?._id}>
            <InventoryExpnese
              expnese={expnese}
              setInventryId={setInventryId}
              inventryId={inventryId}
              worth={inventryId?.goods_amount}
            />
          </div>
        ) : (
          <InventoryExpnese
            key={expnese?._id}
            expnese={expnese}
            setInventryId={setInventryId}
            inventryId={inventryId}
            worth={inventryId?.goods_amount}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default InventryDetail;
