import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { Container } from "./style";

function Favorites() {
  const [filmes, setFilmes] = useState([]);

  function handleDeleteMovie(id) {
    let MovieFilter = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(MovieFilter);
    localStorage.setItem("@cinepipoca", JSON.stringify(MovieFilter));
  }

  useEffect(() => {
    const minhaLista = localStorage.getItem("@cinepipoca");
    setFilmes(JSON.parse(minhaLista));
  }, []);

  return (
    <Container>
      {filmes.length > 0 ? (
        <Typography variant="h2">Meus filmes</Typography>
      ) : (
        <Typography variant="h2">Você não possui nenhum filme salvo</Typography>
      )}
      <ul>
        {filmes.map((item) => {
          return (
            <li key="id">
              <Typography variant="h4">{item.title}</Typography>
              <div>
                <Button href={`/filme/${item.id}`} endIcon={<InfoIcon />}>
                  Ver Detalhes
                </Button>
                <Button
                  onClick={() => handleDeleteMovie(item.id)}
                  endIcon={<DeleteIcon />}
                >
                  Excluir
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default Favorites;
