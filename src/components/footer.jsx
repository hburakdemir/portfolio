import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= fullHeight - 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        py: 3,
        px: 15,
        backgroundColor: 'transparent',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // satır taşması için
        gap: 2,           // elemanlar arasında boşluk

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '8rem',
          right: '8rem',
          borderTop: '1px solid #ccc',
          zIndex: 0,
        },

        // Responsive düzenleme
        '@media (max-width: 600px)': {
          flexDirection: 'column',
          alignItems: 'center',
          px: 5,

          '&::before': {
            left: '1rem',
            right: '1rem',
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          position: 'relative',
          zIndex: 1,
          flex: '1 1 auto',

          '@media (max-width: 600px)': {
            justifyContent: 'center',
            mb: 1,
          },
        }}
      >
        <CopyrightIcon
          fontSize="medium"
          sx={{
            color: 'white',
          }}
        />

        <Typography
          variant="h6"
          sx={{
            userSelect: 'text',
            color: 'white',
            fontSize: '15px',
          }}
        >
          2025 Hakan Burak DEMİR. All rights reserved.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 3,
          position: 'relative',
          zIndex: 1,
          flex: '1 1 auto',
          justifyContent: 'flex-end',

          '@media (max-width: 600px)': {
            justifyContent: 'center',
            width: '100%',
            gap: 2,
          },
        }}
      >
        <IconButton
          aria-label="GitHub"
          component="a"
          href="https://github.com/hburakdemir"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'white',
            padding: '6px',
            '& svg': { fontSize: '26px' },
            '&:hover': {
              color: '#FFD700',
              filter: 'drop-shadow(0 0 6px #FFD700) drop-shadow(0 0 10px #FFD700)',
            },
          }}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          aria-label="LinkedIn"
          component="a"
          href="https://www.linkedin.com/in/hburakdmr"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: 'white',
            padding: '6px',
            '& svg': { fontSize: '26px' },
            '&:hover': {
              color: '#0a84ff',
              filter: 'drop-shadow(0 0 6px #0a84ff) drop-shadow(0 0 10px #0a84ff)',
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          aria-label="Email"
          component="a"
          href="mailto:burakd279@gmail.com"
          sx={{
            color: 'white',
            padding: '6px',
            '& svg': { fontSize: '26px' },
            '&:hover': {
              color: '#FFD700',
              filter: 'drop-shadow(0 0 6px #FFD700) drop-shadow(0 0 10px #FFD700)',
            },
          }}
        >
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
