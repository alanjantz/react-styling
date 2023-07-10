import React, { useCallback } from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import AnimeRow, { AnimeRowProps } from "./AnimeRow";

const AnimeTable: React.FC = () => {
  const createData = useCallback(
    (
      name: string,
      year: number,
      seasons: number,
      studio: string,
      synopsis: string,
      genres: string[]
    ): AnimeRowProps => {
      return {
        name,
        year,
        seasons,
        studio,
        details: {
          synopsis,
          genres,
          characters: [],
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
      "Arima Kousei é um ex-prodígio musical que perdeu a habilidade de tocar piano depois que sua mãe, que também era sua instrutora, faleceu. Sua vida agora é monótona, mas ela começa a ganhar cor quando ele conhece uma violinista por acaso. Miyazono Kaori é uma garota audaciosa e determinada cuja personalidade transborda. Encantado pela garota, Kousei, nos seus 14 anos, começa a seguir em frente com suas próprias pernas.",
      ["Drama", "School", "Musical", "Slice of Life"]
    ),
    createData(
      "Kiznaiver",
      2016,
      1,
      "Trigger",
      "O Sistema Kizuna é um sistema incompleto para a implementação da paz mundial que conecta pessoas através das dores. Todos que foram conectados a esse sistema são chamados de Kiznaivers. Certo dia, Sonosaki Noriko diz a seu colega de classe Agata Katsuhira que ele havia sido selecionado para ser um Kiznaiver. O Sistema Kizuna permite que Katsuhira compartilhe seus ferimentos e se conecte aos colegas de classe cujas vidas e personalidades são totalmente diferentes da dele. A Cidade de Sugomori foi construída em terreno recuperado, mas com o passar dos anos, a população da cidade está caindo. A história se passa nesta cidade, onde Katsuhira e seus amigos vivem.",
      ["Action", "Drama", "Sci-Fi"]
    ),
    createData(
      "Yuri!!! On Ice",
      2016,
      1,
      "MAPPA",
      "A história gira em torno de Yuri Katsuki, que carregou todas as esperanças do Japão em seus ombros para vencer a competição de patinação no gelo Grand Prix Final, mas sofreu uma derrota esmagadora. Ele volta para casa em Kyushu e parte dele se sente como se quisesse se aposentar, e a outra parte se sente com a vontade de querer continuar a patinação no gelo. Com esses sentimentos mistos girando dentro dele, ele se mantém na casa dos pais. De repente, o patinador de gelo pentacampeão Victor Nikiforov, aparece diante dele, junto de Yuri Plisetsky, uma figura jovem patinadora russa que já está derrotando os seus veteranos. Victor e ambos Yuris assumiram o desafio em uma série Grand Prix sem precedentes.",
      ["Boys Love", "Sports"]
    ),
    createData(
      "Zankyou no Terror",
      2014,
      1,
      "MAPPA",
      "Num dia de verão, um bombardeio terrorista subitamente atinge Tóquio. Descobre-se que os culpados por trás desse ato que acordou a nação do seu sono complacente são apenas dois garotos. Agora, os culpados, conhecidos como 'Sphinx' (Esfínge) começam um grandioso jogo que engloba todo o território japonês",
      ["Psychologic", "Thriller"]
    ),
    createData(
      "Ao no Exorcist",
      2011,
      2,
      "A-1 Pictures",
      "Este mundo é composto de duas dimensões que se juntaram formando apenas uma, como um espelho. O primeiro é o mundo em que os seres humanos vivem, Assiah. O outro é o mundo dos demônios, Gehenna. Normalmente, as viagens entre os dois, na verdade qualquer tipo de contato entre os dois, é impossível. No entanto, os demônios podem passar para este mundo por possuir qualquer coisa que existe dentro dele. Satanás, o deus dos demônios, há uma coisa que ele não tem, e isso é uma substância no mundo humano que é poderosa o suficiente para contê-lo! Para o efeito, criou Rin, seu filho de uma mulher humana, mas seu filho concorda com seus planos? Ou ele vai se tornar algo mais…? Um exorcista?",
      ["Action", "Fantasy", "Shounen", "Supernatural"]
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
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
