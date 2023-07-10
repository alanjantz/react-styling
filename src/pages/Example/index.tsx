import React from "react";
import ContentContainer from "../../components/Containers/ContentContainer";
import AnimeTable from "./AnimeDetails/AnimeTable";
import { Typography } from "@mui/material";

const Example: React.FC = () => {
  return (
    <ContentContainer maxWidth="lg">
      <Typography variant="h3">Animes</Typography>
      <AnimeTable />
    </ContentContainer>
  );
};

export default Example;
