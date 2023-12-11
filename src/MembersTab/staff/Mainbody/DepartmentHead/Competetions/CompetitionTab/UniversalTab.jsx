import React from "react";
import { Link, useParams } from "react-router-dom";
import RippleButton from "../../Exminations/Tabs/RippleButton/RippleButton";
import style from "./UniversalTab.module.css";
const UniversalTab = ({
  tabList,
  activeIndexTab,
  setActiveIndexTab,
  customStyleTab,
  carryParentState,
  showAs,
  customStyleLink,
}) => {
  const params = useParams();
  return (
    <div className={style.universal_container}>
      {showAs
        ? tabList?.map((tab, index) =>
            tab?.is_active === "disabled" ? (
              <div
                className={
                  activeIndexTab === tab?.id
                    ? `${style.universal_container_item} ${style.universal_container_item_active}`
                    : style.universal_container_item
                }
                key={index}
                style={{ ...customStyleLink, opacity: "0.5" }}
              >
                <RippleButton>{tab?.name}</RippleButton>
              </div>
            ) : (
              <Link
                to={`/q/${params.username}/${tab?.url}`}
                state={{ ...carryParentState }}
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
            )
          )
        : tabList?.map((tab, index) => (
            <div
              className={
                activeIndexTab === tab?.id
                  ? `${style.universal_container_item} ${style.universal_container_item_active}`
                  : style.universal_container_item
              }
              onClick={() => setActiveIndexTab(tab?.id)}
              key={index}
              style={{ ...customStyleTab }}
            >
              <RippleButton>{tab?.name}</RippleButton>
            </div>
          ))}
    </div>
  );
};

export default UniversalTab;
