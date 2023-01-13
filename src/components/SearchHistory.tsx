import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import useStyles from "./SearchHistoryStyles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface HistoryObj {
  searchQuery: string,
  atDate: string
}

const SearchHistory = () => {
  const [history, setHistory] = useState<HistoryObj[]>([]);
  const classes = useStyles();

  const getSearchHistory = async () => {
    const resp = await axios.get(
      "http://localhost:7000/api/allStations/history",
    );
    const { data } = resp;
    console.log("my history data is ", data);
    setHistory(data);
  };

  useEffect(() => {
    getSearchHistory();
  }, []);

  return (
    <div>
      <Header />
      <div className={classes.mainDiv}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Connector Type</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { history.map((elem : HistoryObj, i: number) => {
              return (
                <TableRow key={i}>
                  <TableCell>{elem.searchQuery}</TableCell>
                  <TableCell>{elem.atDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
};

export default SearchHistory;
