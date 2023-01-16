import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

  homePage: {
    

  },
  firstContainer: {
    margin: "0 auto",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },

  applicationInfo: {
    width: "80%",
  },
  paraGraph: {
    textAlign: "left",
    fontSize: "16px",
    paddingLeft: "130px",
    "& span": {
      fontSize: "22px",
    },
  },
  chargingImg: {
    height: "400px",

  },

  imageContainer: {
    width: "20%",
  },
});

export default useStyles;