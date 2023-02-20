import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import PageHeader from "../../components/PageHeader/index";

const Styleguide: React.FC = () => {
  return (
    <>
      <PageHeader>Styleguide</PageHeader>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={6}>
            <Typography
              component="h2"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              Main colors
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              component="h2"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              Accent colors
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              Neutral colors
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              UI components
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              Typography
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Styleguide;
