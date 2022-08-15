import React from "react";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider } from "@mui/material/styles";
import { theme, useStyles } from "./style";
import { Stack } from "@mui/material";

const AddPagination = ({ setPage, pageNumber }) => {
  const classes = useStyles();

  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Stack spacing={8}>
          <Pagination
            onChange={(e) => handleChange(e.target.textContent)}
            className={classes.__pagination}
            variant="outlined"
            classes={{ root: classes.root }}
            color="primary"
            count={pageNumber}
          />
        </Stack>
      </div>
    </ThemeProvider>
  );
};

export default AddPagination;
