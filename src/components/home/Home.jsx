import React from 'react'


function Home() {
    let mail = localStorage.getItem('Email').replace(/"/g, "");

    return (
       
        <>
            <h1>welcome {mail} </h1>
            
        </>
    )
}
export default Home









    // let pass = localStorage.getItem('Password').replace(/"/g, "");
    
