import React, { useEffect, useState } from "react";
import style from "./Sidebar.module.css";
import "./Sidebar.css";
import { Divider } from "@mui/material";
import { useGetAdminRecentChatQuery } from "../../../../../../../services/superAdminAPI";
import { useSelector, useDispatch } from "react-redux";
import { chatChangeAction } from "../../../../../../../redux/store/chat-slice";
import moment from "moment";
// -----------------------------------------

function Item({
  img,
  name,
  lastMsg,
  lastMessageType,
  time,
  status,
  notSeenCount,
  handleChat,
}) {
  return (
    <div className={style.item} onClick={handleChat}>
      <div className={style.imgtext}>
        <img src={img} alt="user" />
        <div className={style.itemtext}>
          <h6>{name}</h6>

          {lastMessageType === "text" ? (
            <p>{lastMsg}</p>
          ) : lastMessageType === "link" ? (
            <div className={style.itemType}>
              <img src="/images/chat/typelink.svg" alt="link" />
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

function Sidebar({ toggleTab }) {
  const user_Id = localStorage.getItem("user");
  const author = useSelector((state) => state.authChange);
  const dispatch = useDispatch();
  const chatInfo = useSelector((state) => state.chatChange);

  const [skip, setSkip] = useState(false);
  const {
    data: recentChat,
    //  refetch: chatFetch
  } = useGetAdminRecentChatQuery({
    userId: `${author?.id ? author?.id : user_Id}`,
    skip: skip,
  });

  useEffect(() => {
    setTimeout(() => {
      if (recentChat?.chat) {
        dispatch(
          chatChangeAction.chatQuery({
            chats: [...chatInfo?.chats, ...recentChat?.chat],
          })
        );
      }
      setSkip(true);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.sidebar}>
      <div className={style.items}>
        {chatInfo?.chats?.map((ut) => (
          <>
            <Item
              img="/images/demo_users/user2.svg"
              name={ut?.participant_two ? ut?.participant_two : "End User"}
              lastMsg={ut?.latestMessage?.content}
              status="seen"
              notSeenCount="0"
              lastMessageType="text"
              time={moment(ut?.updatedAt).format("LT")}
              handleChat={() => {
                dispatch(
                  chatChangeAction.chatQuery({
                    chats: [...chatInfo?.chats],
                    selectedChat: ut && ut,
                  })
                );
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
