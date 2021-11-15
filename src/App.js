import React, {useState} from 'react';


import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
  const [darkMode, setDarkMode] = useState("light");

  const toggleMode = () =>{
    if(darkMode === 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode enabled", "success")
    } else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enabled", "success")
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      message:message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500)
  }
  return (
    <>
    
    <div>
    
    <Router>
    <Navbar title="Text Utils" mode={darkMode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
      <Routes>
          {/* <Route exact path="/about" element={<About />}/> */}
            
          
          <Route exact path="/" element={ <TextArea heading="Enter Your Text Below" mode={darkMode} showAlert = {showAlert}/>}/>
         
          {/* <TextArea heading="Enter Your Text Below" mode={darkMode} showAlert = {showAlert}/> */}
      </Routes>
    </Router>
    
    </div>
    
    </>
  );
}

export default App;
