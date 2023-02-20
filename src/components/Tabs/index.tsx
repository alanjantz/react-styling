import React, { useCallback, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import Styleguide from "../../pages/Styleguide/index";
import Album from "../../pages/Album/index";

const CustomizableApp: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    },
    [setValue]
  );

  function getDefaultProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <main>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            label="Style Guid"
            title="Custom components"
            {...getDefaultProps(0)}
          />
          <Tab
            label="Album"
            title="Default MUI components"
            {...getDefaultProps(1)}
          />
          <Tab
            label="Multi Theme"
            title="Themes inside themes"
            {...getDefaultProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Styleguide />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Album />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Themes inside themes
      </TabPanel>
    </main>
  );
};

export default CustomizableApp;
