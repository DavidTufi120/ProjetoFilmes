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

  __pagination: {
    display: "flex",
    justifyContent: "center",
    bottom: "0",
    marginTop: "10%",
    position: "fixed",
    width: "100%",
    left: "0",
    padding: "20px",
    backgroundColor: "#000",
  },
}));
