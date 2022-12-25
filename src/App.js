import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';

// import Functional from './components/Functional';
// import Class_comp from './components/Class_comp';
// import State from './components/State';
// import Counter from './components/Counter';
function App() {
    const[mode,setMode]=useState("light");
    const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor="#212529";;
      }
      else{
        setMode('light');
        document.body.style.backgroundColor="white";
      }
    }
  return (
      <>
       <Navbar title="TextUtils" second="Drop" mode={mode} togglemode={toggleMode}/>
       <div className='container my-3'>
        <Textform top="Enter the Text" mode={mode}/>
        </div>
       
       
       
       
       
      </>
       
     
  );
}

export default App;
