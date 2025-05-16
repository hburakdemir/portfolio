import React, { useState,useEffect   } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-scroll'; 

// import About from '../pages/about';
// import Experience from '../pages/experience';
// import Skills from '../pages/skills';
// import Education from '../pages/education';
// import Contact from '../pages/contact';

const menuItems = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScroll = () => {
    setScrolled(window.scrollY > 10); // scroll 10px'i geçerse
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{
        width: 250,
        backgroundImage: 'linear-gradient(45deg, rgb(10, 25, 143), rgb(11, 31, 53))',
        height: '100%',
        paddingTop: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((text) => (
          <Link
    key={text}
    to={text.toLowerCase()}
    smooth={true}
    duration={500}
    offset={-80}
    onClick={toggleDrawer(false)} // drawer'ı kapat
  >
    <ListItem button>
      <ListItemText
        primary={text}
        sx={{
          textAlign: 'left',
          paddingLeft: 2,
          color: '#fff',
        }}
      />
    </ListItem>
  </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar
  position="fixed"
  elevation={!isMobile && scrolled ? 4 : 0}
  sx={{
    transition: '0.3s ease-in-out',
    backgroundImage: !isMobile && scrolled
      ? 'linear-gradient(45deg, rgb(10, 25, 143), rgb(11, 31, 53))'
      : 'none',
    backgroundColor: !isMobile && scrolled ? 'rgba(10, 25, 143, 0.9)' : 'transparent',
    boxShadow: !isMobile && scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
    backdropFilter: !isMobile && scrolled ? 'blur(4px)' : 'none',
  }}
>

  <Toolbar
    sx={{
      position: 'relative',
      justifyContent: 'space-between',
      height: 80,
    }}
  >
    {isMobile ? (
      <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
    ) : (
      <Box sx={{ width: 48 }} />
    )}

    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 10,
      }}
    >
      {!isMobile &&
        menuItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="active"
          >
            <Button
              color="inherit"
              sx={{
                fontSize: 16,
                fontFamily: '"Segoe UI", sans-serif',
                fontWeight: 'bold',
                textTransform: 'none',
                color: '#fff',
              }}
            >
              {item}
            </Button>
          </Link>
        ))}
    </Box>
  </Toolbar>
</AppBar>


      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>

      
    </div>
  );
};

export default Navbar;
