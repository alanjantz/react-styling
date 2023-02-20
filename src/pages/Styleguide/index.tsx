import React from "react";
import {
  Button,
  Checkbox,
  Chip,
  Container,
  Grid,
  Radio,
  Switch,
  Typography,
  useTheme,
} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import Alert from "@material-ui/lab/Alert";
import PageHeader from "../../components/PageHeader/index";
import ColorBox from "../../components/ColorBox";

const Styleguide: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <PageHeader>Styleguide</PageHeader>
      <Container maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              Main colors
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <ColorBox
                  label={"Primary"}
                  color={theme.palette.primary.main}
                />
              </Grid>
              <Grid item xs={6}>
                <ColorBox
                  label={"Secondary"}
                  color={theme.palette.secondary.main}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              Accent colors
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <ColorBox label={"Info"} color={theme.palette.info.main} />
              </Grid>
              <Grid item xs={3}>
                <ColorBox
                  label={"Success"}
                  color={theme.palette.success.main}
                />
              </Grid>
              <Grid item xs={3}>
                <ColorBox
                  label={"Warning"}
                  color={theme.palette.warning.main}
                />
              </Grid>
              <Grid item xs={3}>
                <ColorBox label={"Error"} color={theme.palette.error.main} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h2"
              color="textPrimary"
              gutterBottom
            >
              Components
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <label>Chip</label>
                <Chip
                  icon={<FaceIcon />}
                  label="Fulano Ciclano"
                  color="primary"
                />
                <Chip
                  icon={<FaceIcon />}
                  label="Fulano Ciclano"
                  color="secondary"
                />
              </Grid>
              <Grid item xs={6}>
                <label>Switch</label>
                <Switch name="checkedA" color="primary" />
                <Switch name="checkedB" color="secondary" />
                <Switch name="checkedC" color="default" disabled />
              </Grid>
              <Grid item xs={6}>
                <label>Checkbox</label>
                <Checkbox color="primary" />
                <Checkbox color="secondary" />
                <Checkbox color="default" disabled />
              </Grid>
              <Grid item xs={6}>
                <label>Radio</label>
                <Radio color="primary" value={1} />
                <Radio color="secondary" value={2} />
                <Radio color="default" value={3} disabled />
              </Grid>
              <Grid item xs={12}>
                <label>Button</label>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                  Primary
                </Button>
                <Button variant="contained" color="secondary">
                  Secondary
                </Button>
                <Button variant="contained" disabled>
                  Disabled
                </Button>
              </Grid>
            </Grid>
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
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Alert severity="error">
                  This is an error alert — check it out!
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <Alert severity="warning">
                  This is a warning alert — check it out!
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <Alert severity="info">
                  This is an info alert — check it out!
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <Alert severity="success">
                  This is a success alert — check it out!
                </Alert>
              </Grid>
            </Grid>
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
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  component="h1"
                  variant="h1"
                  color="textPrimary"
                  gutterBottom
                >
                  Aa
                </Typography>
                <Typography
                  component="label"
                  variant="subtitle1"
                  color="textPrimary"
                  gutterBottom
                >
                  H1 header
                </Typography>
                <Typography
                  component="h2"
                  variant="h2"
                  color="textPrimary"
                  gutterBottom
                >
                  Aa
                </Typography>
                <Typography
                  component="label"
                  variant="subtitle1"
                  color="textPrimary"
                  gutterBottom
                >
                  H2 header
                </Typography>
                <Typography
                  component="h3"
                  variant="h3"
                  color="textPrimary"
                  gutterBottom
                >
                  Aa
                </Typography>
                <Typography
                  component="label"
                  variant="subtitle1"
                  color="textPrimary"
                  gutterBottom
                >
                  H3 header
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  component="p"
                  variant="inherit"
                  color="textPrimary"
                  gutterBottom
                  align="justify"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  pretium, lacus nec tincidunt laoreet, arcu lorem pulvinar
                  massa, ut pretium quam mi ac nibh. Vestibulum urna erat,
                  pellentesque et pellentesque vel, porttitor sed tellus. Aenean
                  in feugiat velit, eu ullamcorper leo. In faucibus quis eros in
                  hendrerit.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Styleguide;
