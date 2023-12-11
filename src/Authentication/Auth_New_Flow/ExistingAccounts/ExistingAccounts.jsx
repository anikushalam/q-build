import React from "react";
// import ButtonWithAction from "../../../Custom/Button/ButtonWithAction";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";
import { imageShowUrl } from "../../../services/BaseUrl";
import { useTranslation } from "react-i18next";
import AccountItem from "./AccountItem";
import { imageShowUrl2 } from "../../../services/BaseUrl";
import { useNavigate, useSearchParams } from "react-router-dom";

function ExistingAccounts({ setStatus, existingAccount, isLandingAccount }) {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const onAddAccount = () => {
    if (isLandingAccount?.type) {
      if (searchParams?.get("gov") === "hostel") {
        navigate("/q/hostel/joining", {
          state: {
            formAs: "STUDENT",
            openAs: "landing_page",
            appId: searchParams?.get("goaid"),
            hostelId: searchParams?.get("gohid"),
            verifyNumber: isLandingAccount?.phoneNumber,
          },
        });
      } else {
        navigate("/q/joining", {
          state: {
            formAs: "STUDENT",
            openAs: "landing_page",
            appId: searchParams?.get("goaid"),
            instituteId: searchParams?.get("goid"),
            departmentId: searchParams?.get("godid"),
            applicationName: searchParams?.get("gon"),
            whichFormShow: "DEPARTMENT",
            verifyNumber: isLandingAccount?.phoneNumber,
          },
        });
      }
    } else {
      setStatus("DESIGNATION_OPTION");
    }
  };
  return (
    <div className={style.card}>
      <div className={style.small_icon}>
        <div>
          <h6 className={style.cardhdark}>{t("existing_acc")}</h6>
          <p className={`${style.pusername} ${style.ptoc}`}>{t("continue")}</p>
        </div>
        <img
          src="/images/add-plus-blue-icon.svg"
          alt="back arrow"
          className={style.back_icon}
          onClick={onAddAccount}
        />
      </div>

      <div className={style.accounts_container}>
        {existingAccount?.map((acc) => (
          <AccountItem
            name={acc?.user?.userLegalName}
            defaultImg={`${imageShowUrl2}/user_default_img.svg`}
            username={acc?.user?.username}
            profileimg={
              acc?.user?.profilePhoto
                ? `${imageShowUrl}/${acc?.user?.profilePhoto}`
                : "/images/car.jpg"
            }
            key={acc?.user?._id}
            userAccount={acc}
            isLandingAccount={isLandingAccount}
          />
        ))}
      </div>

      {/* <div className={style.btn_container}>
        <ButtonWithAction
          onAction={onAddAccount}
          disabled={false}
          buttonText={t("add_new_account")}
          customStyleButton={{
            minHeight: "2.3rem",
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
          }}
          customStyleButtonText={{
            fontSize: "1rem",
          }}
        />
      </div> */}
    </div>
  );
}

export default ExistingAccounts;
