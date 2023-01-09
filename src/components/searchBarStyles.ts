import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  heading: {
    marginTop: "50px",
    fontSize: "22px",
    fontWeight: "500",
  },
  searchBarContainer: {
    marginTop: "50px",
  },
  searchBar: {
    height: "37px",
    borderRadius: "5px 0 0 5px",
    border: "1px solid blue",
    width: "25%",
    borderRight: "0",
    "&: focused": {
      border: "2px solid blue",
    },

  },
  searchButton: {
    borderRadius: "0 5px 5px 0",
    border: "1px solid blue",
    borderLeft: "0",
    height: "41px",
    verticalAlign: "bottom",
    width: "40px",
    cursor: "pointer",
  },
});

export default useStyles;