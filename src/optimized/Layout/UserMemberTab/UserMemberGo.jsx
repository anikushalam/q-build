import { assestsUserFinanceUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import style from "./UserMemberTab.module.css";

const UserMemberGo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const onGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  // const onSidebarCollaps = useCallback(() => {
  //   dispatch(memberChangeAction.sidebarToggle("off"));
  // }, [dispatch]);
  return (
    <div className={style.umg} onClick={onGoBack} title="Go back">
      <img src={`${assestsUserFinanceUrl}/back-arrow.svg`} alt="back icon" />
      <h6>{t("back")}</h6>
    </div>
  );
};

export default UserMemberGo;
