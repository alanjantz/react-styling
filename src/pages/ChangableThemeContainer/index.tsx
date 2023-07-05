import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import ThemeProvider from "../../components/ThemeProvider";
import { useThemeChanger } from "../../hooks/ThemeChanger/ThemeChangerContext";
import Styleguide from "../Styleguide";
import Tab from "@mui/material/Tab";
import TabPanel from "./components/TabPanel";

const ChangableThemeContainer: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { theme } = useThemeChanger();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <ThemeProvider theme={{ ...theme }}>
      <AppBar position="static">
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Styleguide" />
          <Tab label="Examples" />
        </Tabs>
      </AppBar>
      <TabPanel value={0} index={tabIndex}>
        <Styleguide />
      </TabPanel>
      <TabPanel value={1} index={tabIndex}>
        WIP
      </TabPanel>
    </ThemeProvider>
  );
};

export default ChangableThemeContainer;
