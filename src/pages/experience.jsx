import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  IconButton,

} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import experienceData from '../data/experience';


const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = experienceData;


  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <Box
      id="experience"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      <Typography
        variant='h3'
        sx={{
          fontFamily: '"Segoe UI", sans-serif',
          fontWeight: 'bold',
          color: '#F6F8D5',
          mb: 6,
          textAlign: 'center',
          fontSize: { xs: 16, sm: 18, md:20, lg:24, xl:44 },
        }}
      >
        Professional Experience
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <IconButton onClick={handlePrev}>
          <ChevronLeftIcon sx={{ fontSize: 48, color: '#F6F8D5' }} />
        </IconButton>

        <Paper
              elevation={6}
              sx={{
                width: '100%',
                maxWidth: { xs: '90%', sm: '95%', md: 800 },
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                backgroundColor: '#002244',
                color: '#F6F8D5',
                transition: 'all 0.5s ease',
                minHeight: 300,
              }}
            >

          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} sm={6} display="flex" alignItems="center">
              <WorkIcon sx={{ mr: 1, fontSize: 28 }} />
              <Typography variant="h6" fontWeight="bold">
                {data[activeIndex].title}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} display="flex" alignItems="center">
              <CalendarMonthIcon sx={{ mr: 1, fontSize: 24 }} />
              <Typography variant="body1" sx={{ fontSize: 16 }}>
                {data[activeIndex].date}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={2} display="flex" alignItems="center">
            <LocationOnIcon sx={{ mr: 1, fontSize: 22 }} />
            <Typography variant="body1" sx={{ fontSize: 16 }}>
              {data[activeIndex].location}
            </Typography>
          </Box>

          <Box mt={3}>
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
              {data[activeIndex].description.map((item, i) => (
                <li key={i} style={{ marginBottom: '12px' }}>
                  <Typography variant="body1" sx={{
                     fontSize: { xs: 11, sm: 14, md: 14, lg:14, xl:20  } 
                     }}>
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Paper>

        <IconButton onClick={handleNext}>
          <ChevronRightIcon sx={{ fontSize: 48, color: '#F6F8D5' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Experience;
