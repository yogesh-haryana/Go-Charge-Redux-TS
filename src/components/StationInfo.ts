import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  stationsHolder: {
    "& span": {
      display: "block",
      margin: "10px auto",
    },
    display: "flex",
    marginTop: "50px",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    
  },
  stationClass: {
    margin: "0 auto",
    width: "60%",
    border: "1px solid black",
    borderRadius: "6px",
    marginTop: "30px",
    display: "flex",
  },
  address: {

  },
  stationName: {
    fontSize: "1.5rem",
    fontWeight: "700",


  },
  logoContainer: {
    writingMode: "vertical-lr",
    width: "30%",
    "& img": {
      height: "100px",
      width: "120px",
    },
  },
  stationDetails: {
    width: "70%",
    textAlign: "left",
    padding: "20px",
  },
});

export default useStyles;