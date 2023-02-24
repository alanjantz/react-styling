import React from "react";
import Grid from "@mui/material/Grid";
import SectionTitle from "../SectionTitle";

type SectionProps = {
  title: string;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <Grid item xs={12}>
      <SectionTitle>{title}</SectionTitle>
      <Grid container spacing={3}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Section;
