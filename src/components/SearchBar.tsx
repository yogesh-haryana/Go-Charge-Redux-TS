import useStyles from "./searchBarStyles";
import axios from "axios";
import { useContext, useEffect } from "react";
import { searchContext } from "../contexts/searchContext";
import { Button, TextField } from "@mui/material";

const SearchBar = () => {
  const classes = useStyles();
  const {
    inputValue,
    setInputValue,
    stationsData,
    setStationsData,
    setFiltered,
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

  useEffect(() => {
    getStationsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchStation = () => {
    const fltrData = stationsData.filter((item) => {
      for (let i = 0; i < item.connectorTypes.length; i++) {
        if (inputValue.trim() === item.connectorTypes[i]) {
          return item;
        }
      }
    });
    setFiltered(fltrData);
  };

  return (
    <div>
      <TextField
        className={classes.searchBar}
        type="text"
        variant="outlined"
        label="Go Charge"
        onChange={(e) => handleChange(e)}
        value={inputValue}
      ></TextField>
      <Button
        variant="contained"
        className={classes.searchButton}
        onClick={searchStation}
      >
        Search
      </Button>
    </div>
  );
};
export default SearchBar;
