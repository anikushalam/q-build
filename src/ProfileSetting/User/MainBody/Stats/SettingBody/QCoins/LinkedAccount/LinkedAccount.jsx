import React, { useState } from "react";
import style from "./LinkedAccount.module.css";

function LinkedAccount() {
  const [linked, setLinked] = useState(false);
  return (
    <>
      {!linked && (
        <div className={style.linkedAccount}>
          <div className={style.linkBtn} onClick={() => setLinked(true)}>
            Linke Account
          </div>
        </div>
      )}
    </>
  );
}

export default LinkedAccount;
