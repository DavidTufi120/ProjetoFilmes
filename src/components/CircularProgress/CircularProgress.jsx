import { CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { CircularBox, ContainerBox } from './style';


export default function CircularProgressWithLabel(props) {
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