import { useTranslation } from "react-i18next";
import style from "../Auth.module.css";
import AuthCardWrapper from "../AuthCardWrapper";
import GetStarted from "../GetStarted";
import AuthExistingAccountCard from "./AuthExistingAccountCard";
import { useLocation, useNavigate } from "react-router-dom";

const AuthExistingAccount = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();
  const onCreate = () => {
    navigate("/user/create/account", {
      state: getQuery.state,
    });
  };
  return (
    <GetStarted>
      <AuthCardWrapper
        title="existing_account"
        subTitle={t("please_select_existing_account")}
        subTitleStyle={{
          fontSize: "0.8rem",
        }}
        titleStyle={{
          fontSize: "1rem",
        }}
        isCreate
        onCreate={onCreate}
      >
        <div
          className={style.auth_login_form}
          style={{
            marginTop: "1rem",
          }}
        >
          {getQuery.state?.accounts?.map((account) => (
            <AuthExistingAccountCard key={account?._id} account={account} />
          ))}
        </div>
      </AuthCardWrapper>
    </GetStarted>
  );
};

export default AuthExistingAccount;
