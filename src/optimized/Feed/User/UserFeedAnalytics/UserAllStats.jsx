import style from "../UserFeed.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useUserAllStats } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";

const UserAllStats = () => {
  const { t } = useTranslation();
  const uid = useSelector((state) => state.baseChange.id);

  const { userAllStats } = useUserAllStats({
    uid: uid,
    skip: !uid,
  });
  //   console.info("userAllStats", userAllStats);
  return (
    <div
      className={style.ufu_application}
      style={{
        padding: "1rem",
        marginTop: "2.4rem",
      }}
    >
      <div className={style.uf_count}>
        <div className={style.uf_count_inner}>
          <h6>{t("knows_only")}</h6>
          {/* <p>{t("labelhelpful_answer")}</p> */}
        </div>
        <h6>{userAllStats?.answerQuestionCount ?? 0}</h6>
      </div>
      <div className={style.uf_count}>
        <div className={style.uf_count_inner}>
          <h6>{t("associating")}</h6>
          {/* <p>{t("labelhelpful_answer")}</p> */}
        </div>
        <h6>{userAllStats?.followingUICount ?? 0}</h6>
      </div>
      <div className={style.uf_count}>
        <div className={style.uf_count_inner}>
          <h6>{t("network")}</h6>
          {/* <p>{t("labelhelpful_answer")}</p> */}
        </div>
        <h6>{userAllStats?.circleCount ?? 0}</h6>
      </div>

      <div className={style.uf_link}>
        <h6>
          Go to{"  "}
          <a
            href="https://qviple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://qviple.com
          </a>
        </h6>
      </div>
    </div>
  );
};

export default UserAllStats;
