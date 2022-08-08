import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import CircularProgressWithLabel from '../../components/CircularProgress/CircularProgress';
import api from '../../services/api'
import Error from '../Error';
import {Container, useStyles } from './style';


function Filme() {

    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [progress, setProgress] = useState(5);
    const [loading, setLoading] = useState(true);
    const [topo, setTopo] = useState(0);

    const navigate = useNavigate();


    function getPageTopoAfterScroll() {
        setTopo(window.scrollY);
    }

    window.addEventListener('scroll', getPageTopoAfterScroll);

    const styles = useStyles();

    async function setTimer() {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
        const timer = setInterval(() => {
            setProgress((prevProgress) => prevProgress >= 100 ? 0 : prevProgress + 5);
        }, 250);
        return () => {
            clearInterval(timer);

        };
    }

    async function loadFilme() {
        await api.get(`/movie/${id}`, {
            params: {
                api_key: "e7106c79a96105a90f0789f2be00d9de",
                language: "pt-BR",
            }
        })
            .then((response) => {
                setTimer()
                setFilme(response.data)

            })
            .catch(() => {
                setLoading(false);
                navigate("*");
            })
    }

    useEffect(() => {

        loadFilme();

    }, [])



    return (
        <>

            {loading ? <CircularProgressWithLabel value={progress} /> : (

                <Container>
                    <Typography variant='h2'>{filme.title}</Typography>
                    <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                    <Typography variant='h4'>Sinopse</Typography>
                    <Box component="span">{filme.overview}</Box>

                    <Typography variant='h6'>Avaliação:  {(filme.vote_average.toFixed(1))} / 10</Typography>
                    <div className={styles.__area_buttons}>
                        <Button>Salvar</Button>
                        <Button href="#" style={{ backgroundColor: '#8B0000', color: '#FFF' }}>Trailer</Button>
                    </div>
                </Container>
            )
            }
            {topo > 100 &&
                <a className={styles.__link} href='#'>&#9650; </a>
            }
        </>
    )
}

export default Filme;