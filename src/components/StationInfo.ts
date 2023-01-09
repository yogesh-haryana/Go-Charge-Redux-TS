import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  stationsHolder: {
    display: "flex",
    marginTop: "50px",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    
  },
  stationClass: {
    width: "45%",
    border: "1px solid black",
    borderRadius: "6px",
    textAlign: "left",
    padding: "20px",
    marginTop: "30px",

  },
  address: {

  },
  stationName: {
    fontSize: "1.5rem",
    fontWeight: "700",


  },
});

export default useStyles;