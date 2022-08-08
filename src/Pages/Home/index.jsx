import { useState, useEffect } from 'react';
import './../../index.css'
import * as React from 'react';
import { Container, useStyles } from './style';
import CircularProgressWithLabel from '../../components/CircularProgress/CircularProgress';
import api from './../../services/api'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

//URL da Api: /movie/now_playing?api_key=e7106c79a96105a90f0789f2be00d9de

function Home() {

    const styles = useStyles();


    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [topo, setTopo] = useState(0);
    const [filmes, setFilmes] = useState([]);

    function setTimer() {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
        const timer = setInterval(() => {
            setProgress((prevProgress) => prevProgress >= 100 ? 10 : prevProgress + 10);
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }

    async function loadFilmes() {
        const response = await api.get("movie/now_playing", {
            params: {
                api_key: "e7106c79a96105a90f0789f2be00d9de",
                language: "pt-BR",
                page: 1,
            },
        })
        setFilmes(response.data.results.slice(0, 10));
        setTimer();
    }
    function getPageTopoAfterScroll() {
        setTopo(window.scrollY);
    }

    window.addEventListener('scroll', getPageTopoAfterScroll);

    useEffect(() => {
        loadFilmes();
    }, [])


    return (
        <>
            {loading ? <CircularProgressWithLabel value={progress} /> : (

                <Container>
                    <div className={styles.__listaFilmes}>
                        {filmes.map((filme) => {
                            return (

                                <article key={filme.id}>
                                    <Typography variant='h6' textAlign=''>{filme.title}</Typography>
                                    <img className={styles.__img} src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                                    <Link to={`/filme/${filme.id}`}>Acessar</Link>
                                </article>
                            )
                        })}
                    </div>

                    {topo > 100 &&
                        <a className={styles.__link} href='#'>&#9650; </a>
                    }
                </Container>
            )
            }
        </>




    )
}

export default Home;