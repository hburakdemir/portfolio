import React from 'react';
import { Box, Typography, IconButton, Button, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const Contact = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/hakanburakdemircv.pdf'; 
    link.download = 'hakanburakdemircv.pdf';
    link.click();
  };

  const neonIconStyle = {
    color: '#dcdcff',
    filter: 'drop-shadow(0 0 6px #d580ff) drop-shadow(0 0 10px #bb66ff)',
    transition: 'filter 0.3s ease',
    '&:hover': {
      filter: 'drop-shadow(0 0 12px #eeaaff) drop-shadow(0 0 20px #ffbbff)',
      cursor: 'pointer',
    },
  };

  return (
    <Box
      id="contact"
      sx={{

        py: 6,
        px: 2,
        bgcolor: 'transparent',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Typography variant="h3"
       sx={{
        fontWeight: 'bold',
        fontSize: { xs: 24, sm: 32, md: 36, lg: 40, xl: 48 },

          }}>
        Contact
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 6,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Tooltip title="GitHub">
          <IconButton
            aria-label="github"
            onClick={() => window.open('https://github.com/hburakdemir', '_blank')}
            sx={{ p: 1 }}
          >
            <GitHubIcon sx={{ fontSize: 50, ...neonIconStyle }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <IconButton
            aria-label="linkedin"
            onClick={() => window.open('https://www.linkedin.com/in/hburakdmr', '_blank')}
            sx={{ p: 1 }}
          >
            <LinkedInIcon sx={{ fontSize: 50, ...neonIconStyle }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Send Email">
          <IconButton
            aria-label="email"
            onClick={() => window.open('mailto:burakd279@gmail.com')}
            sx={{ p: 1 }}
          >
            <EmailIcon sx={{ fontSize: 50, ...neonIconStyle }} />
          </IconButton>
        </Tooltip>
      </Box>

      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        onClick={handleResumeDownload}
        sx={{
          px: 5,
          py: 1.5,
          fontSize: '1.1rem',
          fontWeight: 'bold',
          textTransform: 'none',
          borderRadius: 3,
          backgroundColor: '#6a0dad',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#8a2be2',
            boxShadow: 'none',
          },
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Contact;
