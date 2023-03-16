import React, { Component } from 'react'
import Header from '../component/Header'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DeveloperModeRoundedIcon from '@mui/icons-material/DeveloperModeRounded';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

import SnippetLogo  from "../../../images/snippet-library.png"
import "./LandingPage.css" 
import { fontSize } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#101728',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#000"),
    backgroundColor: "#260E69",
    '&:hover': {
      backgroundColor: "#9340FF",
    },
  }));

export default class LandingPage extends Component {
  render() {
    return (
      <div class="lp-root" style={{backgroundColor:"#101728"}}>
        <Container maxHeight="xl">
        
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
              paddingTop:"20px",
              fontSize:"22px"
            }}
          >
            <Avatar sx={{ bgcolor: "#101728"}} variant="rounded">
            <DeveloperModeRoundedIcon />
        </Avatar>
            Snappit
          </Typography>

        <Grid container spacing={2}>
            <Grid item xs={6} style={{marginBottom:"20px"}}>
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
              padding: "15px",
              marginTop:"30px",
              fontSize:"65px",
              justifyContent:"center"
            }}
          >
            Store <br/> Share <br/> Access <br/>
            Anywhere 
          </Typography>
          <ColorButton variant="contained">Learn More</ColorButton>
            </Grid>
            <Grid item xs={6}>
                    <img alt="logo" src={SnippetLogo} height="550px" width="450px"/>
            </Grid>

            <Grid item xs={12}>
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
              padding: "15px",
              marginTop:"30px",
              fontSize:"65px",
              justifyContent:"center",
              wordWrap: "break-word"
            }}
          >
           Snappit is Open source software 
          </Typography>

          <Typography
          variant="h1"
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
            padding: "15px",
            marginTop:"30px",
            fontSize:"45px",
            justifyContent:"center",
            wordWrap: "break-word"
          }}>
          for securely storing code snippet and sharing it within team. 
          </Typography>
            </Grid>
        </Grid>
    
        </Container>
    </div>
    )
  }
}
