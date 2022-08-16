import { useState, useEffect } from "react";
import "./../../index.css";
import * as React from "react";
import { Container, useStyles } from "./style";
import CircularProgressWithLabel from "../../components/CircularProgress/CircularProgress";
import api from "./../../services/api";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AddPagination from "../../components/Pagination/AddPagination";

function Home() {
  const styles = useStyles();
  const [filmes, setFilmes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [topo, setTopo] = useState(0);

  function setTimer() {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }

  const loadFilmes = async () => {
    const { data } = await api.get("movie/now_playing", {
      params: {
        api_key: "e7106c79a96105a90f0789f2be00d9de",
        language: "pt-BR",
        page: page,
      },
    });
    setFilmes(data?.results);
    setTimer();
    setPageNumber(data?.total_pages);
  };
  function getPageTopoAfterScroll() {
    setTopo(window.scrollY);
  }

  window.addEventListener("scroll", getPageTopoAfterScroll);

  useEffect(() => {
    loadFilmes();
  }, [page]);
  return (
    <>
      {loading ? (
        <CircularProgressWithLabel value={progress} />
      ) : (
        <Container>
          <div className={styles.__listaFilmes}>
            {filmes.map((filme) => {
              return (
                <article key={filme.id}>
                  <Typography variant="h6" textAlign="">
                    {filme.title}
                  </Typography>
                  <img
                    className={styles.__img}
                    src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                    alt={filme.title}
                  />
                  <Link to={`/filme/${filme.id}`}>Acessar</Link>
                </article>
              );
            })}
            <AddPagination
              setPage={setPage}
              pageNumber={pageNumber}
              page={page}
            />
          </div>

          {topo > 100 && (
            <a className={styles.__link} href="#">
              &#9650;{" "}
            </a>
          )}
        </Container>
      )}
    </>
  );
}

export default Home;
