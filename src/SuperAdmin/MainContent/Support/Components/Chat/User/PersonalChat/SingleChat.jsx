import React, { useRef, useState } from "react";
import style from "./SingleChat.module.css";
import { Divider } from "@mui/material";
import ScrollableFeed from "react-scrollable-feed";
import Picker from "emoji-picker-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./SingleChat.css";

function SingleChat() {
  const num = 1;
  const textareaRef = useRef(null);
  const [me, setMe] = useState("Birat Dhar");
  const [input, setInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);

  const [anchorE3, setAnchorE3] = useState(null);
  const [forwardClick, setForwardClick] = useState(false);

  if (num === 2) {
    setMe("Raju Kumar");
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

  const data = {
    chatName: "Qviple Stars",
    createdAt: "22 April 2022",
    sender: "Arup Singh",

    messages: [
      {
        sender: "Arup Singh",
        content: "Hey There ✋!",
        time: "10:23 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "seen",
      },
      {
        sender: "Arup Singh",
        content: "How are you?",
        time: "10:25 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "not seen",
      },
      {
        sender: "Arup Singh",
        content: "",
        time: "10:27 AM",
        reply: false,
        replyContentIndex: "",

        forwarded: false,
        documentList: [
          {
            docLink: "http://www.africau.edu/images/default/sample.pdf",
            docName: "Sample.pdf",
          },
          {
            docLink:
              "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            docName: "Dummy.pdf",
          },
        ],
        img: "",
        status: "seen",
      },
      {
        sender: "Birat Dhar",
        content: "How was your day?",
        time: "10:26 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "seen",
      },
      {
        sender: "Birat Dhar",
        content: "",
        time: "10:27 AM",
        reply: false,
        replyContentIndex: "",

        forwarded: false,
        documentList: [
          {
            docLink: "http://www.africau.edu/images/default/sample.pdf",
            docName: "Sample.pdf",
          },
          {
            docLink:
              "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            docName: "Dummy.pdf",
          },
        ],
        img: "",
        status: "seen",
      },
      {
        sender: "Birat Dhar",
        content: "Please read the document once",
        time: "10:27 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "seen",
      },
      {
        sender: "Birat Dhar",
        content: "Hello !",
        time: "10:31 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "seen",
      },
      {
        sender: "Arup Singh",
        content: "I am fine Yaa Today was great",
        time: "10:34 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "not seen",
      },
      {
        sender: "Birat Dhar",
        content: "Can We Meet Tomorrow",
        time: "10:40 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "seen",
      },
      {
        sender: "Arup Singh",
        content: "Sure, Tomorrow i am free",
        time: "10:41 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "seen",
      },
      {
        sender: "Birat Dhar",
        content: "Ok! Lets meet tomorrow then 😄",
        time: "10:47 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "https://images.pexels.com/photos/10756534/pexels-photo-10756534.jpeg?cs=srgb&dl=pexels-camila-ben%C3%ADtez-10756534.jpg&fm=jpg",
        status: "not seen",
      },
      {
        sender: "Arup Singh",
        content: "Hey There ✋!",
        time: "10:23 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "seen",
      },
      {
        sender: "Arup Singh",
        content: "How are you?",
        time: "10:25 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "not seen",
      },
      {
        sender: "Arup Singh",
        content: "How was your day?",
        time: "10:26 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "seen",
      },
      {
        sender: "Birat Dhar",
        content: "Hello !",
        time: "10:31 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "",
        status: "seen",
      },
      {
        sender: "Arup Singh",
        content: "I am fine Yaa Today was great",
        time: "10:34 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: false,
        documentList: [],
        img: "https://images.pexels.com/photos/10756534/pexels-photo-10756534.jpeg?cs=srgb&dl=pexels-camila-ben%C3%ADtez-10756534.jpg&fm=jpg",
        status: "not seen",
      },
      {
        sender: "Birat Dhar",
        content: "Can We Meet Tomorrow",
        time: "10:40 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: true,
        documentList: [],
        img: "",
        status: "seen",
      },
      {
        sender: "Arup Singh",
        content: "Sure, Tomorrow i am free",
        time: "10:41 AM",
        reply: true,
        replyContentIndex: "10",
        forwarded: false,
        documentList: [],
        img: "",
        status: "seen",
      },
      {
        sender: "Birat Dhar",
        content: "Ok! Lets meet tomorrow then 😄",
        time: "10:47 AM",
        reply: true,
        replyContentIndex: "14",
        forwarded: false,
        documentList: [],
        img: "",
        status: "not seen",
      },
      {
        sender: "Arup Singh",
        content: "How are you?",
        time: "10:55 AM",
        reply: false,
        replyContentIndex: "",
        forwarded: true,
        documentList: [],
        img: "",
        status: "not seen",
      },
    ],
  };

  const handleChange = (e) => {
    let scHeight = e.target.scrollHeight;
    textareaRef.current.style.height = `${scHeight}px`;
    setInput(e.target.value);
  };

  return (
    <div className={style.singlechat}>
      <div className={style.singlechatheader}>
        <img
          alt="not found"
          src="/images/member_tab/class/default_avatar.svg"
        />
        <div className={style.text}>
          <div className={style.insName}>
            <h6>{data.sender}</h6>
          </div>
          <div className={style.insUserName}>
            <p> Last seen: Today at 11:34 Am</p>
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
            {data.messages.map((msg, index) => {
              if (msg.sender !== me) {
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
                      <p className={style.incomingsender}>{msg.sender}</p>
                      {msg.content && (
                        <p className={style.incomingcontent}>{msg.content}</p>
                      )}
                      <p className={style.incomingtime}>{msg.time}</p>
                    </div>
                  </div>
                );
              } else if (msg.sender === me) {
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
                      <p className={style.outgoingtime}>{msg.time}</p>
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
