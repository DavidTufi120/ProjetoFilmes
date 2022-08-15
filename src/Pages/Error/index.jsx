import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles";
import { useStyles } from "./styles";

function Error() {
  const styles = useStyles();

  return (
    <div className={styles.__error}>
      <img src={require("./../../assets/error404.png")} alt="Error 404" />
      <Typography variant="h1">ERROR 404</Typography>
      <Typography variant="h2">Página não encontrada</Typography>
      <Typography variant="h3">
        Verifique a URL digitada ou clique abaixo para ver todos os filmes !
      </Typography>
      <Link to="/">Veja todos os filmes!</Link>
    </div>
  );
}

export default Error;
