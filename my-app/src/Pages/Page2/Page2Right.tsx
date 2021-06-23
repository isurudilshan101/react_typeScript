import React from 'react';
import Page2Inputs from './Page2Inputs';
import Page2TexrArea from './Page2TexrArea';
import Page2ActiveButton from './Page2ActiveButton';
import Page2SaveButton from './Page2SaveButton';
import Page2CancelButton from './Page2CancelButton';

const Page2Right=()=> {
    return (
        <div style={{ 
        padding: "0px",
        position: "absolute",
        width: "480px",
        height: "418px",
        backgroundColor:"#FFFFFF",
        top:"25px",
        left: "269px"
           }}
        >
            <Page2Inputs/> 
            <Page2TexrArea/>
            <Page2ActiveButton/>
            <div >
            <Page2SaveButton/>
            <Page2CancelButton/>
            </div>
          
            </div>
       )
    }
    export default Page2Right;
       

          
       

        



