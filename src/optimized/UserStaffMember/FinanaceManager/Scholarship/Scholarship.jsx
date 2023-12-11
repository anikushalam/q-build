import { useTranslation } from "react-i18next";
import style from "../FinanceManager.module.css";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import HorizontalTabWrapper from "../../../Ui/Tab/Horizontal/HorizontalTabWrapper";
import HorizontalTabCard from "../../../Ui/Tab/Horizontal/HorizontalTabCard";
import { Suspense } from "react";
import QvipleLoader from "../../../Loader/QvipleLoader";
import Allottment from "./Allottment";

const Scholarship = ({ fid, instituteId, aid }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const getQuery = useLocation();
  const params = useParams();
  return (
    <UserMemberContainerWrapper>
      <UserMemberContentWrapper>
        <div className={style.fm_header_container}>
          <h6>{t("scholarship_management")}</h6>
        </div>
      </UserMemberContentWrapper>
      <BorderBottom />
      <UserMemberContentWrapper
        customStyle={{
          paddingTop: "0",
        }}
      >
        <HorizontalTabWrapper>
          {tabList.map((tab) => (
            <HorizontalTabCard
              key={tab?.id}
              tab={tab}
              isLink
              isActive={
                tab.id === "allottment" && !searchParams.get("n")
                  ? true
                  : searchParams.get("n") === tab.id
                  ? true
                  : false
              }
              parentState={getQuery.state}
              url={`/${params.username}/member/staff/finance?type=scholarship${tab.urlKey}`}
            />
          ))}
        </HorizontalTabWrapper>
        <BorderBottom
          customStyleBorder={{
            marginTop: "0",
          }}
        />
      </UserMemberContentWrapper>

      <UserMemberContentWrapper
        customStyle={{
          paddingTop: "0",
        }}
      >
        <Suspense fallback={<QvipleLoader />}>
          {searchParams.get("n") === "payment" ? null : (
            // <FinanceHistory instituteId={instituteId} />
            <Allottment instituteId={instituteId} aid={aid} />
          )}
        </Suspense>
      </UserMemberContentWrapper>
    </UserMemberContainerWrapper>
  );
};

export default Scholarship;

const tabList = [
  {
    label: "allottment",
    id: "allottment",
    urlKey: "",
  },
  {
    label: "fund",
    id: "fund",
    urlKey: "&n=fund",
  },
  {
    label: "mismatch",
    id: "mismatch",
    urlKey: "&n=mismatch",
  },
  {
    label: "export",
    id: "export",
    urlKey: "&n=export",
  },
];
