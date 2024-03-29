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
import CssBaseline from '@mui/material/CssBaseline';
import SnappitIcon from '../../images/snappit-icon.png';
import {ReactComponent as SaveIcon} from "../../images/snappit-save-code.svg";
import {ReactComponent as ShareIcon} from "../../images/snappit-share-code.svg";
import {ReactComponent as AccessIcon} from "../../images/snappit-access.svg";
import {ReactComponent as TeamShareIcon} from "../../images/team-share.svg";

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
            <>
            <CssBaseline/>
                <Container style={{ backgroundColor: "#101728", padding: "20px" }} maxWidth={false} disableGutters>
                    <Box sx={{ display: { xs: 'flex', md: 'flex' } }} style={{ paddingTop: "5px", }}>
                        <img xs="2" alt="logo" src={SnappitIcon} height="30px" width="35px" onClick={()=>window.location.href="/"} />

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            xs="2"
                            sx={{
                                mr: 2,
                                display: 'flex',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#fff',
                                textDecoration: 'none',
                                fontSize: "22px",
                                paddingLeft: "10px"
                            }}
                        >

                            Snappit
                        </Typography>
                    </Box>


                    <Grid container spacing={2} style={{ margin: "40px 0 0 0" }}>
                        <Grid item xs={12} sm={12} md={4} >
                            <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    wordWrap: "break-word",
                                    display: 'flex',
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
                                Store Share  Access 
                                Anytime
                            </Typography>
                            <ColorButton variant="contained" style={{marginTop: "10px", padding: "10px 25px"}} onClick={() => window.location.href = "/signup"}>Get Started</ColorButton>

                        </Grid>
                        <Grid item xs={12} sm={12} md={8}>
                            <TeamShareIcon width="90%"/>
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
                                    padding: "15px 30px",
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
                                    display: 'flex',
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
                        <SaveIcon/>
                        </Grid>

                        {/* Share section */}
                        <Grid item xs={12} sm={12} md={6} style={{ marginBottom: "80px", marginTop: "70px" }}>
                            <ShareIcon />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} style={{ marginBottom: "80px", marginTop: "30px" }}>
                            <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: 'flex',
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
                                    padding: "15px 30px 15px 30px",
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
                                    display: 'flex',
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
                            <AccessIcon/>
                        </Grid>

                        {/* Bottom section */}
                        <Grid item xs={12} sm={12} md={10} style={{ marginBottom: "20px" }}>
                        <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: 'flex',
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

                            <Box sx={{ display: 'flex' }} style={{ justifyContent: "center" }}>
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
                </>
        )
    }
}
