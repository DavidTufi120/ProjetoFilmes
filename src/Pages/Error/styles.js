import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  __error: {
    width: "100%",
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    "& h2": {
      fontSize: "45px",
    },

    "& h3": {
      marginTop: "20px",
      fontSize: "40px",
      textAlign: "center",
    },

    "@media(min-width: 447px)": {
      "& img": {
        width: "30%",
        marginRight: "5%",
      },
    },

    "@media(max-width: 446px)": {
      "& h2": {
        fontSize: "35px",
      },

      "& img": {
        width: "50%",
        marginRight: "5%",
      },
    },

    "& a": {
      marginTop: "30px",
      padding: "10px 10px",
      fontSize: "18px",
      backgroundColor: "#8B0000",
      textDecoration: "none",
      textTransform: "uppercase",
      color: "#FFF",
      borderRadius: "8px",
    },
  },
});
