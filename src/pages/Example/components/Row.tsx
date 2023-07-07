import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export interface RowProps {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  price: number;
}

const Row: React.FC<RowProps> = ({ name, calories, fat, carbs, protein }) => {
  const [open, setOpen] = useState(false);

  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{calories}</TableCell>
      <TableCell align="right">{fat}</TableCell>
      <TableCell align="right">{carbs}</TableCell>
      <TableCell align="right">{protein}</TableCell>
    </TableRow>
  );
};

export default Row;
