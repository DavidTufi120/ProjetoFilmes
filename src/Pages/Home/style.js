import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/styles';



export const Container = styled.div`
      display: flex;
    
    @media(max-width: 400px){
      display: flex;
      margin-top: 5%;
    }  
    
    @media(min-width: 501px){
      
      margin-top: 5%;
      width: 100%;
      text-align: center;
    }
`;

export const useStyles = makeStyles({

  __link: {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    position: 'fixed',
    bottom: '25%',
    right: '10%',
    textDecoration: 'none',
    borderRadius: '30px',
    fontSize: '20px',
  },

  __listaFilmes: {
    width: '100%',
    margin: '14px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& article': {

      padding: '15px',
      borderRadius: '4px',
    },

    '& img': {

      maxWidth: '50%',


    },

    '& h6': {
      marginBottom: '14px',
      display: 'block',
    },
  },

  "@media(min-width: 300px) and (max-width: 999px)": {
    __link: {
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      position: 'fixed',
      bottom: '20%',
      right: '10%',
      textDecoration: 'none',
      borderRadius: '30px',
      fontSize: '20px',
    },

    __listaFilmes: {
      maxWidth: '80%',


      '& article': {
        width: '100%',
        padding: '15px',
        borderRadius: '4px',
        backgroundColor: 'lightGray',
        margin: '10px',
      },

      '& img': {

        width: '100%',
        maxWidth: '100%',
        maxHeight: '340px',
        objectFit: 'cover',
        display: 'block',
        borderRadius: '8px 8px 0 0',


      },

      '& h6': {
        marginBottom: '14px',
        display: 'block',
      },

      '& a': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 0',
        fontSize: '18px',
        backgroundColor: '#8B0000',
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: '#FFF',
        borderRadius: '0 0 8px 8px',
      },
    },

  },


  

  "@media(min-width: 1000px)": {
    __link: {
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      position: 'fixed',
      bottom: '15%',
      right: '10%',
      textDecoration: 'none',
      borderRadius: '35px',
      fontSize: '30px',
    },

    __listaFilmes: {
      maxWidth: '800px',
      margin: '14px auto',

      '& article': {
        width: '100%',
        padding: '15px',
        borderRadius: '4px',
        backgroundColor: 'lightGray',
        margin: '10px',
      },

      '& img': {

        width: '100%',
        maxWidth: '100%',
        maxHeight: '340px',
        objectFit: 'cover',
        display: 'block',
        borderRadius: '8px 8px 0 0',


      },

      '& h6': {
        marginBottom: '14px',
        display: 'block',
      },

      '& a': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 0',
        fontSize: '18px',
        backgroundColor: '#8B0000',
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: '#FFF',
        borderRadius: '0 0 8px 8px',

      },
    },

  },

})