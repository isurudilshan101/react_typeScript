import React,{FC} from 'react';
 import './App.css';
 import Page1Main from './Pages/Page1/Page1Main';
 import 'antd/dist/antd.css';
 

const  App:FC=()=> {
  return (
    <div className="App">
      Hello
    <Page1Main/>
    </div>
  );
}

export default App;
