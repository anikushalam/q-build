import React from "react";
import style from "./SecondRow.module.css";
import Tab from "./Tab/Tab";
import { useGetAdminStatsQuery } from "../../../../services/superAdminAPI";

function SecondRow() {
  const { data: statsCount } = useGetAdminStatsQuery()
  return (
    <div className={style.secondRow}>
      <Tab nbr={statsCount?.postCount} img="/images/admin/text-icon.svg" />

      <Tab nbr={statsCount?.postCount} img="/images/admin/img-icon.svg" />

      <Tab nbr={statsCount?.questionCount} img="/images/admin/book-icon.svg" />

      <Tab nbr={statsCount?.pollCount} img="/images/admin/save-icon.svg" />

      <Tab nbr={statsCount?.repostCount} img="/images/admin/share-icon.svg" />
    </div>
  );
}

export default SecondRow;
