import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DeveloperModeRoundedIcon from '@mui/icons-material/DeveloperModeRounded';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';

import SnippetLogo from "../../../images/snippet-library.png"
import "./LandingPage.css"

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
            <div class="lp-root" style={{ backgroundColor: "#101728" }}>
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
                            paddingTop: "20px",
                            fontSize: "22px"
                        }}
                    >
                        <Avatar sx={{ bgcolor: "#101728" }} variant="rounded">
                            <DeveloperModeRoundedIcon />
                        </Avatar>
                        Snappit
                    </Typography>


                    <Grid container spacing={2}>
                        <Grid item xs={6} style={{ marginBottom: "20px" }}>
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
                                    marginTop: "30px",
                                    fontSize: "65px",
                                    justifyContent: "center"
                                }}
                            >
                                Store <br /> Share <br /> Access <br />
                                Anywhere
                            </Typography>
                            <ColorButton variant="contained">Get Started</ColorButton>
                        </Grid>
                        <Grid item xs={6}>
                            <img alt="logo" src={SnippetLogo} height="550px" width="450px" />
                        </Grid>

                        <Grid item xs={12} style={{ marginBottom: "20px" }}>
                            <Typography
                                variant="h1"
                                component="h2"
                                align="center"
                                style={{
                                    wordWrap: "break-word",
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#9340FF',
                                    textDecoration: 'none',
                                    padding: "15px",
                                    marginTop: "30px",
                                    fontSize: "45px"
                                }}
                            >
                                Snappit is Open source software
                            </Typography>

                            <Typography
                                variant="h1"
                                component="h2"
                                align="center"
                                style={{
                                    wordWrap: "break-word",
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    padding: "15px",
                                    marginTop: "30px",
                                    fontSize: "45px"
                                }}
                            >
                                for securely storing code snippet and sharing it within team.
                            </Typography>
                        </Grid>
                        <Grid item xs={10} style={{ marginBottom: "20px" }}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Avatar xs={2} sx={{ bgcolor: "#101728" }}  >
                            <TwitterIcon />
                        </Avatar>
                        <Avatar xs={2} sx={{ bgcolor: "#101728" }}  >
                            <LinkedInIcon />
                        </Avatar>
                        </Box>
                        </Grid>
                    </Grid>
                    
                </Container>
            </div>
        )
    }
}
