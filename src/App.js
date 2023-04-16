import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


// import About from './Components/About';


function App() {
     const[Mode , setMode] = useState('light'); // whether dark mode is enable or not 

    const toggleMode = () => {
      if(Mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        showAlert("Dark Mode is enabled" , "success");

      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode is enabled" , "success");

      }
    }

    const[alert , setAlert] = useState(null);

    const showAlert = (message , type)=>{
         setAlert({
          msg: message,            //ye ek object hai 
          type: type
         })
         
         setTimeout(() => {
          setAlert(null)
         },3000) 
          
    }

  return (
    <>   
        <Navbar title = "hell" Mode = {Mode} toggleMode = {toggleMode} ></Navbar>
        <Alert alert = {alert} />
        <TextForm heading = "Enter your text" Mode = {Mode} showAlert = {showAlert} /> 
         
        {/* <About></About> */}
    </>
  );
}

export default App;
