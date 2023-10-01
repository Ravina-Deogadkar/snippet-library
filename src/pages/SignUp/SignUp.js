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



export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const email = data.get('email');
    const password = data.get('password');
    const fname = data.get('firstName');
    const lname = data.get('lastName');


        const response = await fetch('http://localhost:8181/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, fname, lname })
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
  };

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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
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
              style={{backgroundColor: "#101728"}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
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
