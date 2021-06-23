import React from "react";
import { Input } from "antd";

function Page2Inputs() {
  return (
    <div>
      <p style={{ marginTop: "0" }}>Benifit/Feature Type Code*</p>
      <Input
        style={{
        
          
          width: "480px",
          height: "32px",
          border: "1px solid #D9D9D9",
        }}
      />
      <p style={{ marginTop: "0" }}>Benifit/Feature Type Name*</p>
      <Input
        style={{
            
            
            width: "480px",
            height: "32px",
            border: "1px solid #D9D9D9",
        }}
      />
    </div>
  );
}
export default Page2Inputs;
