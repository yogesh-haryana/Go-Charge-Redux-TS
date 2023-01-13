import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainDiv: {
    margin: "0 auto",
    width: "80%",
    marginTop: "70px",
    "& p": {
      fontSize: "18px",
      textAlign: "left",
    },
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
    margin: "10px auto 50px auto",
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