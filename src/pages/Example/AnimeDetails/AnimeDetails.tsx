import React from "react";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { DetailsContainer, Synopsis } from "./styles";

export interface CharacterProps {
  name: string;
  voiceActor: string;
}

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
      <Stack direction="row" spacing={1}>
        {genres.sort().map((genre) => (
          <Chip key={genre} label={genre} />
        ))}
      </Stack>
      <Synopsis>{synopsis}</Synopsis>
    </DetailsContainer>
  );
};

export default AnimeDetails;
