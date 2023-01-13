import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerDiv: {
    display:"flex",
    justifyContent: "space-between",
  },
  header: {
    width: "25%",
    fontSize: "1.8rem",
    fontWeight: "600",
    margin: "30px 0 0 5%",
    lineHeight: "50px",
    "& img": {
      height: "50px",
      width: "60px",
      verticalAlign: "bottom",      
    },
  },
  history: {
    fontSize: "22px",
    fontWeight: "400",
  },
});

export default useStyles;