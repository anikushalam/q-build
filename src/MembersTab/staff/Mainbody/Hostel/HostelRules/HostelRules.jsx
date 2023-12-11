import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useGetHostelRules } from "../../../../../hooks/member_tab/hostel-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../Hostel.module.css";
import AddRules from "./AddRules";
import HostelRuleMenu from "./HostelRuleMenu";
import RulesCard from "./RulesCard";

const HostelRules = ({ hid, viewAs }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);
  const [openRuleMenu, setOpenRuleMenu] = useState("");
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getHostelRules, getHostelRulesRefetch } = useGetHostelRules({
    hid: hid,
    skip: !hid,
  });
  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getHostelRulesRefetch();
    }
  }, [hid, getHostelRulesRefetch]);
  useEffect(() => {
    if (getHostelRules?.one_hostel?.rules) {
      setShowingDataLoading(false);
    } else if (getHostelRules?.one_hostel?.rules?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getHostelRules?.one_hostel?.rules]);

  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  return (
    <>
      {viewAs === "HOSTEL_SEARCH" ? (
        <div
          className={style.with_search}
          style={{
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onBackWithArrowLeft}
            alt="go to previous tab"
            title="Go Back"
            style={{
              cursor: "pointer",
            }}
          />
          <h6>{t("hostel_rule_and_regulation")}</h6>
        </div>
      ) : (
        <div className={style.with_search}>
          <h6>{t("hostel_rule_and_regulation")}</h6>
        </div>
      )}
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      {viewAs === "HOSTEL_SEARCH" ? (
        ""
      ) : (
        <p className={style.add_new_category} onClick={onClose}>
          {t("create_new_rule")}
        </p>
      )}
      {getHostelRules?.one_hostel?.rules?.map((rules) => (
        <RulesCard
          rules={rules}
          key={rules?._id}
          setOpenRuleMenu={setOpenRuleMenu}
          viewAs={viewAs}
        />
      ))}
      {showingDataLoading && <QvipleLoading />}
      {add && (
        <AddRules
          onClose={onClose}
          hid={hid}
          onRefetch={getHostelRulesRefetch}
        />
      )}
      {openRuleMenu && (
        <HostelRuleMenu
          onClose={() => setOpenRuleMenu("")}
          hid={hid}
          onRefetch={getHostelRulesRefetch}
          openRuleMenu={openRuleMenu}
        />
      )}
    </>
  );
};

export default HostelRules;
