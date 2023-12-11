import React from "react";
import { Link, useParams } from "react-router-dom";
import RippleButton from "../../Exminations/Tabs/RippleButton/RippleButton";
import style from "./UniversalTab.module.css";
const UniversalTabWithState = ({
  tabList,
  activeIndexTab,
  customStyleTab,
  customStyleLink,
}) => {
  const params = useParams();
  return (
    <div className={style.universal_container}>
      {tabList?.map((tab, index) => (
        <Link
          to={`/q/${params.username}/${tab?.url}`}
          state={tab?.carryParentState}
          style={{ ...customStyleLink }}
          key={index}
        >
          <div
            className={
              activeIndexTab === tab?.id
                ? `${style.universal_container_item} ${style.universal_container_item_active}`
                : style.universal_container_item
            }
            style={{ ...customStyleTab }}
          >
            <RippleButton>{tab?.name}</RippleButton>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UniversalTabWithState;
