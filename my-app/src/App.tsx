import React,{FC} from 'react';
 import './App.css';
 //  import MainContainer from './Pages/Page1/MainContainer';
 import 'antd/dist/antd.css';
 import Page2Main from './Pages/Page2/Page2Main';
 

const  App:FC=()=> {
  return (

    <div className="container">
     
  
   {/* <MainContainer/> */}
   <Page2Main/>
    </div>
  );
}

export default App;
