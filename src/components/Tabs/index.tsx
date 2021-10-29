import React, { useCallback, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import Album from "../../pages/Album";

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
          <Tab label="Album" {...getDefaultProps(0)} />
          <Tab label="Item Two" {...getDefaultProps(1)} />
          <Tab label="Item Three" {...getDefaultProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Album />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </main>
  );
};

export default CustomizableApp;
