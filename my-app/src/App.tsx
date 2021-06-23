import React,{FC} from 'react';
 import './App.css';
 import Header from './Pages/Page1/Header';
 import MainContainer from './Pages/Page1/MainContainer';
 
 import 'antd/dist/antd.css';
 

const  App:FC=()=> {
  return (

    <div className="container">
     
  
   <MainContainer/>
    </div>
  );
}

export default App;
