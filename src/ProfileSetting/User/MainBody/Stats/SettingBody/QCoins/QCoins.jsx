import React from "react";
import style from "./QCoins.module.css";
import "./QCoins.css";
// -----------------------------------------
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Coins from "./Coins/Coins";
import LinkedAccount from "./LinkedAccount/LinkedAccount";
import History from "./History/History";

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

function QCoins() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.settingBody}>
      <div className={style.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Coins" {...a11yProps(0)} />
          <Tab label="Linked Account" {...a11yProps(1)} />
          <Tab label="History" {...a11yProps(2)} />
        </Tabs>
      </div>
      <Divider />

      <div className={style.panel}>
        <TabPanel value={value} index={0}>
          <Coins />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LinkedAccount />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <History />
        </TabPanel>
      </div>
    </div>
  );
}

export default QCoins;
