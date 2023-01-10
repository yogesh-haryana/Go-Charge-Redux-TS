import useStyles from "./searchBarStyles";
import axios from "axios";
import { useContext } from "react";
import { searchContext } from "../contexts/searchContext";
import SearchIcon from "@mui/icons-material/Search";
import Header from "./Header";
// import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const classes = useStyles();
  const {
    // receiving context values
    inputValue,
    setInputValue,
    setStationsData,
  } = useContext(searchContext);
  // const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const searchStation = async () => {
    const resp = await axios.get(`http://localhost:7000/${inputValue}`);
    const { data } = resp;
    setStationsData(data);
    console.log(data);

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
