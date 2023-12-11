import React, { useEffect, useRef, useState } from "react";
import style from "./SingleChat.module.css";
import { Divider } from "@mui/material";
import ScrollableFeed from "react-scrollable-feed";
import Picker from "emoji-picker-react";
import { useSelector } from "react-redux";
import moment from "moment";
import io from "socket.io-client";
import {
  useFetchChatMessageQuery,
  useSendChatMessageMutation,
  useGetUserChatQuery,
  useSendChatMessageDocumentMutation,
  useForwardMessageMutation,
  useDeleteOneChatMessageMutation,
} from "../../../../services/chatAPI";
import { imageShowUrl } from "../../../../services/BaseUrl";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./SingleChat.css";
import ForwardModal from "../ForwardModal/ForwardModal";
import { fetchMessage } from "../../../../services/chatAPIBuilder";

// import UpdateGroupChatModal from "./miscellaneous/UpdateGroupChatModal";
// import { ChatState } from "../Context/ChatProvider";
const ENDPOINT = "http://localhost:8080";
var socket, selectedChatCompare;

function SingleChat() {
  const textareaRef = useRef(null);
  const [me, setMe] = useState("Birat Dhar");
  const [input, setInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState(0);
  const [documentList, setDocumentList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [documentArray, setDocumentArray] = useState();
  const [fetchAgain, setFetchAgain] = useState(false);
  const [isSender, setIsSender] = useState(false);
  const user_Id = localStorage.getItem("user");
  const onlineStatus = localStorage.getItem("c_status");
  const chatInfo = useSelector((state) => state.chatChange);
  const author = useSelector((state) => state.authChange);
  const { data: userChat } = useGetUserChatQuery(
    user_Id ? `${user_Id}` : `${author?.id}`
  );
  const { data: chatMessage, refetch: chatMessageFetch } =
    useFetchChatMessageQuery(`${chatInfo?.selectedChat?._id}`);
  const [sendMessageData] = useSendChatMessageMutation();
  const [sendMessageDocumentData] = useSendChatMessageDocumentMutation();
  const [forwardMessageQuery] = useForwardMessageMutation();
  const [deleteChatMessage] = useDeleteOneChatMessageMutation();

  const image_format = ["image/jpeg", "image/png", "image/jpg"];
  const document_format = ["application/pdf", "application/doc"];
  const sticker_format = ["image/gif"];

  const [replyStatus, setReplyStatus] = useState(false);
  const [replyPreview, setReplyPreview] = useState({
    index: "",
    sender: "",
    content: "",
  });

  const [forwardId, setForwardId] = useState([]);
  const [forwardPeople, setForwardPeople] = useState([]);
  const [forwardMessage, setForwardMessage] = useState("");

  const fetchMessages = async () => {
    if (!chatInfo?.selectedChat) return;

    try {
      setLoading(true);
      setMessages([...chatMessage]);
      setLoading(false);
      socket.emit("join chat", chatInfo?.selectedChat?._id);
    } catch (error) {
      console.log(error);
    }
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
          replyContent: replyPreview?.content,
          reply: replyStatus && replyStatus,
          replyIndex: replyPreview?.index,
        }).then((res) => {
          if (res.data) {
            socket.emit("new message", res.data);
            setMessages([...messages, res.data]);
          }
        });
        setReplyStatus(false);
        setIsSender(false);
        setReplyClick(false);
      } catch (error) {
        console.log(error);
      }
    } else if (documentArray && documentList.length >= 1) {
      try {
        setNewMessage("");
        const formData = new FormData();
        formData.append("content", newMessage);
        formData.append("chatId", chatInfo?.selectedChat?._id);
        formData.append("reply", replyStatus && replyStatus);
        formData.append("replyContent", replyPreview?.content);
        formData.append("replyIndex", replyPreview?.index);
        for (let file in documentArray) {
          if (documentArray[file]["size"]) {
            formData.append("file", documentArray[file]);
          }
        }
        for (let [key, value] of formData.entries()) {
          console.log(key, value);
        }
        await sendMessageDocumentData(formData).then((res) => {
          if (res.data) {
            socket.emit("new message", res.data);
            setMessages([...messages, res.data]);
          }
        });
        setDocumentList([]);
        setDocumentArray();
        setImageList([]);
        setFileSelected(false);
        setIsSender(false);
      } catch (error) {
        console.log(error);
      }
    } else if (forwardId && forwardMessage) {
      if (forwardId && forwardId.length < 1) {
      } else {
        forwardMessageQuery({
          Id: forwardId,
          messageQuery: forwardMessage,
          forward: true,
        }).then((res) => {
          if (res.data) {
            socket.emit("new message", res.data);
            setMessages([...messages, res.data]);
          }
        });
        setForwardModal(false);
        setForwardClick(false);
      }
    }
  };

  const onEmojiClick = (e, emojiObject) => {
    setNewMessage((prev) => prev + emojiObject.emoji);
  };

  const documentChange = (e) => {
    if (e.target.files) {
      setDocumentArray(e.target.files);
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setDocumentList((prevList) => prevList.concat(fileArray));
    }
  };
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setImageList((prevList) => prevList.concat(fileArray));
    }
  };

  useEffect(() => {
    if (imageList.length > 0 || documentList.length > 0) {
      setFileSelected(true);
    }
  }, [imageList, documentList]);

  // console.log(documentList)

  const changePreview = (index) => {
    setSelectedPreview(index);
  };

  const handleChange = (e) => {
    let scHeight = e.target.scrollHeight;
    textareaRef.current.style.height = `${scHeight}px`;
    setInput(e.target.value);
  };

  const [delieveredMessage, setDelieveredMessage] = useState(false);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user_Id && user_Id);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchMessages();
    }, 3000);
    selectedChatCompare = chatInfo?.selectedChat;
    // eslint-disable-next-line
  }, [chatInfo?.selectedChat]);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
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

  console.log(messages);

  const typingHandler = (e) => {
    setNewMessage(e.target.value);
    setIsSender(true);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", chatInfo?.selectedChat?._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", chatInfo?.selectedChat?._id);
        setTyping(false);
      }
    }, timerLength);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorE3, setAnchorE3] = useState(null);
  const [replyClick, setReplyClick] = useState(false);
  const [forwardClick, setForwardClick] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);
  const [forwardModal, setForwardModal] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
    setAnchorE3(null);
    setReplyStatus(false);
  };

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const openMenu2 = (e) => {
    setAnchorEl2(e.currentTarget);
  };
  const openMenu3 = (e) => {
    setAnchorE3(e.currentTarget);
  };

  const [rIndex, setRIndex] = useState("2");

  const handleReply = (content) => {
    setReplyClick(true);
    setReplyPreview({
      ...replyPreview,
      index: rIndex && rIndex,
      sender: "user_1",
      content: content,
    });
    handleClose();
    setReplyStatus(false);
  };

  const deleteMessage = (mid) => {
    deleteChatMessage({
      mid: mid && mid,
      cid: chatInfo?.selectedChat?._id,
    }).then((res) => {
      if (res.data.message) {
        chatMessageFetch();
        fetchMessages();
      }
    });
  };

  return (
    <>
      {chatInfo?.selectedChat ? (
        <div className={style.singlechat}>
          <div className={style.singlechatheader}>
            <img src="/images/member_tab/class/default_avatar.svg" />
            <div className={style.text}>
              <div className={style.insName}>
                <h6>{chatInfo?.selectedChat?.chatName}</h6>
              </div>
              <div className={style.insUserName}>
                {/* {data.users.map((user, index) => (
              <p key={index}> {user},</p>
            ))} */}
                <p>
                  {istyping && isSender && onlineStatus
                    ? "Online"
                    : istyping && !isSender && onlineStatus
                    ? "Typing..."
                    : "Online"}
                </p>
              </div>
            </div>
            <img className={style.dots} src="/images/dots-dark-icon.svg" />
          </div>
          <Divider />

          {fileSelected === false && (
            <div className={style.singlechatcontent}>
              <ScrollableFeed>
                {messages &&
                  messages.map((msg, index) => {
                    if (msg?.sender?._id !== user_Id) {
                      return (
                        <div key={index} className={style.incomingcontainter}>
                          <div className={style.incoming}>
                            <img
                              className={style.downIcon}
                              onClick={openMenu}
                              src="/images/chat/down-icon.svg"
                            />
                            {msg?.forwardMessage?.isForward === true && (
                              <div className={style.forwarded}>
                                <img src="/images/chat/forwarded.png" />
                                <p>Forwarded</p>
                              </div>
                            )}
                            {msg?.replyMessage?.reply === true && (
                              <div className={style.incomingReply}>
                                <p>
                                  {msg?.replyMessage?.replySender?.username}
                                </p>
                                <h6> {msg?.replyMessage?.replyContent}</h6>
                              </div>
                            )}
                            {/* <p className={style.incomingsender}>{msg?.sender?.username}</p> */}

                            {msg?.document &&
                            image_format.includes(
                              msg?.document[0]?.documentType
                            ) ? (
                              <div className={style.msgImg}>
                                <img
                                  src={`${imageShowUrl}/${
                                    msg?.document &&
                                    msg?.document[0]?.documentKey
                                  }`}
                                />
                              </div>
                            ) : msg?.document &&
                              document_format.includes(
                                msg?.document[0]?.documentType
                              ) ? (
                              <div className={style.msgOutgoingDocument}>
                                <img src="/images/chat/pdf-icon.svg" />
                              </div>
                            ) : msg?.document &&
                              sticker_format.includes(
                                msg?.document[0]?.documentType
                              ) ? (
                              <div className={style.msgImg}>
                                <img
                                  src={`${imageShowUrl}/${
                                    msg?.document &&
                                    msg?.document[0]?.documentKey
                                  }`}
                                />
                              </div>
                            ) : (
                              ""
                            )}
                            <p className={style.incomingcontent}>
                              {msg?.document && msg?.document[0]?.documentName}
                            </p>
                            <p className={style.incomingcontent}>
                              {msg.content}
                            </p>
                            <p className={style.incomingtime}>
                              {moment(msg.updatedAt).format("LT")}
                            </p>
                            <Menu
                              id="lame-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={Boolean(anchorEl)}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                              }}
                            >
                              <MenuItem
                                onClick={() => {
                                  setReplyStatus(true);
                                  handleReply(
                                    msg?.sender?.username,
                                    msg?.content
                                  );
                                }}
                              >
                                <div className={style.menuItem}>Reply</div>
                              </MenuItem>
                              <Divider />
                              <MenuItem
                                onClick={() => {
                                  setItemIndex(index);
                                  handleClose();
                                  setForwardClick(true);
                                  setForwardMessage(msg?._id);
                                }}
                              >
                                <div className={style.menuItem}>
                                  Forward Message
                                </div>
                              </MenuItem>
                              <Divider />
                              <MenuItem onClick={handleClose}>
                                <div className={style.menuItem}>
                                  Star Message
                                </div>
                              </MenuItem>
                              <Divider />
                              <MenuItem onClick={() => deleteMessage(msg?._id)}>
                                <div className={style.menuItem}>
                                  Delete Message
                                </div>
                              </MenuItem>
                            </Menu>
                          </div>
                        </div>
                      );
                    } else if (msg?.sender?._id === user_Id) {
                      return (
                        <div key={index} className={style.outgoingcontainter}>
                          <div className={style.outgoing}>
                            <img
                              className={style.downIcon}
                              onClick={openMenu2}
                              src="/images/chat/down-white-icon.svg"
                            />
                            {msg?.forwardMessage?.isForward === true && (
                              <div className={style.forwarded}>
                                <img src="/images/chat/forwarded.png" />
                                <p>Forwarded</p>
                              </div>
                            )}
                            {msg?.replyMessage?.reply === true && (
                              <div className={style.outgoingReply}>
                                <p>
                                  {msg?.replyMessage?.replySender?.username}
                                </p>
                                <h6> {msg?.replyMessage?.replyContent}</h6>
                              </div>
                            )}

                            {msg?.document &&
                            image_format.includes(
                              msg?.document[0]?.documentType
                            ) ? (
                              <div className={style.msgImg}>
                                <img
                                  src={`${imageShowUrl}/${
                                    msg?.document &&
                                    msg?.document[0]?.documentKey
                                  }`}
                                />
                              </div>
                            ) : msg?.document &&
                              document_format.includes(
                                msg?.document[0]?.documentType
                              ) ? (
                              <div className={style.msgOutgoingDocument}>
                                <img src="/images/chat/pdf-icon.svg" />
                              </div>
                            ) : msg?.document &&
                              sticker_format.includes(
                                msg?.document[0]?.documentType
                              ) ? (
                              <div className={style.msgImg}>
                                <img
                                  src={`${imageShowUrl}/${
                                    msg?.document &&
                                    msg?.document[0]?.documentKey
                                  }`}
                                />
                              </div>
                            ) : (
                              ""
                            )}
                            <p className={style.outgoingcontent}>
                              {msg?.document && msg?.document[0]?.documentName}
                            </p>
                            <p className={style.outgoingcontent}>
                              {msg.content}
                            </p>
                            {msg?.readBySelf === "Read" ? (
                              <img
                                className={style.seen}
                                src="/images/chat/seen-icon.svg"
                              />
                            ) : msg?.delievered === true ||
                              delieveredMessage === true ? (
                              <img
                                className={style.seen}
                                src="/images/chat/seen-icon.svg"
                              />
                            ) : (
                              ""
                            )}
                            <p className={style.outgoingtime}>
                              {moment(msg.updatedAt).format("LT")}
                            </p>
                            <Menu
                              id="lame-menu"
                              anchorEl={anchorEl2}
                              keepMounted
                              open={Boolean(anchorEl2)}
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
                              <MenuItem
                                onClick={() => {
                                  // setRIndex(messages && messages.indexOf(msg)),
                                  setReplyStatus(true);
                                  handleReply(
                                    msg?.sender?.username,
                                    msg?.content
                                  );
                                }}
                              >
                                <div className={style.menuItem}>Reply</div>
                              </MenuItem>
                              <Divider />
                              <MenuItem
                                onClick={() => {
                                  setItemIndex(index);
                                  handleClose();
                                  setForwardClick(true);
                                  setForwardMessage(msg?._id);
                                }}
                              >
                                <div className={style.menuItem}>
                                  Forward Message
                                </div>
                              </MenuItem>
                              <Divider />
                              <MenuItem onClick={handleClose}>
                                <div className={style.menuItem}>
                                  Star Message
                                </div>
                              </MenuItem>
                              <Divider />
                              <MenuItem onClick={() => deleteMessage(msg?._id)}>
                                <div className={style.menuItem}>
                                  Delete Message
                                </div>
                              </MenuItem>
                            </Menu>
                          </div>
                        </div>
                      );
                    }
                  })}
              </ScrollableFeed>
            </div>
          )}

          {fileSelected === true && (
            <div className={style.previewFile}>
              <div className={style.previewimg}>
                {imageList.length > 0 && documentList.length === 0 && (
                  <img src={imageList[selectedPreview]} />
                )}

                {documentList.length > 0 && imageList.length === 0 && (
                  <img src={documentList[selectedPreview]} />
                )}
              </div>
              <img
                className={style.closePreview}
                src="/images/close-post-icon.svg"
                onClick={() => {
                  setDocumentList([]);
                  setImageList([]);
                  setFileSelected(false);
                }}
              />
            </div>
          )}
          <Divider />

          {fileSelected === false && (
            <form onSubmit={sendMessage} encType="multipart/form-data">
              {replyClick && (
                <div className={style.replyPreview}>
                  <div className={style.replycontent}>
                    <h6>{replyPreview.sender}</h6>
                    <p>{replyPreview.content}</p>
                  </div>
                  <div className={style.replyclose}>
                    <img
                      onClick={() => {
                        setReplyClick(false);
                        setReplyPreview({ index: "", sender: "", content: "" });
                      }}
                      src="/images/close-post-icon.svg"
                    />
                  </div>
                </div>
              )}
              {forwardClick === true && (
                <div className={style.forwardfooter}>
                  <img
                    onClick={() => {
                      setForwardClick(false);
                      setForwardMessage("");
                    }}
                    src="/images/close-post-icon.svg"
                  />
                  <div style={{ display: "flex", gap: "1vw" }}>
                    <img
                      onClick={() => setForwardModal(true)}
                      className={style.forwardIcon}
                      src="/images/chat/forward-icon.png"
                    />
                    <img
                      className={style.dutbinIcon}
                      src="/images/chat/dustbin-icon.png"
                    />
                  </div>
                </div>
              )}
              {forwardClick === false ? (
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
                      value={newMessage}
                      onChange={typingHandler}
                      // onKeyDown={sendMessage}
                    />

                    {/*  -------------------Emoji--------------------------------- */}

                    {!showPicker && (
                      <img
                        onClick={() => setShowPicker(!showPicker)}
                        className={style.emoji}
                        src="/images/chat-emoji-icon.svg"
                      />
                    )}
                    {showPicker && (
                      <img
                        onClick={() => setShowPicker(!showPicker)}
                        className={style.close}
                        src="/images/close-post-icon.svg"
                      />
                    )}
                    {/*  -------------------Attachment--------------------------------- */}

                    <label htmlFor="document" style={{ cursor: "pointer" }}>
                      <img
                        className={style.attach}
                        src="/images/attach-icon.svg"
                      />
                    </label>

                    <input
                      className={style.upload}
                      multiple
                      id="document"
                      name="file"
                      onChange={documentChange}
                      type="file"
                      accept="image/gif, image/jpeg, image/png,  application/pdf, application/msword"
                    />
                    {/*  -------------------Image Input--------------------------------- */}

                    <label htmlFor="img" style={{ cursor: "pointer" }}>
                      <img
                        className={style.camera}
                        src="/images/camera-icon.svg"
                      />
                    </label>

                    <input
                      className={style.upload}
                      id="img"
                      name="file"
                      multiple
                      onChange={imageChange}
                      type="file"
                      accept="image/gif, image/jpeg, image/png"
                    />
                  </div>
                  {/*  -------------------Voice Input--------------------------------- */}
                  {/* <img className={style.voice} src="/images/chat/voice-icon.svg" /> */}
                  <div className={style.send}>
                    <img
                      src="/images/chat/send-icon.png"
                      onClick={sendMessage}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </form>
          )}

          {fileSelected === true && (
            <div className={style.previewFileFooter}>
              <div />
              <div className={style.imageList}>
                {documentList.length === 0 &&
                  imageList.map((img, index) => (
                    <img
                      className={selectedPreview === index ? style.border : ""}
                      key={index}
                      onClick={() => changePreview(index)}
                      style={{ cursor: "pointer" }}
                      src={img}
                    />
                  ))}

                {imageList.length === 0 &&
                  documentList.map((img, index) => (
                    <img
                      className={selectedPreview === index ? style.border : ""}
                      key={index}
                      onClick={() => changePreview(index)}
                      style={{ cursor: "pointer" }}
                      src={img}
                    />
                  ))}
              </div>
              <div className={style.send}>
                <img src="/images/chat/send-icon.png" onClick={sendMessage} />
              </div>
            </div>
          )}

          {showPicker && (
            <Picker
              pickerStyle={{ width: "100%" }}
              onEmojiClick={onEmojiClick}
            />
          )}
          {forwardModal && (
            <ForwardModal
              forwardModal={forwardModal}
              hideModal={(w) => setForwardModal(w)}
              forwardData={forwardMessage && forwardMessage}
              forwardId={forwardId && forwardId}
              setForwardId={setForwardId && setForwardId}
              forwardPeople={forwardPeople && forwardPeople}
              setForwardPeople={setForwardPeople && setForwardPeople}
              sendMessage={sendMessage}
              setForwardMessage={setForwardMessage && setForwardMessage}
            />
          )}
        </div>
      ) : (
        <div className={style.singlechat}>
          <p className={style.chatToggle}>
            <img src="/images/newLogo-text-icon.svg" />
            Qviple Communication Web
          </p>
        </div>
      )}
    </>
  );
}

export default SingleChat;
