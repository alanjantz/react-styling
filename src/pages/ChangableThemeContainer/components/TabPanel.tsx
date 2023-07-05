import React from "react";

interface TabPanelProps {
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { value, index, children } = props;

  return <>{value === index && children}</>;
};

export default TabPanel;
