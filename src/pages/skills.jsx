import { Box, Tooltip, Typography } from '@mui/material';
import skillsData from '../data/skills'
import Footer from '../components/footer';


const Skills = () => {
  

  const skills = skillsData;



  const rows = [
    [0],
    [1, 2],
    [3, 4, 5],
    [6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15],
  ];

  return (
    <Box
      id="skills"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
       
      }}
    >
     

      <Typography
        variant='h3'
        gutterBottom
        sx={{
           color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            zIndex: 1,
            fontSize: { xs: 16, sm: 18, md:20, lg:24, xl:44 },
          }}
      >
        Skills
      </Typography>

      {/* Skill Piramidi */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, md: 3 },
          alignItems: 'center',
          mt: 4,
          zIndex: 1,
        }}
      >
        {rows.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 1.5, sm: 2.5, md: 3 },
              width: '100%',
              maxWidth: 800,
            }}
          >
            {row.map((skillIndex) => (
              <Tooltip
                key={skills[skillIndex].name}
                title={skills[skillIndex].desc}
                arrow
                placement="top"
              >
                <Box
                  sx={{
                    width: { xs: 60, sm: 70, md: 80 },
                    height: { xs: 60, sm: 70, md: 80 },
                    bgcolor: '#00000099',
                    color: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: 28, sm: 32, md: 36 },
                    fontWeight: 'bold',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    position: 'relative',
                    '&:hover .icon': {
                      opacity: 0,
                    },
                    '&:hover .skillName': {
                      opacity: 1,
                      pointerEvents: 'auto',
                    },
                  }}
                >
                  <Box
                    className="icon"
                    sx={{
                      pointerEvents: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      transition: 'opacity 0.3s',
                      fontSize: { xs: 28, sm: 32, md: 36 },
                    }}
                  >
                    {skills[skillIndex].icon}
                  </Box>
                  <Box
                    className="skillName"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      pointerEvents: 'none',
                      transition: 'opacity 0.3s',
                      fontSize: { xs: 12, sm: 14, md: 16 },
                      fontWeight: 'bold',
                    }}
                  >
                    {skills[skillIndex].name}
                  </Box>
                </Box>
              </Tooltip>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
