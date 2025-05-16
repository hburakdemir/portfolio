import React from 'react';
import { Box, Typography, Paper, Grid, Avatar } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        height: '100vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 4,
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        
{/* Sol taraf: Yazılar */}
<Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'center' }}>
  <Typography
    variant="h3"
    sx={{
      fontFamily: '"Segoe UI", sans-serif',
      fontWeight: 'bold',
      mb: 2,
      ml: { xs: 0, xl: -62 },
      color: '#F6F8D5'
      
    }}
  >
    Hakan Burak DEMİR
  </Typography>

  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: { xs: 'center', xl: 'flex-start' },
      gap: 2,
    }}
  >
    {/* İlk kutu */}
    <Paper
      elevation={3}
      sx={{
        bgcolor: '#003161',
        px: 3,
        py: 1,
        borderRadius: 2,
        ml: { xs: 0, xl: -40 },
        transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)', }
        
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: '#FEBA17',
          fontWeight: 'bold',
          fontFamily: '"Segoe UI", sans-serif',

        }}
      >
        Jr. Fullstack Developer
      </Typography>
    </Paper>

    {/* İkinci kutu */}
    <Paper
      elevation={3}
      sx={{
        bgcolor: '#002244',
        px: 3,
        py: 5.5,
        borderRadius: 2,
        ml: { xs: 0, xl: -40 },
        transition: 'transform 0.3s ease',
                  '&:hover': {
         transform: 'scale(1.05)',
        
        
      
      }
                    
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: 20,
          textAlign:'center',
          color: '#FEBA17',
          fontFamily: '"Segoe UI", sans-serif',
          
        }}
      >
        Fresh graduate and passionate about fullstack web development
      </Typography>
    </Paper>
  </Box>
</Grid>


        {/* Sağ taraf: Responsive resim */}
        <Grid item xs={12} md={6} textAlign="center">
          <Avatar
            src="/pp.jpg"
            alt="profile picture"
            sx={{
              width: { xs: 200, sm: 300, md: 450 },
              height: { xs: 200, sm: 300, md: 450 },
              borderRadius: '50%',
              border: '6px solid #fff',
               transform: {
                  xs: 'none',
                  xl: 'translateX(3in)', },
              
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
