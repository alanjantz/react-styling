import React from "react";
import Grid, { GridSize } from "@mui/material/Grid";

type SectionItemProps = {
  size?: GridSize;
};

const SectionItem: React.FC<SectionItemProps> = ({ size, children }) => {
  return (
    <Grid item xs={size}>
      {children}
    </Grid>
  );
};

export default SectionItem;
