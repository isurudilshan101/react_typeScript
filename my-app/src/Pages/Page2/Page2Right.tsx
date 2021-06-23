import React from 'react';
import Page2Inputs from './Page2Inputs';
import Page2TexrArea from './Page2TexrArea';

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

        

        

        
        </div>
    )
}

export default Page2Right;
