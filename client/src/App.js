import React, { Component, useState } from 'react';
import './App.css';
//import { useState } from 'react';
// import { useEffect } from 'react';
import Axios from 'axios';
import { response } from 'express';


function App() {

  
  // const [movieName, setMovieName] = useState('');
  // const [review, setReview] = useState('');

  // useEffect(()=> {
  //   Axios.get('http://localhost:3001/api/get').then((response) => {
  //     console.log(response);
  //   })
  // }, []);

  // const movieName = "goodnight";
  // const movieReview = "great";

  let correct = "1,1,1,0,0,0,0,0,0";
  let solvingtimeByQuestion = "7000,5000,68354,6789,0,0,0,0,0,0";
  let questionVisitLog = "[1,2],[2,5],[5,3]";
  let answerChangeNumber = "5,3,10,0,0,0,0,0";

  //maingame.style.display = "none";




  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {correct,solvingtimeByQuestion: solvingtimeByQuestion , questionVisitLog: questionVisitLog, answerChangeNumber: answerChangeNumber
  }).then(() => {
    alert("Successful"); 
  });
  };


  // const [usernameReg, setUsernameReg] = useState("");
  // const [passwordReg, setPasswordReg] = useState("");
  


  // const register = () => {
  //   Axios.post("http://localhost:3001/register", {username : usernameReg, password : passwordReg
  // }).then((response) => {
  //   console.log(response);
  // });
  // };


  return (
    <div className="App">
      


      <p><a href="tilematch.html"> Tile Game </a></p>

        <button onClick={submitReview}>submit</button>
    
        
        <h1>Welcome to the AI Interview</h1>
        
        <p>Loigin to start</p>

        <br></br><br></br>

        <form>
        <p>Loigin</p>
        <input type="text" placeholder="ID"/>
          <input type="password" placeholder="Password"/>        
    </form>

    <br></br>
    <button>LOGIN</button>


    <br></br><br></br><br></br>

    <form>
        <input type="text" placeholder="ID" onChange={(e) => {setUsernameReg(e.target.value);}}/>
        <input type="password" placeholder="Password" onChange={(e) => {setPasswordReg(e.target.value);}}/>        
    </form>

    <br></br>
    <button onClick={register}>REGISTER</button>


    </div>
  );

  
}

export default App;
