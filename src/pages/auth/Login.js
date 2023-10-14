import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import SnappitIcon from '../../images/snappit-icon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import "../../styles/Header.css"
const {REACT_APP_SERVER_URL} = process.env;

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const email = data.get('email');
    const password = data.get('password');

    const response = await fetch(REACT_APP_SERVER_URL + '/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    const json = await response.json();
    if (json.error) {
      toast.error(json.error);
    }
    else if (json.errors) {
      json.errors.forEach(error => {
        toast.error(error.msg);
      });
    }
    else if (json.authtoken) {
      localStorage.setItem('auth-token', json.authtoken);
      // toast.success(json.authtoken);
      navigate(`/dashboard`);
    }
    else {
      toast.error('Internal Server Error');
    }

  }
  return (
    <>
      <CssBaseline />
      <Container className='hdr-root' style={{ backgroundColor: "#101728" }} maxWidth="xl" >
        <Box sx={{ display: { xs: 'none', md: 'flex' }, marginTop: '15px' }}>
          <div className="hdr-title" style={{ display: 'flex', flexDirection: 'row' }}>

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
        </Box>
      </Container>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#101728" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "#101728" }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have account? Sign up now.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />

      </Container>
    </>
  )
}