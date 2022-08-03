import { useState, useEffect } from 'react';
import './../../index.css'
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import { CircularBox, ContainerBox, useStyles } from './style';







export function CircularProgressWithLabel(props) {
    return (
        <CircularBox>
            <CircularProgress style={{color : "black"}} variant="determinate" thickness={2.5} size={100}{...props} />
            <ContainerBox>
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </ContainerBox>
        </CircularBox>
    );
}

function Home() {

    const styles = useStyles();


    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [topo, setTopo] = useState(0);

    function setTimer() {

        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }

    function getPageTopoAfterScroll() {
        setTopo(window.scrollY);
    }
    window.addEventListener('scroll', getPageTopoAfterScroll);

    console.log(window.scrollY);

    useEffect(() => {
        setTimer();
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 20));
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, [])


    return (
        <>
            {loading ? <CircularProgressWithLabel value={progress} /> : (

                <div className={styles.container}>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a psságina home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    <h1>Bem vindo a página home</h1>
                    {topo > 100 &&
                        <a className={styles.link} href='#'>&#9650; </a>
                    }
                </div>
            )
            }
        </>




    )
}

export default Home;