
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForms';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)

  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    showAlert("Dark mode has been enabled","success")
    // document.title='TextUtils - Dark Mode';

  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("light mode has been enabled","success")
    //  document.title='TextUtils - Dark Mode';

  }
  }
  return (
    <>
    <Router>
  <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3 ">
    
  <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert}heading ="Try TextUtils-Word Counter, Character Counter , Remove Extra Spaces" mode={mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
  
    </> 
  );
}
     
export default App;
// new changes
// final changes
//new things add