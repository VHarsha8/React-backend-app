// ExampleComponent.js
import React from 'react';
import Button from '@mui/material/Button';
import { Container, Box,Typography, Paper } from '@mui/material';

const ExampleComponent = () => {
  return (
    <Container sx={{bgcolor: 'tomato', height:'100vh', p:10,display:"flex", gap:"30px",alignContent:"center",justifyContent:"center", sm:"flex-col"}}>

        <Box sx={{display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"center",}}>   
                <Typography variant='h1'> Welcome</Typography>
                <Paper sx={{bgcolor:'orange', borderRadius:'50%', width:'300px',height:"300px", p:10,display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"cenetr"}}>
                <Button sx={{bgcolor:"greenyellow"}}>Click now!</Button> 
                </Paper>

        </Box>
       <Box sx={{bgcolor:'blue', width:'50%', p:1,display:'flex',  borderRadius:"40px", justifyContent:"center", alignItems:"center"}}>
                <Typography variant='h3' color='white'>I am Harshavardhan</Typography>
                
        </Box>
    </Container>

    
  );
}; 

export default ExampleComponent;
