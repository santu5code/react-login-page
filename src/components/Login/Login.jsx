import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from '../home/Home';
import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('Password').replace(/"/g, "");
        let mail = localStorage.getItem('Email').replace(/"/g, "");
        

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }


    return (
        <>
            {home ? <form onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <Grid item style={{ margin: 8 }}>
                    
                    <TextField id="outlined-email" label="Email" type="email" variant="outlined" onChange={(event) => setEmaillog(event.target.value)} fullWidth />
                 </Grid>

                
                 <Grid item style={{ margin: 8 }}>
                    <TextField id="outlined-password" label="Password" type="password" variant="outlined" onChange={(event) => setPasswordlog(event.target.value)} fullWidth />
                    </Grid>
                <Button variant="contained" color="primary" style={{ margin: 8 }} type='submit'>
                    Login
                </Button>

                {flag && <Alert color='primary' variant="warning" >
                    Fill correct Info else keep trying.
                        </Alert>
                }
                </form> : <Home />
            }
        </>
        
    )
}

export default Login
