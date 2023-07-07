import React, { useCallback } from "react";
import ContentContainer from "../../components/Containers/ContentContainer";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Row, { RowProps } from "./components/Row";

const Example: React.FC = () => {
  const createData = useCallback(
    (
      name: string,
      calories: number,
      fat: number,
      carbs: number,
      protein: number,
      price: number
    ): RowProps => {
      return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
      };
    },
    []
  );

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
    createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
    createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
    createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  ];

  return (
    <ContentContainer maxWidth="lg">
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} {...row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContentContainer>
  );
};

export default Example;
