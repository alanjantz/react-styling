import React, { useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  Chip,
  FormControl,
  Grid,
  Link,
  MenuItem,
  Radio,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useThemeChanger } from "../../hooks/ThemeChanger/ThemeChangerContext";
import ContentContainer from "../../components/Containers/ContentContainer";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Switch from "../../components/Inputs/Switch";
import ColorBox from "../../components/ColorBox";
import FullSizeContainer from "../../components/Containers/FullSizeContainer";
import { Section, SectionItem, Subsection } from "./components";
import { Container } from "./styles";

const Styleguide: React.FC = () => {
  const [selectedRadio, setSelectedRadio] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const { theme } = useThemeChanger();

  return (
    <Container>
      <Header>Styleguide</Header>
      <FullSizeContainer>
        <ContentContainer>
          <Grid container spacing={4}>
            <Section title="Main colors">
              <SectionItem size={6}>
                <ColorBox
                  label={"Primary"}
                  color={theme.palette.primary.main}
                />
              </SectionItem>
              <SectionItem size={6}>
                <ColorBox
                  label={"Secondary"}
                  color={theme.palette.secondary.main}
                />
              </SectionItem>
            </Section>
            <Section title="Accent colors">
              <SectionItem size={3}>
                <ColorBox label={"Info"} color={theme.palette.info.main} />
              </SectionItem>
              <SectionItem size={3}>
                <ColorBox
                  label={"Success"}
                  color={theme.palette.success.main}
                />
              </SectionItem>
              <SectionItem size={3}>
                <ColorBox
                  label={"Warning"}
                  color={theme.palette.warning.main}
                />
              </SectionItem>
              <SectionItem size={3}>
                <ColorBox label={"Danger"} color={theme.palette.error.main} />
              </SectionItem>
            </Section>
            <Section title="Components">
              <Subsection title="Chip" size={6}>
                <SectionItem size={false}>
                  <Chip icon={<FaceIcon />} label="Fulano" color="primary" />
                </SectionItem>
                <SectionItem size={false}>
                  <Chip icon={<FaceIcon />} label="Ciclano" color="secondary" />
                </SectionItem>
              </Subsection>
              <Subsection title="Switch" size={6}>
                <SectionItem>
                  <Switch name="checkedA" color="primary" />
                  <Switch name="checkedB" color="secondary" />
                  <Switch name="checkedC" color="default" disabled />
                </SectionItem>
              </Subsection>
              <Subsection title="Checkbox" size={6}>
                <SectionItem>
                  <Checkbox color="primary" />
                  <Checkbox color="secondary" />
                  <Checkbox color="default" disabled />
                </SectionItem>
              </Subsection>
              <Subsection title="Radio" size={6}>
                <SectionItem>
                  <Radio
                    color="primary"
                    checked={selectedRadio === 1}
                    onClick={() => setSelectedRadio(1)}
                  />
                  <Radio
                    color="secondary"
                    checked={selectedRadio === 2}
                    onClick={() => setSelectedRadio(2)}
                  />
                  <Radio
                    color="default"
                    checked={selectedRadio === 3}
                    disabled
                    onClick={() => setSelectedRadio(3)}
                  />
                </SectionItem>
              </Subsection>
              <Subsection title="Buttons" size={12}>
                <SectionItem size={4}>
                  <Button variant="contained" color="primary" fullWidth>
                    Primary
                  </Button>
                </SectionItem>
                <SectionItem size={4}>
                  <Button variant="contained" color="secondary" fullWidth>
                    Secondary
                  </Button>
                </SectionItem>
                <SectionItem size={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled
                    fullWidth
                  >
                    Disabled
                  </Button>
                </SectionItem>
                <SectionItem size={4}>
                  <Button variant="outlined" color="primary" fullWidth>
                    Primary
                  </Button>
                </SectionItem>
                <SectionItem size={4}>
                  <Button variant="outlined" color="secondary" fullWidth>
                    Secondary
                  </Button>
                </SectionItem>
                <SectionItem size={4}>
                  <Button variant="outlined" color="primary" disabled fullWidth>
                    Disabled
                  </Button>
                </SectionItem>
              </Subsection>
              <Subsection title="Segmented control" size={12}>
                <SectionItem>
                  <Tabs
                    value={selectedTab}
                    onChange={(
                      event: React.SyntheticEvent,
                      newValue: number
                    ) => {
                      setSelectedTab(newValue);
                    }}
                    centered
                    variant="fullWidth"
                  >
                    <Tab label="Tab One" />
                    <Tab label="Tab Two" />
                    <Tab label="Tab Three" />
                  </Tabs>
                </SectionItem>
              </Subsection>
              <Subsection title="Input text" size={6}>
                <SectionItem>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Type anything"
                    fullWidth
                  />
                </SectionItem>
              </Subsection>
              <Subsection title="Dropdown" size={6}>
                <SectionItem>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-customized-select-label"
                      id="simple-select"
                      value={selectedOption}
                      onChange={(event: SelectChangeEvent) => {
                        setSelectedOption(event.target.value);
                      }}
                      fullWidth
                    >
                      <MenuItem value={""}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"1"}>Option 1</MenuItem>
                      <MenuItem value={"2"}>Option 2</MenuItem>
                      <MenuItem value={"3"}>Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </SectionItem>
              </Subsection>
            </Section>
            <Section title="Alerts">
              <SectionItem size={12}>
                <Alert severity="info">
                  This is an info alert — check it out!
                </Alert>
              </SectionItem>
              <SectionItem size={12}>
                <Alert severity="success">
                  This is a success alert — check it out!
                </Alert>
              </SectionItem>
              <SectionItem size={12}>
                <Alert severity="warning">
                  This is a warning alert — check it out!
                </Alert>
              </SectionItem>
              <SectionItem size={12}>
                <Alert severity="error">
                  This is an error alert — check it out!
                </Alert>
              </SectionItem>
            </Section>
            <Section title="Typography">
              <SectionItem size={6}>
                <Typography variant="h1" color="textPrimary" gutterBottom>
                  Aa
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  gutterBottom
                >
                  H1 header
                </Typography>
                <Typography variant="h2" color="textPrimary" gutterBottom>
                  Aa
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  gutterBottom
                >
                  H2 header
                </Typography>
                <Typography variant="h3" color="textPrimary" gutterBottom>
                  Aa
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  gutterBottom
                >
                  H3 header
                </Typography>
              </SectionItem>
              <SectionItem size={6}>
                <Typography
                  variant="body1"
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
              </SectionItem>
            </Section>
          </Grid>
        </ContentContainer>
      </FullSizeContainer>
      <Footer>
        <Typography color={theme.palette.text.primary}>
          Inspired by{" "}
          <Link href="https://codepen.io/myacode/pen/OJVPyPV" target="_blank">
            Maria Marin
          </Link>
          .
        </Typography>
      </Footer>
    </Container>
  );
};

export default Styleguide;
