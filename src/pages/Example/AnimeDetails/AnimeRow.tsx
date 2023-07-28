import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AnimeDetails, { AnimeDetailsProps } from "./AnimeDetails";

export interface AnimeRowProps {
  name: string;
  year: number;
  seasons: number;
  studio: string;
  details: AnimeDetailsProps;
}

const AnimeRow: React.FC<AnimeRowProps> = ({
  name,
  year,
  seasons,
  studio,
  details,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell scope="row">{name}</TableCell>
        <TableCell align="right">{year}</TableCell>
        <TableCell align="right">{seasons}</TableCell>
        <TableCell>{studio}</TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell style={{ padding: 0 }} colSpan={5}>
            <AnimeDetails {...details} />
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
};

export default AnimeRow;
