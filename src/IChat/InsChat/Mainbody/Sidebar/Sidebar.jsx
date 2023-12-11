import React, { useState, useEffect } from "react";
import style from "./Sidebar.module.css";
import { Divider } from "@mui/material";
import { useGetSingleInsDataQuery } from "../../../../services/qvipleAPI";
import {
  useGetAllChatQuery,
  useFetchChatMessageQuery,
} from "../../../../services/chatAPI";
import { useSelector, useDispatch } from "react-redux";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { chatChangeAction } from "../../../../redux/store/chat-slice";
import moment from "moment";

function Item({ photoId, img, name, lastMsg, time, handleChat }) {
  return (
    <div className={style.item} onClick={handleChat}>
      <img
        src={
          photoId === "1"
            ? `${imageShowUrl}/${img}`
            : "/images/demo_users/user2.svg"
        }
      />
      <div className={style.itemtext}>
        <div className={style.insName}>
          <h6>{name}</h6>
        </div>
        <div className={style.insUserName}>
          <p title={lastMsg}>{lastMsg}</p>
        </div>
      </div>
      <p className={style.time}>{time}</p>
    </div>
  );
}

function Sidebar() {
  const user_Id = localStorage.getItem("user");
  const author = useSelector((state) => state.authChange);
  const chatInfo = useSelector((state) => state.chatChange);
  const { data: dashboardData, refetch: chatFetch } = useGetSingleInsDataQuery(
    user_Id ? user_Id : author?.id
  );
  const { data: chatData } = useGetAllChatQuery();
  const dispatch = useDispatch();
  const { data: chatMessage, refetch: chatMessageFetch } =
    useFetchChatMessageQuery(`${chatInfo?.selectedChat?._id}`);

  const fetchChats = async () => {
    try {
      dispatch(
        chatChangeAction.chatQuery({
          chats: [...chatData],
          selectedChat: chatInfo?.selectedChat,
        })
      );
    } catch (error) {}
  };

  const accessChatMessage = (et) => {
    dispatch(
      chatChangeAction.chatQuery({
        chats: [...chatInfo?.chats],
        selectedChat: et && et,
      })
    );
    chatMessageFetch();
    if (chatMessage) {
      dispatch(
        chatChangeAction.chatQuery({
          chats: [...chatInfo?.chats],
          selectedChat: et && et,
          messageArray: [...chatMessage],
        })
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchChats();
    }, 3000);
  }, []);

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarheader}>
        <img
          src={
            dashboardData?.institute?.photoId !== "0"
              ? `${imageShowUrl}/${dashboardData?.institute?.insProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          alt="ChatAvatar"
        />
        <div className={style.text}>
          <div className={style.insName}>
            <h6>{dashboardData?.institute?.insName}</h6>
            {/* <img className={style.dots} src="/images/chat-sidebar-dot.svg" /> */}
          </div>
          <div className={style.insUserName}>
            <p>{dashboardData?.institute?.name}</p>
          </div>
        </div>
      </div>
      <div className={style.items}>
        {chatInfo?.chats?.map((ut) => (
          <>
            <Item
              photoId={dashboardData?.institute?.photoId}
              img={dashboardData?.institute?.insProfilePhoto}
              name={ut?.chatName}
              lastMsg={ut?.latestMessage?.content}
              time={moment(ut?.updatedAt).format("LT")}
              handleChat={() => {
                accessChatMessage(ut && ut);
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
