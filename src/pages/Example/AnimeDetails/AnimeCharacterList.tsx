import React from "react";
import Carousel from "react-elastic-carousel";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Card, CarouselContainer } from "./styles";

export interface CharacterProps {
  name: string;
  voiceActor: string;
}
export interface AnimeCharacterListProps {
  characters: CharacterProps[];
}

const AnimeCharacterList: React.FC<AnimeCharacterListProps> = ({
  characters,
}) => {
  return (
    <CarouselContainer maxWidth="md">
      <Typography variant="h6" component="div" style={{ marginLeft: 30 }}>
        Characters
      </Typography>
      <Carousel isRTL={false} itemsToShow={3} itemPadding={[3]}>
        {characters.map((character) => (
          <Card key={character.name} variant="outlined">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://source.unsplash.com/random?fruit&orientation=landscape"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {character.voiceActor}
                </Typography>
              </CardContent>
            </Card>
          </Card>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default AnimeCharacterList;
