import React from "react";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider } from "@mui/material/styles";
import { theme, useStyles } from "./style";

const AddPagination = ({ setPage, pageNumber, page }) => {
  const classes = useStyles();

  const handleChange = async (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Pagination
          onChange={(e, page) => handleChange(page)}
          className={classes.__pagination}
          variant="outlined"
          classes={{ root: classes.root }}
          color="primary"
          count={pageNumber}
        />
      </div>
    </ThemeProvider>
  );
};

export default AddPagination;
