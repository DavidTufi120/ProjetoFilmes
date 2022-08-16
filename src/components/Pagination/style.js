import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
      contrastText: "#FFF",
      light: "#FFF",
      dark: "#FFF",
    },
  },
});

export const useStyles = makeStyles(() => ({
  root: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },

  "@media(max-width:399px)": {
    root: {
      "& .MuiPaginationItem-root": {
        fontSize: "15px",
      },
    },

    __pagination: {
      display: "flex",
      justifyContent: "center",
      bottom: "0",
      padding: "10px 0",
      position: "fixed",
      width: "100%",
      left: "0",
      backgroundColor: "#000",
    },
  },

  "@media(min-width:400px)": {
    __pagination: {
      display: "flex",
      justifyContent: "center",
      bottom: "0",
      position: "fixed",
      width: "100%",
      left: "0",
      padding: "20px",
      backgroundColor: "#000",
    },
  },
}));
