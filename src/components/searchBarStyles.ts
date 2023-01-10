import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  heading: {
    marginTop: "50px",
    fontSize: "22px",
    fontWeight: "500",
  },
  searchBarContainer: {
    marginTop: "50px",
    "input:focus": {
      borderBottom: "2px solid blue",
    },
  },
  searchBar: {
    height: "37px",
    borderRadius: "5px 0 0 5px",
    border: "1px solid blue",
    width: "25%",
    borderRight: "0",
    "&:focus-visible": {
      // border: "none",
      borderLeft: "2px solid blue",
      outline: "0",
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
    "& path": {
      fillRule: "nonzero",
      color: "blue",
    },
  },
});

export default useStyles;