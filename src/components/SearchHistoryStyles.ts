import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainDiv: {
    margin: "0 auto",
    width: "77.5%",
    marginTop: "20px",
    "& p": {
      fontSize: "18px",
      textAlign: "left",
    },
  },
  headerDiv: {
    display:"flex",
    justifyContent: "space-between",
  },
  header: {
    width: "25%",
    fontSize: "1.8rem",
    fontWeight: "600",
    margin: "15px 0 0 2%",
    lineHeight: "50px",
    "& img": {
      height: "50px",
      width: "60px",
      verticalAlign: "bottom",      
    },
  },
  history: {
    "& button": {
      fontSize: "22px",
      fontWeight: "400",
      background: "none",
      border: "none",
      textDecoration : "underline",
      color: "blueviolet",
    },
  },
  selectType: {

  },
  tableContainer: {
    "& table": {
      "& thead": {
        backgroundColor: "#61876E",
        "& tr": {
          color: "#fff",
          "& th": {
            width: "50%",
            color: "#fff",
            fontSize: "20px",
            textAlign: "center",
          },
        },
      },
      "& tbody": {
        "& tr": {
          "& td": {
            fontSize: "1.8 rem",
            textAlign: "center",
          },
        },

      },
    },
    
  },
  buttonsContainer: {
    width: "80%",
    margin: "10px auto 10px auto",
    "& div": {
      width: "12%",
      marginLeft: "auto",
      display: "flex",
      justifyContent: "space-around",
      "& button": {
        border: "none",
        background: "none",
        cursor: "pointer",
        "& svg": {
          height: "15px",
          width: "15px",
        },
        "& path": {
          fillRule: "evenodd",
          color: "blue",
        },
      },
    },
  },
});

export default useStyles;