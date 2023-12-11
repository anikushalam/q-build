import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useInventoryList } from "../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import Goods from "./Goods";
import style from "./Inventry.module.css";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

const InventryList = ({ setInventryId, inventryId }) => {
  const fid = useSelector((state) => state.financeChange.fid);
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();
  const [allInventoryList, setAllInventoryList] = React.useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { inventoryList, inventoryListRefetch } = useInventoryList({
    data: {
      fid: fid,
      page: page,
      limit: 10,
    },
    skip: !fid,
  });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (fid) {
      setShowingDataLoading(true);
      inventoryListRefetch();
    }
  }, [page, fid, inventoryListRefetch]);

  useEffect(() => {
    if (inventoryList?.all_goods) {
      const uniquePost = [...allInventoryList, ...inventoryList?.all_goods];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setAllInventoryList(uniqueRefind);
      setShowingDataLoading(false);
    } else if (inventoryList?.all_goods?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (inventoryList?.all_goods?.length === 10) setState(true);
    else setState(false);
  }, [inventoryList?.all_goods]);

  //   console.info("tosasa,s", inventoryList);
  return (
    <div className={style.goods_container_top}>
      {allInventoryList?.map((inventory, index) =>
        allInventoryList?.length === index + 1 ? (
          <div ref={ref} key={inventory?._id}>
            <Goods
              inventory={inventory}
              setInventryId={setInventryId}
              inventryId={inventryId}
            />
          </div>
        ) : (
          <Goods
            key={inventory?._id}
            inventory={inventory}
            setInventryId={setInventryId}
            inventryId={inventryId}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default InventryList;
