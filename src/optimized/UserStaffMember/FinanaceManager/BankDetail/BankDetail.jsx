import style from "../FinanceManager.module.css";
import { useTranslation } from "react-i18next";
import BankDetailList from "./BankDetailList";
import { memo, useCallback, useState } from "react";
import AddBankDetail from "./AddBankDetail";
import { useSearchParams } from "react-router-dom";
import OneBank from "./OneBank/OneBank";
import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";

const BankDetail = ({ fid, libraryId, transportId, hostelId }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [add, setAdd] = useState(false);

  const onToggle = useCallback(() => {
    setAdd((pre) => !pre);
  }, []);
  return (
    <UserMemberContainerWrapper>
      {add ? (
        <AddBankDetail
          fid={fid}
          libraryId={libraryId}
          transportId={transportId}
          hostelId={hostelId}
          onClose={onToggle}
        />
      ) : searchParams.get("n") ? (
        <OneBank
          fid={fid}
          libraryId={libraryId}
          transportId={transportId}
          hostelId={hostelId}
        />
      ) : (
        <>
          <UserMemberContentWrapper>
            <div className={style.fm_header_container}>
              <h6>{t("bank_account_detail")}</h6>
              <img
                src={`${assestsUserFinanceUrl}/plus-blue.svg`}
                alt="back arrow"
                title="Add Bank"
                onClick={onToggle}
              />
            </div>
          </UserMemberContentWrapper>
          <BorderBottom />
          <UserMemberContentWrapper>
            <BankDetailList fid={fid} />
          </UserMemberContentWrapper>
        </>
      )}
    </UserMemberContainerWrapper>
  );
};

export default memo(BankDetail);
