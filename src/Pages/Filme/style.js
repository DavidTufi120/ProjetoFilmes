import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/styles';

export const Container = styled.div`
      margin: 0 auto;
      flex-direction: column;
      display: flex;
      max-width: 800px;
      padding: 24px;
     
      
      img{
      width: 800px;
      max-width: 100%;
      max-height: 340px;
      object-fit: cover;
     
      }

      h4{
        margin: 10px 0;
      }

      h6{
        margin: 20px 0;

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

  __area_buttons: {
    marginLeft: '14px',  
    outline : 'none',
    justifyContent: 'center',
    display: 'flex',

   '& Button' : {
      
      margin: '0 8px 0 0',
      color: "#FFF",
      backgroundColor: "#8B0000",

      '&:hover':{
        color: '#FFF',
        backgroundColor: "#8B0000"
      }
    },
 },
})