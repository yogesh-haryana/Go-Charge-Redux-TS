import useStyles from "./searchBarStyles";
import axios from "axios";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { searchStation } from "../redux/actions/action";

const SearchBar = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchData = async () => {
    const resp = await axios.get(`http://localhost:7000/${inputValue}`);
    const { data } = resp;
    dispatch(searchStation(data));
    console.log(data);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    fetchData();
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
