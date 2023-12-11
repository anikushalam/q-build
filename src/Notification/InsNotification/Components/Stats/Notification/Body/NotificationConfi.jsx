import React from "react";
import Item from "./Items/Item";
import style from "./Items/Item.module.css";
import NotifyByDepartPhoto from "./Items/NotifyByDepartPhoto";
import NotifyByInsPhoto from "./Items/NotifyByInsPhoto";
import NotifyByPhoto from "./Items/NotifyByPhoto";
import NotifyByStaffPhoto from "./Items/NotifyByStaffPhoto";
import NotifyByStudentPhoto from "./Items/NotifyByStudentPhoto";

const NotificationConfi = ({ notification }) => {
  return (
    <div className={style.item}>
      {notification?.notifyByStudentPhoto ? (
        <NotifyByStudentPhoto notification={notification} />
      ) : notification?.notifyByStaffPhoto ? (
        <NotifyByStaffPhoto notification={notification} />
      ) : notification?.notifyByPhoto ? (
        <NotifyByPhoto notification={notification} />
      ) : notification?.notifyByInsPhoto ? (
        <NotifyByInsPhoto notification={notification} />
      ) : notification?.notifyByDepartPhoto ? (
        <NotifyByDepartPhoto notification={notification} />
      ) : notification?.notifyBySuperAdminPhoto ? (
        <Item admin={true} notification={notification} />
      ) : (
        <Item admin={false} notification={notification} />
      )}
    </div>
  );
};

export default NotificationConfi;
