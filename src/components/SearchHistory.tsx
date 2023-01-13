import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./SearchHistoryStyles";
import { changePageNumber } from "../redux/actions/action";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { StateType } from "../redux/reducers/reducers";

interface HistoryObj {
  searchQuery: string;
  atDate: string;
}

const SearchHistory = () => {
  const [history, setHistory] = useState<HistoryObj[]>([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const pageNumber = useSelector(
    (state: StateType) => state.GetStations.pageNumber,
  );
  console.log(pageNumber);

  const getSearchHistory = async () => {
    const resp = await axios.get(
      `http://localhost:7000/api/allStations/history/${pageNumber}`,
    );
    const { data } = resp;
    setHistory(data);
    console.log("my history data is ", data);
  };

  useEffect(() => {
    getSearchHistory();
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <div>
      <Header />
      <div className={classes.mainDiv}>
      <p>Recent queries...</p>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Connector Type</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.map((elem: HistoryObj, i: number) => {
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
      <div className={classes.buttonsContainer}>
        <div>
          <button
            onClick={() => {
              dispatch(changePageNumber(-1));
            }}
          >
            <ArrowBackIosNewIcon />
          </button>
          <button
            onClick={() => {
              dispatch(changePageNumber(1));
            }}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHistory;
