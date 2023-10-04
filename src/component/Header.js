import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SnappitIcon from '../images/snappit-icon.png';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';



//const pages = ['Analytics', 'About us', 'Home'];

const pages = {
  analytics: 'Analytics',
  aboutus: 'About us',
  dashboard:'Home'
}


function Header() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (e) => {
    console.log("Menu clicked"+ e.currentTarget)

    setAnchorElNav(null);
  };

  return (
    <Container className = 'hdr-root' style={{ backgroundColor: "#101728" }} maxWidth="xl" >
      <Box sx={{ display: { xs: 'none', md: 'flex' }, marginTop:'10px' }}>
        <div className="hdr-title" style={{display:'flex', flexDirection: 'row' }}>

          <img className='hdr-logo' alt="logo" src={SnappitIcon} height="30px" width="35px" onClick={() => window.location.href = "/"} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#fff',
              textDecoration: 'none',
              fontSize: "22px",
              paddingLeft: "10px",
              marginTop: "auto",
              marginBottom: "auto"

            }}
          >
            Snappit
          </Typography>
        </div>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Object.keys(pages).map((page) => (
                <MenuItem key={pages[page]} onClick={handleCloseNavMenu}>
                  <Typography href={"/"+page} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Snappit
          </Typography>
          <Box sx={{ flexGrow: 1, flexDirection: "row-reverse", marginRight:"50px", display: { xs: 'none', md: 'flex' } }}>
            {Object.keys(pages).map((page) => (
              <Button
                key={page}
                onClick={()=> window.location.href = "/"+page}
                sx={{ my: 2, color: 'white', display: 'block', margin:'5px' }}
              >
                {pages[page]}
              </Button>
            ))}
          </Box>
      </Box>
    </Container>
  );
}
export default Header;