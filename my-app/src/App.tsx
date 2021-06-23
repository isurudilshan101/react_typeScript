import React,{FC} from 'react';
 import './App.css';
 import Header from './Pages/Page1/Header';
 
 import 'antd/dist/antd.css';
 

const  App:FC=()=> {
  return (
    <div className="App">
      Hello
   <Header/>
    </div>
  );
}

export default App;
