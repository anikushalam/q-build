import React from "react";
import style from "../HeaderIns.module.css";
import { PasswordInput, TextInput } from "../InputWithIcon/InputWithIcon";
import ButtonWithAction from "../../../../../Custom/Button/ButtonWithAction";
import { useState } from "react";

function FindAccount() {
  return (
    <div className={style.card}>
      <h6 className={style.cardhdark}>Enter Username</h6>

      <p className={`${style.pusername} ${style.ptoc}`}>
        You can find your username from your friends as well by search you on
        qviple
      </p>

      <div className={style.change_pass_input}>
        <TextInput
          icon="/images/username-icon.svg"
          placeholder="Username"
          namee="username"
        />
      </div>

      <div className={style.forgot_pass_container}>
        <p className={style.forgot_pass}>Forgot Username ? ?</p>
      </div>

      <p style={{ textAlign: "center" }} className={style.ptoc}>
        In case you forgot username, continue with mobile number
      </p>

      <div className={style.re_enter_btn_container}>
        <ButtonWithAction
          buttonText="Submit"
          customStyleButton={{
            minHeight: "2.3rem",
            marginTop: "4rem",
          }}
        />
      </div>
    </div>
  );
}

export default FindAccount;
