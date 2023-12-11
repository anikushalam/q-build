import React from "react";
import { Dialog } from "@mui/material";
import { Divider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import style from "./ForwardModal.module.css";

// -----------------------------------------
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useGetUserCircleArrayQuery } from "../../../../services/chatAPI";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Item({
  id,
  showSendBtn,
  img,
  name,
  lastMsg,
  personalChat,
  forwardId,
  setForwardId,
  forwardPeople,
  setForwardPeople
}) {
  return (
    <div className={style.item}>
      <Checkbox {...label} onChange={(e) => {
        // {console.log(e.target.value)}
        showSendBtn(true)
        setForwardId([...forwardId, id])
        setForwardPeople([...forwardPeople, name])
      }} />
      <img src={img} />
      <div className={style.itemtext}>
        <div className={style.insName}>
          <h6>{name}</h6>
        </div>
        <div className={style.insUserName}>
          {personalChat === false ? (
            <p>{lastMsg}</p>
          ) : (
            <p>
              {lastMsg}
            </p>
          )}
        </div>
      </div>
      {/* <p className={style.time}>{time}</p> */}
    </div>
  );
}

function ForwardModal({ forwardModal, hideModal, forwardId, setForwardId, forwardPeople, setForwardPeople, sendMessage, setForwardMessage }) {
  const [value, setValue] = React.useState(0);
  const [sendBtn, setSendBtn] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const user_Id = localStorage.getItem('user')
  const chatInfo = useSelector((state) => state.chatChange)
  const author = useSelector((state) => state.authChange)
  const { data: userQuery } = useGetUserCircleArrayQuery(user_Id ? `${user_Id}` : `${author?.id}`)
  
  return (
    <Dialog open={forwardModal}>
      <div className={style.addDisplay}>
        <div className={style.header}>
          <h6>Forward Message To </h6>
          <img
            onClick={() => {
              setForwardId([])
              setForwardPeople([])
              setForwardMessage('')
              hideModal(false)
            }}
            src="/images/close-post-icon.svg"
          />
        </div>
        <div className={style.searchcontainer}>
          <div className={style.searchbar}>
            <input
              type="text"
              placeholder="Search"
              className={`form-control ${style.searchinput}`}
            />
            <img alt="img" src="/images/search-dash-icon.svg" />
          </div>
        </div>
        <Divider />
        <div className={style.items}>
          <div className={style.tabs}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Personal Chat" {...a11yProps(0)} />
                <Tab label="Group Chat" {...a11yProps(1)} />
              </Tabs>
            </Box>
          </div>

          <TabPanel value={value} index={0}>
            <div className={style.itemsrow}>
            <p style={{margin: '5px 0px'}}>Recent Chats</p>
            {chatInfo?.chats?.map((ct) => (
              <>
              <Item
                id={ct?._id}
                showSendBtn={(w) => setSendBtn(w)}
                img="/images/demo_users/user2.svg"
                name={ct?.users && ct?.users[1]?.username}
                personalChat="true"
                lastMsg={ct?.latestMessage?.content}
                forwardId={forwardId && forwardId}
                setForwardId={setForwardId}
                forwardPeople={forwardPeople}
                setForwardPeople={setForwardPeople}
              />
              <Divider />
              </>
              ))}
              <p style={{margin: '5px 0px'}}>Other Circle's Mitron</p>
              {userQuery?.user?.userCircle?.map((ct) => (
              <>
              {chatInfo?.chats?.map((et) => et?._id === ct._id) ? '' :
              <Item
                showSendBtn={(w) => setSendBtn(w)}
                img="/images/demo_users/user2.svg"
                name={ct?.username}
                personalChat="true"
                lastMsg="Hey, I am using Q's App"
              />
              }
              <Divider />

              </>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={style.itemsrow}>
              <Item
                showSendBtn={(w) => setSendBtn(w)}
                img="/images/demo_users/user2.svg"
                name="Ankita jain"
                personalChat="true"
                lastMsgType="text"
                lastMsg="Good Morning"
                lastMsgSender=""
                time="1 min"
              />
              <Divider />
            </div>
          </TabPanel>
        </div>

        <div className={style.sendrow}>
          <div className={style.names}>
            {forwardPeople?.map((ft) => (
            <p>{ft && ft}</p>
            ))}
          </div>
          {sendBtn && (
            <div className={style.sendIcon} onClick={sendMessage}>
              <img src="/images/chat/send-icon.png" />
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default ForwardModal;
