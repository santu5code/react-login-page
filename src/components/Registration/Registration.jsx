import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Login from '../Login/Login';
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Registration() {

   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
 




   
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!email || !password || !password2) {
            setFlag(true);

        } 
        else if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Email address is invalid');
          }
        else if(password.length < 8){
            alert("password should contain at least 8 character");

        }
        else if (!/(?=.*[0-9])(?=.*[a-z])/.test(password)){
            alert("password should contain character and number");}
        
        
        else if (password2 !== password) {
               alert('Passwords do not match');
              }
        
        
        else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Saved in Local Storage");
            alert("Accout created successfully");
            setLogin(!login)
            

        }

    }

    
    function handleClick() {
        setLogin(!login)
    }

    



    return (
        <>
           
            {login ? <form onSubmit={handleFormSubmit} noValidate autoComplete="off">
                <h3>Create an Account</h3>
                <Grid item style={{ margin: 8 }}>
                    <TextField type="email" id="outlined-email" label="Email" variant="outlined" onChange={(event) => setEmail(event.target.value)}  fullWidth required/>
                </Grid>

    
                <Grid item style={{ margin: 8 }} >
                    <TextField type="password"  id="outlined-password" label="Password" variant="outlined" onChange={(event) => setPassword(event.target.value)}  fullWidth required />
                </Grid>

                <Grid item style={{ margin: 8 }} >
                    <TextField type="password"  id="outlined-password" label="Recheck Password" variant="outlined" onChange={(event) => setPassword2(event.target.value)}  fullWidth required />
                </Grid>
             
                <Button variant="contained" color="primary" style={{ margin: 8 }} type='submit'>
        Create Account
        </Button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        Each and every field is madatory
                </Alert>
                }

            </form> : <Login />
            }
        </>
    )
}

export default Registration
