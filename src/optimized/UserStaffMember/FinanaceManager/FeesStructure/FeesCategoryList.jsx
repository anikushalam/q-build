import { useTranslation } from "react-i18next";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import style from "../FinanceManager.module.css";
import HorizontalTabWrapper from "../../../Ui/Tab/Horizontal/HorizontalTabWrapper";
import HorizontalTabCard from "../../../Ui/Tab/Horizontal/HorizontalTabCard";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import FeesCategory from "./FeeMaster/FeesCategory";
import FeeHead from "./FeeMaster/FeeHead";
const tabList = [
  {
    label: "category",
    id: "category",
    urlKey: "&n=category",
  },
  {
    label: "fees_heads",
    id: "head",
    urlKey: "&n=head",
  },
];
const FeesCategoryList = ({ fid }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const getQuery = useLocation();
  const params = useParams();
  return (
    <>
      <div className={style.fm_header_container}>
        <h6>{t("fees_master")}</h6>
      </div>
      <HorizontalTabWrapper>
        {tabList.map((tab) => (
          <HorizontalTabCard
            key={tab?.id}
            tab={tab}
            isLink
            isActive={searchParams.get("n") === tab.id ? true : false}
            parentState={getQuery.state}
            url={`/q/${params.username}/member/staff/finance?type=fees${tab.urlKey}`}
          />
        ))}
      </HorizontalTabWrapper>
      <BorderBottom
        customStyleBorder={{
          marginTop: "0",
        }}
      />

      {searchParams.get("n") === "category" ? (
        <FeesCategory fid={fid} />
      ) : (
        <FeeHead fid={fid} />
      )}
    </>
  );
};

export default FeesCategoryList;
