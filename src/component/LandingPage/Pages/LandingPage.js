import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';

import SnappitLogo from "../../../images/snappit-library.png"
import SnappitIcon from "../../../images/snappit-icon.png"
import SnappitSaveIcon from "../../../images/snappit-save-code.jpg"
import SnappitShareIcon from "../../../images/snappit-share-code.jpg"
import SnappitAccessIcon from "../../../images/snappit-access.jpg"

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
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{ paddingTop: "20px", }}>
                        <img xs="2" alt="logo" src={SnappitIcon} height="30px" width="35px" />

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            xs="2"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#fff',
                                textDecoration: 'none',
                                fontSize: "22px",
                                paddingLeft: "5px"
                            }}
                        >

                            Snappit
                        </Typography>
                    </Box>


                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} style={{ marginBottom: "20px" }}>
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
                                Anytime
                            </Typography>
                            <ColorButton variant="contained">Get Started</ColorButton>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <img alt="logo" src={SnappitLogo} height="550px" width="450px" />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} style={{ marginBottom: "100px" }}>
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
                                    fontSize: "48px"
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
                                    fontSize: "28px"
                                }}
                            >
                                for securely storing code snippet and share it privately within your team members. 
                                Providing advantages of accessing it anytime and anywhere.
                            </Typography>
                        </Grid>

                        {/* Store section */}
                        <Grid item xs={12} sm={12} md={6} style={{ marginBottom: "80px", marginTop: "30px" }}>
                            <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#9340FF',
                                    textDecoration: 'none',
                                    padding: "15px",
                                    fontSize: "48px",
                                    justifyContent: "center"
                                }}
                            >
                                Store code snippet
                            </Typography>

                            <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    wordWrap: "break-word",
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    padding: "15px",
                                    fontSize: "18px"
                                }}
                            >
                                Use Snappit to create code snippet and store it in library. You can also create private snappet which will be shared only within your team.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} style={{ marginBottom: "80px", marginTop: "70px" }}>
                            <img alt="logo" src={SnappitSaveIcon} height="500px" width="450px" />
                        </Grid>

                        {/* Share section */}
                        <Grid item xs={12} sm={12} md={6} style={{ marginBottom: "80px", marginTop: "70px" }}>
                            <img alt="logo" src={SnappitShareIcon} height="500px" width="450px" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} style={{ marginBottom: "80px", marginTop: "30px" }}>
                            <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#9340FF',
                                    textDecoration: 'none',
                                    padding: "15px",
                                    fontSize: "48px",
                                    justifyContent: "center"
                                }}
                            >
                                Share code snippet
                            </Typography>

                            <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    wordWrap: "break-word",
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    padding: "15px",
                                    fontSize: "18px"
                                }}
                            >
                                Snappit allows you to privately share code snippet with your team.
                            </Typography>
                        </Grid>
                        

                        {/* Access section */}
                        <Grid item xs={12} sm={12} md={12} style={{ marginBottom: "80px", marginTop: "30px" }}>
                            <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#9340FF',
                                    textDecoration: 'none',
                                    padding: "15px",
                                    fontSize: "48px",
                                    justifyContent: "center"
                                }}
                            >
                                Access code snippet anytime
                            </Typography>

                            <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    wordWrap: "break-word",
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    padding: "15px",
                                    fontSize: "18px"
                                }}
                            >
                                Snappit makes it easier to access your code snippet anytime and anywhere.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ marginBottom: "80px", marginTop: "20px" }}>
                            <img alt="logo" src={SnappitAccessIcon} height="400px" width="600px" />
                        </Grid>

                        {/* Bottom section */}
                        <Grid item xs={12} sm={12} md={10} style={{ marginBottom: "20px" }}>
                        <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#9340FF',
                                    textDecoration: 'none',
                                    padding: "15px",
                                    fontSize: "48px",
                                    justifyContent: "center"
                                }}
                            >
                                Connect
                            </Typography>

                            <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{ justifyContent: "center" }}>
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
