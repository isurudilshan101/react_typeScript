import React from 'react'
import { Switch } from 'antd';

 function Page2ActiveButton() {
    function onChange(checked) {
        console.log(`switch to ${checked}`);
      }
    return (
        <div style={{  display:"flex"}}>
            <p style={{marginTop:"30px", }}>Active</p> 
            <Switch style={{top:"30px",left:"10px"}} defaultChecked onChange={onChange} />
            
        </div>
    )
}
export default Page2ActiveButton;
