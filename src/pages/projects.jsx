import {
  Box,
  Typography,
  Paper,
  Avatar,
  Chip,
  Stack,
  Collapse,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import projectdata from '../data/projects';

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, minHeight: '100vh' }}>
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
             Projects
           </Typography>
     

      <Timeline position="right" sx={{ ml: 0 }}>
        {projectdata.map((project, index) => (
          <TimelineItem key={index} sx={{ '&::before': { display: 'none' } }}>
            <TimelineSeparator sx={{ flexDirection: 'column', alignItems: 'center' }}>
              <TimelineDot
                sx={{
                  bgcolor: '#261FB3',
                  width: 14,
                  height: 14,
                  zIndex: 1,
                }}
              />
              {index !== projectdata.length - 1 && (
                <TimelineConnector
                  sx={{
                    bgcolor: '#261FB3',
                    width: 2,
                    height: '100%',
                    mt: 0,
                    mb: 0,
                  }}
                />
              )}
            </TimelineSeparator>

            <TimelineContent sx={{ py: 2, px: 3 }}>
              <Paper
                elevation={4}
                sx={{
                  p: { xs: 2, md: 4 },
                  maxWidth: 900,
                  mx: 'auto',
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  gap: 3,
                  background: 'radial-gradient(circle at center, hsl(233, 28.00%, 14.70%) 0%, rgb(47, 10, 114) 20%, #000 65%)',

                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 0 20px rgba(120, 134, 199, 0.3)',
                  },
                }}
              >
                <Avatar
                  variant="rounded"
                  src={project.imageUrl}
                  alt={project.title}
                  sx={{
                    width: { xs: '100%', md: 200 },
                    height: { xs: 120, md: 140 },
                    objectFit: 'cover',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      cursor: 'pointer',
                    },
                  }}
                />
                <Box flex={1}>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: '#D9EAFD' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#E5E1DA', mb: 1, fontWeight:'bold' }}>
                    {project.date}
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                      {project.description.map((line, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          sx={{ color: '#FFF', mb: 0.5 }}
                        >
                          {line}
                        </Typography>
                      ))}
                    </Box>


                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500, color: '#FFF' }}
                    >
                      Skills for project
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleToggle(index)}
                      sx={{ color: '#50727B' }}
                    >
                      {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </Stack>
                  <Collapse in={openIndex === index}>
                    <Stack direction="row" flexWrap="wrap" spacing={1} mt={1}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.1)',
                            color: '#fff',
                          }}
                        />
                      ))}
                    </Stack>
                  </Collapse>
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
