import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useThemeChanger } from "../../hooks/ThemeChanger/ThemeChangerContext";
import ThemeProvider from "../../components/ThemeProvider";
import TabPanel from "./components/TabPanel";
import Styleguide from "../Styleguide";
import Example from "../Example";
import { Container } from "./styles";

const ChangableThemeContainer: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { theme } = useThemeChanger();

  return (
    <ThemeProvider theme={{ ...theme }}>
      <Container>
        <AppBar position="static">
          <Tabs
            value={tabIndex}
            onChange={(_, newValue: number) => setTabIndex(newValue)}
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
          <Example />
        </TabPanel>
      </Container>
    </ThemeProvider>
  );
};

export default ChangableThemeContainer;
