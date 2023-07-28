import React, { useCallback } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import AnimeRow, { AnimeRowProps } from "./AnimeRow";
import { CharacterProps } from "./AnimeCharacterList";

const AnimeTable: React.FC = () => {
  const createData = useCallback(
    (
      name: string,
      year: number,
      seasons: number,
      studio: string,
      synopsis: string,
      genres: string[],
      characters: CharacterProps[]
    ): AnimeRowProps => {
      return {
        name,
        year,
        seasons,
        studio,
        details: {
          synopsis,
          genres,
          characters,
        },
      };
    },
    []
  );

  const rows = [
    createData(
      "Shigatsu wa Kimi no Uso",
      2014,
      1,
      "A-1 Pictures",
      "Kousei Arima is a child prodigy known as the 'Human Metronome' for playing the piano with precision and perfection. Guided by a strict mother and rigorous training, Kousei dominates every competition he enters, earning the admiration of his musical peers and praise from audiences. When his mother suddenly passes away, the subsequent trauma makes him unable to hear the sound of a piano, and he never takes the stage thereafter.",
      ["Drama", "School", "Musical", "Slice of Life"],
      [
        { name: "Miyazono, Kaori", voiceActor: "Taneda, Risa" },
        { name: "Arima, Kousei", voiceActor: "Hanae, Natsuki" },
        { name: "Sawabe, Tsubaki", voiceActor: "Sawabe, Tsubaki" },
        { name: "Watari, Ryouta", voiceActor: "Oosaka, Ryouta" },
      ]
    ),
    createData(
      "Kiznaiver",
      2016,
      1,
      "Trigger",
      "Katsuhira Agata is a quiet and reserved teenage boy whose sense of pain has all but vanished. His friend, Chidori Takashiro, can only faintly remember the days before Katsuhira had undergone this profound change. Now, his muffled and complacent demeanor make Katsuhira a constant target for bullies, who exploit him for egregious sums of money. But their fists only just manage to make him blink, as even emotions are far from his grasp.",
      ["Action", "Drama", "Sci-Fi"],
      [
        { name: "Takashiro, Chidori", voiceActor: "Terasaki, Yuka" },
        { name: "Agata, Katsuhira", voiceActor: "Agata, Katsuhira" },
        { name: "Sonozaki, Noriko", voiceActor: "Yamamura, Hibiku" },
        { name: "Niiyama, Niko", voiceActor: "Kuno, Misaki" },
        { name: "Hisomu, Yoshiharu", voiceActor: "Nishiyama, Koutarou" },
        { name: "Tenga, Hajime", voiceActor: "Maeno, Tomoaki" },
        { name: "Maki, Honoka", voiceActor: "Satou, Rina" },
        { name: "Yuta, Tsuguhito", voiceActor: "Yuta, Tsuguhito" },
      ]
    ),
    createData(
      "Yuri!!! On Ice",
      2016,
      1,
      "MAPPA",
      "Reeling from his crushing defeat at the Grand Prix Finale, Yuuri Katsuki, once Japan's most promising figure skater, returns to his family home to assess his options for the future. At age 23, Yuuri's window for success in skating is closing rapidly, and his love of pork cutlets and aptitude for gaining weight are not helping either.",
      ["Boys Love", "Sports"],
      [
        { name: "Nikiforov, Victor", voiceActor: "Suwabe, Junichi" },
        { name: "Plisetsky, Yuri", voiceActor: "Uchiyama, Kouki" },
        { name: "Katsuki, Yuuri", voiceActor: "Toyonaga, Toshiyuki" },
      ]
    ),
    createData(
      "Zankyou no Terror",
      2014,
      1,
      "MAPPA",
      "Painted in red, the word 'VON' is all that is left behind after a terrorist attack on a nuclear facility in Japan. The government is shattered by their inability to act, and the police are left frantically searching for ways to crack down the perpetrators. The public are clueless—until, six months later, a strange video makes its way onto the internet. In it, two teenage boys who identify themselves only as 'Sphinx' directly challenge the police, threatening to cause destruction and mayhem across Tokyo. Unable to stop the mass panic quickly spreading through the city and desperate for any leads in their investigation, the police struggle to act effectively against these terrorists, with Detective Kenjirou Shibazaki caught in the middle of it all.",
      ["Psychologic", "Thriller"],
      [
        { name: "Twelve", voiceActor: "Saitou, Souma" },
        { name: "Nine", voiceActor: "Ishikawa, Kaito" },
        { name: "Shibazaki, Kenjirou", voiceActor: "Sakuya, Shunsuke" },
        { name: "Mishima, Lisa", voiceActor: "Tanezaki, Atsumi" },
      ]
    ),
    createData(
      "Ao no Exorcist",
      2011,
      2,
      "A-1 Pictures",
      "Humans and demons are two sides of the same coin, as are Assiah and Gehenna, their respective worlds. The only way to travel between the realms is by the means of possession, like in ghost stories. However, Satan, the ruler of Gehenna, cannot find a suitable host to possess and therefore, remains imprisoned in his world. In a desperate attempt to conquer Assiah, he sends his son instead, intending for him to eventually grow into a vessel capable of possession by the demon king.",
      ["Action", "Fantasy", "Shounen", "Supernatural"],
      [
        { name: "Okumura, Rin", voiceActor: "Okamoto, Nobuhiko" },
        { name: "Okamoto, Nobuhiko", voiceActor: "Fukuyama, Jun" },
        { name: "Kuro", voiceActor: "Takagaki, Ayahi" },
      ]
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 0 }} />
            <TableCell>Name</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Seasons</TableCell>
            <TableCell>Studio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <AnimeRow key={row.name} {...row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnimeTable;
