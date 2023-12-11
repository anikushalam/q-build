import React from "react";
import Drawer from "@mui/material/Drawer";
import style from "./NotificationDrawer.module.css";
import Item from "./Item/Item";
import { useGetNotificationQuery } from "../../../services/superAdminAPI";

function NotificationDrawer({ state, setState }) {
  const { data: notifyQuery } = useGetNotificationQuery()
  return (
    <Drawer anchor="right" open={state} onClose={() => setState(false)}>
      <div className={style.adminDrawer}>
        <div className={style.dheader}>Notifications</div>
        <div className={style.dcontent}>
          {notifyQuery?.admin?.aNotify?.map((at, index) => (
          <Item key={index} nData={at}/>
          ))}
        </div>
      </div>
    </Drawer>
  );
}

export default NotificationDrawer;
