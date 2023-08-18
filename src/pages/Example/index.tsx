import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import ContentContainer from "../../components/Containers/ContentContainer";
import AnimeTable from "./AnimeDetails/AnimeTable";

const Example: React.FC = () => {
  const theme = useTheme();

  return (
    <ContentContainer maxWidth="lg">
      <Typography variant="h3" style={{ marginBottom: theme.spacing(2) }}>
        Animes
      </Typography>
      <AnimeTable />
    </ContentContainer>
  );
};

export default Example;
