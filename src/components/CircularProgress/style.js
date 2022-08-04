import { styled } from "@material-ui/styles"
import Box from '@mui/material/Box';

export const CircularBox = styled(Box)({
    position: 'relative',
    display: 'flex',
    marginTop: '20%',
    justifyContent: 'center',
    fontSize: '30px',
})

export const ContainerBox = styled(Box)({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    fontSize: '30px',

   '& .css-ol7wxs-MuiTypography-root' : {
    fontSize: '30px',
   }
})
