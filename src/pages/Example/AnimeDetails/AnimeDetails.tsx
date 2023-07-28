import React from "react";
import Chip from "@mui/material/Chip";
import { DetailsContainer, Synopsis, Stack } from "./styles";
import AnimeCharacterList, { CharacterProps } from "./AnimeCharacterList";
import Grid from "@mui/material/Grid";

export interface AnimeDetailsProps {
  synopsis: string;
  genres: string[];
  characters: CharacterProps[];
}

const AnimeDetails: React.FC<AnimeDetailsProps> = ({
  synopsis,
  genres,
  characters,
}) => {
  return (
    <DetailsContainer>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Stack direction="row" spacing={1}>
            {genres.sort().map((genre) => (
              <Chip key={genre} label={genre} color="primary" />
            ))}
          </Stack>
          <Synopsis>{synopsis}</Synopsis>
        </Grid>
        <Grid item xs={8}>
          <AnimeCharacterList characters={characters} />
        </Grid>
      </Grid>
    </DetailsContainer>
  );
};

export default AnimeDetails;
