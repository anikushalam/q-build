import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabContent from './TabContent'

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{display: 'flex !important'}}>
          <Tab label="About" {...a11yProps(0)} sx={{marginLeft: '70px', letterSpacing: '0.4px', fontFamily: 'Inter', fontWeight: '600', textTransform: 'none'}}/>
          <Tab label="Extra-skills" {...a11yProps(1)} sx={{marginLeft: '70px', letterSpacing: '0.4px', fontFamily: 'Inter', fontWeight: '600', textTransform: 'none'}}/>
          <Tab label="Fees Data" {...a11yProps(2)} sx={{marginLeft: '70px', letterSpacing: '0.4px', fontFamily: 'Inter', fontWeight: '600', textTransform: 'none'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TabContent/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Extra-skills
      </TabPanel>
      <TabPanel value={value} index={2}>
        Fees Data
      </TabPanel>
    </Box>
  );
}
