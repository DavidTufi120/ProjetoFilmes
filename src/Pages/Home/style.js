import { makeStyles, styled } from '@material-ui/styles';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import { borderRadius, minWidth } from '@mui/system';

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

export const useStyles = makeStyles({

"@media(max-width: 400px)":{
  link: {
    backgroundColor: 'black',
    color: 'white',
    padding : '20px',
    position: 'fixed',
    bottom: '25%',
    right: '10%',
    textDecoration: 'none',
    borderRadius: '30px',
    fontSize: '20px',
  }
},


"@media(min-width: 401px) and (max-width: 500px)":{
    link: {
      backgroundColor: 'black',
      color: 'white',
      padding : '20px',
      position: 'fixed',
      bottom: '20%',
      right: '10%',
      textDecoration: 'none',
      borderRadius: '30px',
      fontSize: '20px',
    }
  },


  "@media(min-width: 501px)":{
    link: {
      backgroundColor: 'black',
      color: 'white',
      padding : '20px',
      position: 'fixed',
      bottom: '15%',
      right: '10%',
      textDecoration: 'none',
      borderRadius: '35px',
      fontSize: '30px',
    },

    container: {
        marginTop: '5%',
        width: '100%',
        textAlign: 'center',
    }
  }


})