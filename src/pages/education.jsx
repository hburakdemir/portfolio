import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 8,
        px: 2,
        pt:'2in',
        bgcolor: 'transparent',
        position: 'relative',  
        zIndex: 1,             
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center',
          userSelect: 'none',
          fontSize: { xs: 24, sm: 32, md: 36, lg: 40, xl: 48 },
          zIndex: 10,
          position: 'relative',
        }}
      >
        Education
      </Typography>

      <Paper
        elevation={8}
        sx={{
          p: 4,
          borderRadius: 3,
          maxWidth: 700,
          width: '100%',
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            cursor: 'pointer',
          },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* İçerik */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SchoolIcon sx={{ fontSize: 48 }} />
            <Typography variant="h5" component="h3" sx={{ m: 0 }}>
              Hacettepe University
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarTodayIcon sx={{ fontSize: 32 }} />
            <Typography sx={{ fontSize: '1.2rem' }}>
              September 2020 - February 2025
            </Typography>
          </Box>
        </Box>

        <Typography sx={{ fontSize: '1.2rem' }}>
          Bachelor's Degree, Computer and Instructional Technology Education
        </Typography>
      </Paper>
    </Box>
  );
};

export default Education;
