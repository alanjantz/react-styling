import React from "react";
import Grid, { GridSize } from "@mui/material/Grid";
import SectionItem from "../SectionItem";
import SectionTitle from "../SectionTitle";

type SubsectionProps = {
  title: string;
  size?: GridSize;
};

const Subsection: React.FC<SubsectionProps> = ({ title, size, children }) => {
  return (
    <SectionItem size={size}>
      <SectionTitle variant="subtitle1">{title}</SectionTitle>
      <Grid container spacing={1}>
        {children}
      </Grid>
    </SectionItem>
  );
};

export default Subsection;
