import React from 'react'
import { Input } from 'antd';

 const Page2TexrArea=()=>{
    const { TextArea } = Input;
    return (
        <div>
             <p>Benifit/Feature Type Discription</p>
             <TextArea rows={4} />
        </div>
    )
}
export default Page2TexrArea;
