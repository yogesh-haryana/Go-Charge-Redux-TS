import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "./SearchHistoryStyles";
import {
  changePageNumber,
  changeDate,
  selectConnector,
  selectEntries,
} from "../redux/actions/action";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logoHead.png";
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

type HTMLtype = React.ChangeEvent<HTMLSelectElement>;

const SearchHistory = () => {
  const [history, setHistory] = useState<HistoryObj[]>([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pageNumber, connector, date, entries } = useSelector(
    (state: StateType) => state.GetStations,
  );

  const filterSearchHistory = () => {
    const apiURL = `http://localhost:7000/api/allStations/history/?searchQuery=${connector}&atDate=${date}&entries=${entries}&page=${pageNumber}`;
    getSearchHistory(apiURL);
  };

  const getSearchHistory = async (url: string) => {
    const resp = await axios.get(url);
    const { data } = resp;
    setHistory(data);
  };

  useEffect(() => {
    filterSearchHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, connector, date, entries]);

  return (
    <div>
      <div className={classes.headerDiv}>
        <div className={classes.header}>
          <Link to="/">
            <img src={Logo} alt="logo"></img>
          </Link>
          <span>Go Charge</span>
        </div>
        <div className={[classes.header, classes.history].join(" ")}>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
      <div className={classes.mainDiv}>
        <div className={classes.aboveTable}>
        <div className={classes.recent}>
          <p>Recent queries</p>
        </div>
        <div className={classes.filtersDiv}>Filter By
          connector :<select
            value={connector}
            onChange={(e: HTMLtype) =>
              dispatch(selectConnector(e.target.value))
            }
          >
            <option value="">select</option>
            <option value="5-pins">5-pins</option>
            <option value="7-pins">7-pins</option>
            <option value="12-pins">12-pins</option>
          </select>
          By Date:
          <input
            type="text"
            value={date}
            placeholder="dd-mm-yyyy"
            onChange={(e) => dispatch(changeDate(e.target.value))}
          ></input>
        </div>
        </div>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Connector Type</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { history.length ? history.map((elem: HistoryObj, i: number) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{elem.searchQuery}</TableCell>
                    <TableCell>{elem.atDate}</TableCell>
                  </TableRow>
                )
              })  : <p>No Matching Results</p>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={classes.buttonsContainer}>
        <div className={classes.entries}>
          Showing <select
            value={entries}
            onChange={(e: HTMLtype) =>
              dispatch(selectEntries(Number(e.target.value)))
            }
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select> entries
        </div>
        <div className={classes.buttonHolder}>
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
