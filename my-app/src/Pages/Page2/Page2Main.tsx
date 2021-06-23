import React from "react";
import { Card } from "antd";
import Page2Right from './Page2Right';
import Page2Left from './Page2Left';

const Page2Main = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "1620px",
        height: "874px",
        left: "25px",
        top: "25px",
        background:"#FFFFFF",
      }}
    >
        <div style={{display:"flex"}}>
        <div style={{marginTop:"30px",marginLeft:"56px",}}><Page2Left/></div>
      <Card
        style={{
          position: "absolute",
          width: "1px",
          height: "875px",
          left: "243px",
          top: "0px",
           background: "#E8E8E8",

         
        }}
      ></Card>
      <div><Page2Right/></div>
        </div>
    
    </div>
  );
};

export default Page2Main;
