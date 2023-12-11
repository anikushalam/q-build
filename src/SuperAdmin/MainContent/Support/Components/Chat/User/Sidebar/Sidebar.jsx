import React, { useEffect, useState } from "react";
import style from "./Sidebar.module.css";
import "./Sidebar.css";
import { Divider } from "@mui/material";
import { useGetAdminRecentChatMutation, useGetAdminRecentChatQuery } from "../../../../../../../services/superAdminAPI";
import { useSelector, useDispatch } from 'react-redux'
import { chatChangeAction } from '../../../../../../../redux/store/chat-slice'
import moment from 'moment'
// -----------------------------------------

function Item({
  img,
  name,
  lastMsg,
  lastMessageType,
  time,
  status,
  notSeenCount,
  handleChat
}) {
  return (
    <div className={style.item} onClick={handleChat}>
      <div className={style.imgtext}>
        <img src={img} />
        <div className={style.itemtext}>
          <h6>{name}</h6>

          {lastMessageType === "text" ? (
            <p>
              {lastMsg}
            </p>
          ) : lastMessageType === "link" ? (
            <div className={style.itemType}>
              <img src="/images/chat/typelink.svg" />
              <a href="https://www.linkedin.com/feed/">
                https://www.linkedin.com/feed/
              </a>
            </div>
          ) : (
            ""
          )}
          {/* </div> */}
        </div>
      </div>
      <div className={style.time}>
        <p>{time}</p>
        {status === "not seen" && (
          <div className={style.notSeenCount}>{notSeenCount}</div>
        )}
      </div>
    </div>
  );
}

function Sidebar({ toggleTab, data }) {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch()
  const chatInfo = useSelector((state) => state.chatChange)


  return (
    <div className={style.sidebar}>
      <div className={style.items}>
        {data?.map((ut) => (
          <>
        <Item
          img="/images/avatar-icon.png"
          name={ut?.participant_two}
          lastMsg={ut?.latestMessage?.content}
          status="seen"
          notSeenCount="0"
          lastMessageType="text"
          time={moment(ut?.updatedAt).format('LT')}
          handleChat={() => {
            dispatch(
              chatChangeAction.chatQuery({
                chats: [...chatInfo?.chats],
                selectedChat: ut && ut,
                messageArray: [...ut?.message]
              })
            )
          }}
        />
        <Divider />
        </>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
