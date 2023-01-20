import useStyles from "./searchBarStyles";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { searchStation, chnageInputValue, setStationLoder, updateMessage } from "../redux/actions/action";
import { StateType } from "../redux/reducers/reducers";

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { inputValue } = useSelector((state: StateType)=> state.GetStations)
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(chnageInputValue(e.target.value));
  };

  const fetchData = async () => {
    const resp = await axios.get(`https://gocharge.onrender.com/api/allStations/${inputValue}`);
    const { data } = resp;
    dispatch(searchStation(data));
    dispatch(setStationLoder(false));
    dispatch(updateMessage("No Matching Results Available"));
  };

  const postSearchHistory = async () => {
    const data = { searchQuery: inputValue }
    const resp = await axios.post("https://gocharge.onrender.com/api/allStations/history", data);
    console.log("post data is ", resp);
  }

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(setStationLoder(true));
    setTimeout(() => {
      fetchData();
    }, 500);
    postSearchHistory();
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
