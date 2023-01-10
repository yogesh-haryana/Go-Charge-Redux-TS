import useStyles from "./searchBarStyles";
import axios from "axios";
import { useContext, useEffect } from "react";
import { searchContext } from "../contexts/searchContext";
import SearchIcon from "@mui/icons-material/Search";
import Header from "./Header";

const SearchBar = () => {
  const classes = useStyles();
  const {
    // receiving context values
    inputValue,
    setInputValue,
    stationsData,
    setStationsData,
    filtered,
    setFiltered,
    setFilterStatus,
  } = useContext(searchContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const getStationsData = async () => {
    const resp = await axios.get("http://localhost:7000/");
    const { data } = resp;
    setStationsData(data);
    console.log(data);
  };

  const IsDataAvailable = () => {
    if (!filtered.length) {
      setFilterStatus(false);
    } else {
      setFilterStatus(true);
    }
  };

  useEffect(() => {
    getStationsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchStation = () => {
    // eslint-disable-next-line array-callback-return
    const fltrData = stationsData.filter((item) => {
      for (let i = 0; i < item.connectorTypes.length; i++) {
        if (inputValue.trim() === item.connectorTypes[i]) {
          return item;
        }
      }
      // return item;
    });
    setFiltered(fltrData);
    IsDataAvailable();
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    searchStation();
    e.preventDefault();
  }

  return (
    <div>
      <Header />
      <p className={classes.heading}>
        Search a charging station for Your Electric Vehicle
      </p>
      <div className={classes.searchBarContainer}>
        <form onSubmit={(e)=>onFormSubmit(e)}>
          <input
            className={classes.searchBar}
            type="text"
            placeholder="connector type..."
            onChange={(e) => handleChange(e)}
            value={inputValue}
          ></input>
          <button
            type="submit"
            className={classes.searchButton}
          >
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
