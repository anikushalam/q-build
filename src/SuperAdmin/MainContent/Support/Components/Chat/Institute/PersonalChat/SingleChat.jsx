import React, { useEffect, useRef, useState } from "react";
import style from "./SingleChat.module.css";
import { Divider } from "@mui/material";
import ScrollableFeed from "react-scrollable-feed";
import Picker from "emoji-picker-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import "./SingleChat.css";
import moment from "moment";
import io from "socket.io-client";
import { useSendSupportChatMessageMutation } from "../../../../../../../services/chatAPI";
import { useFetchSupportChatMessageQuery } from "../../../../../../../services/superAdminAPI";

const ENDPOINT = "http://18.205.27.165:8080";
var socket, selectedChatCompare;

function SingleChat() {
  const textareaRef = useRef(null);

  const [input, setInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  // const [socketConnected, setSocketConnected] = useState(false);
  // const [typing, setTyping] = useState(false);
  // const [istyping, setIsTyping] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const [anchorE3, setAnchorE3] = useState(null);
  const [forwardClick, setForwardClick] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [notification, setNotification] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const user_Id = localStorage.getItem("user");
  const chatInfo = useSelector((state) => state.chatChange);
  const [messages, setMessages] = useState([]);
  const [sendMessageData] = useSendSupportChatMessageMutation();
  const {
    data: chatMessage,
    //  refetch: chatMessageFetch
  } = useFetchSupportChatMessageQuery(`${chatInfo?.selectedChat?._id}`);

  if (false) {
    setFileSelected(false);
    setForwardClick(false);
  }

  const handleClose = () => {
    setAnchorE3(null);
  };
  const openMenu3 = (e) => {
    setAnchorE3(e.currentTarget);
  };

  const onEmojiClick = (e, emojiObject) => {
    setInput((prev) => prev + emojiObject.emoji);
  };

  const fetchMessages = async () => {
    if (!chatInfo?.selectedChat) return;

    try {
      setMessages([...chatMessage]);
      socket.emit("join chat", chatInfo?.selectedChat?._id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    let scHeight = e.target.scrollHeight;
    textareaRef.current.style.height = `${scHeight}px`;
    setInput(e.target.value);
    setNewMessage(e.target.value);
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    if (newMessage) {
      socket.emit("stop typing", chatInfo?.selectedChat?._id);
      try {
        setNewMessage("");
        await sendMessageData({
          content: newMessage,
          chatId: chatInfo?.selectedChat?._id,
          userId: user_Id,
        }).then((res) => {
          if (res.data) {
            socket.emit("new support", res.data);
            setMessages([...messages, res.data]);
          }
        });
        setInput("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user_Id && user_Id);
    // socket.on("connected", () => setSocketConnected(true));
    // socket.on("typing", () => setIsTyping(true));
    // socket.on("stop typing", () => setIsTyping(false));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchMessages();
    selectedChatCompare = chatInfo?.selectedChat;
    // eslint-disable-next-line
  }, [chatInfo?.selectedChat]);

  useEffect(() => {
    socket.on("message support", (newMessageRecieved) => {
      if (
        !selectedChatCompare || // if chat is not selected or doesn't match current chat
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        if (!notification.includes(newMessageRecieved)) {
          setNotification([newMessageRecieved, ...notification]);
          setFetchAgain(!fetchAgain);
        }
      } else {
        setMessages([...messages, newMessageRecieved]);
        // setDelieveredMessage(delievered)
      }
    });
  });

  return (
    <div className={style.singlechat}>
      <div className={style.singlechatheader}>
        <img
          alt="not found"
          src="/images/member_tab/class/default_avatar.svg"
        />
        <div className={style.text}>
          <div className={style.insName}>
            <h6>
              {chatInfo?.selectedChat?.participant_two
                ? chatInfo?.selectedChat?.participant_two
                : "End User"}
            </h6>
          </div>
          <div className={style.insUserName}>
            <p>
              Last seen at:{" "}
              {moment(chatInfo?.selectedChat?.updatedAt).format("LT")}
            </p>
          </div>
        </div>
        <img
          alt="not found"
          className={style.dots}
          onClick={openMenu3}
          style={{ zIndex: "30" }}
          src="/images/dots-dark-icon.svg"
        />
        <Menu
          id="lame-menu"
          anchorEl={anchorE3}
          keepMounted
          open={Boolean(anchorE3)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Divider />
          <MenuItem onClick={handleClose}>
            <div style={{ zIndex: "35" }} className={style.menuItem}>
              Clear Chat
            </div>
          </MenuItem>
          <Divider />
        </Menu>
      </div>
      <Divider />

      {fileSelected === false && (
        <div className={style.singlechatcontent}>
          <ScrollableFeed>
            {messages?.map((msg, index) => {
              if (`${msg.sender}` !== `${user_Id}`) {
                return (
                  <div
                    key={index}
                    className={
                      forwardClick === true
                        ? `${style.incomingcontainter} ${style.background}`
                        : style.incomingcontainter
                    }
                  >
                    <div className={style.incoming}>
                      {msg.content && (
                        <p className={style.incomingcontent}>{msg.content}</p>
                      )}
                      <p className={style.incomingtime}>
                        {moment(msg.updatedAt).format("LT")}
                      </p>
                    </div>
                  </div>
                );
              } else if (`${msg.sender}` === `${user_Id}`) {
                return (
                  <div
                    key={index}
                    className={
                      forwardClick === true
                        ? `${style.outgoingcontainter} ${style.background}`
                        : style.outgoingcontainter
                    }
                  >
                    <div className={style.outgoing}>
                      {msg.content && (
                        <p className={style.outgoingcontent}>{msg.content}</p>
                      )}
                      {msg.status === "seen" && (
                        <img
                          alt="not found"
                          className={style.seen}
                          src="/images/chat/seen-icon.svg"
                        />
                      )}
                      <p className={style.outgoingtime}>
                        {moment(msg.updatedAt).format("LT")}
                      </p>
                    </div>
                  </div>
                );
              } else {
                return <div></div>;
              }
            })}
          </ScrollableFeed>
        </div>
      )}

      <Divider />

      {fileSelected === false && (
        <div className={style.footercontainer}>
          {forwardClick === false && (
            <div className={style.singlechatfooter}>
              <div className={style.searchbar}>
                <textarea
                  className={style.postTextarea}
                  id="textarea"
                  ref={textareaRef}
                  type="text"
                  name="CreateInsPost"
                  placeholder="Message..."
                  required
                  value={input}
                  onChange={handleChange}
                />

                {/*  -------------------Emoji--------------------------------- */}

                {!showPicker && (
                  <img
                    alt="not found"
                    onClick={() => setShowPicker(!showPicker)}
                    className={style.emoji}
                    src="/images/chat-emoji-icon.svg"
                  />
                )}
                {showPicker && (
                  <img
                    alt="not found"
                    onClick={() => setShowPicker(!showPicker)}
                    className={style.close}
                    src="/images/close-post-icon.svg"
                  />
                )}
                <div className={style.send}>
                  <img
                    src="/images/chat/send-icon.png"
                    onClick={sendMessage}
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {showPicker && (
        <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
      )}
    </div>
  );
}

export default SingleChat;
