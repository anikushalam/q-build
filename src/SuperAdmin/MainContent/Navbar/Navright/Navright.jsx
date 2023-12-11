import React from "react";
import { useState } from "react";
import style from "./Navright.module.css";

import Menu from "./Menu/Menu";

function Navright({ setState, getCount }) {
  const [menu, setMenu] = useState(false);

  return (
    <div className={style.navright}>
      <div className={style.left}>
        <div className={style.bright}>
          <img alt="img" src="/images/admin/brightness-icon.svg" />
        </div>

        <div className={style.mail}>
          <img alt="img" src="/images/admin/mail-icon.svg" />

          <div className={style.mailcount}>0</div>
        </div>

        <div className={style.noti} onClick={() => setState(true)}>
          <img alt="img" src="/images/admin/noti-icon.svg" />
          <div className={style.noticount}>{getCount?.notifyCount}</div>
        </div>

        <div className={style.user}>
          <h6>Pankaj Phad</h6>
          <p>Super Admin</p>
        </div>

        <div className={style.imgContainer} onClick={() => setMenu(!menu)}>
          <img alt="img" src="/images/newLogo.svg" />
        </div>
      </div>

      {menu && <Menu/>}

    </div>
  );
}

export default Navright;
