import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainDiv: {
    "& div": {
      width: "75%",
      margin: "0 auto",
      marginTop: "100px",
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
});

export default useStyles;