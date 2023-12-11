import React, { memo } from "react";
import style from "./Auth.module.css";
import { useTranslation } from "react-i18next";
import CreateButton from "@/Ui/Button/CreateButton";

const AuthCardWrapper = ({
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
  isCreate,
  onCreate,
  children,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.auth_card_wrapper}>
      {isCreate ? (
        <div className={style.auth_create_container}>
          <div>
            <h6 className={style.auth_card_title} style={titleStyle}>
              {title ? t(title) : t("hello")}
            </h6>
            <h6 className={style.auth_card_subtitle} style={subTitleStyle}>
              {subTitle ? subTitle : t("welcome_to_qviple")}
            </h6>
          </div>

          <CreateButton
            label="create_new_account"
            customStyle={{
              margin: "0",
            }}
            onAction={onCreate}
          />
        </div>
      ) : (
        <>
          <h6 className={style.auth_card_title} style={titleStyle}>
            {title ? t(title) : t("hello")}
          </h6>
          <h6 className={style.auth_card_subtitle} style={subTitleStyle}>
            {subTitle ? subTitle : t("welcome_to_qviple")}
          </h6>
        </>
      )}

      {children}
    </div>
  );
};

export default memo(AuthCardWrapper);
