import React from 'react'
import { Table } from 'antd';
 
  
 

const Page1Table=()=> {
    const columns = [
        {
          title: 'Benifit/Feature Type Code',
          dataIndex: 'name',
          key:'key',
       
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key:'key',
             
          sorter:(a,b)=>a.age-b.age  
        },

        {
          title: 'Address',
          dataIndex: 'address',
          key:'key'
        },
      ];

      const data=[
          {
            name:'Isuru',
            age:'10',
            address:'Address 1',
            key:'1'
          },
          {
            name:'Dilshan',
            age:'20',
            address:'Address 2',
            key:'2'
          },
      ];


 
    return (
        <div>
           <Table className="p1t" dataSource={data}
            columns={columns}
           >
              
              
              
           </Table>
        </div>
    );

}
export default Page1Table;
