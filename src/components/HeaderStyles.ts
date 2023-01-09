import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerDiv: {
    display:"flex",
  },
  header: {
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
});

export default useStyles;