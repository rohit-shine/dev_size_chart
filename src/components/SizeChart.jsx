import { Button } from '@shopify/polaris';
import {MobilePlusMajor} from '@shopify/polaris-icons';
import React, { useState } from 'react';
import TableData from './TableData';
import '../assets/style.css';



const SizeChart = () => {

    const [columns, setColumns] = useState([
    { title: "Size" },
    { title: "Sleeve" },
    { title: "Chest" },
    { title: "Hip" },
  ]);

  const [data, setData] = useState([
         ['XS', '16', '32', '36'],  
         ['S', '17', '33', '37'],
         ['M', '18', '35', '35'],
  ]);
  
   const addRow = () => {
      const newRow = [...data];
      const arr = [];
      const length = columns.length;
      for( let i = 0; i < length; i++) {
         arr.push('')
      }
      newRow.push(arr)
      setData(newRow);
   }

    const addColumn = () =>{
       console.log('Clicked on Add Column button');
       const newCol = [...columns];
       newCol.push({title : ''});
       data.map((element)=>{
          element.push('')
       })
       setColumns(newCol)
    }

  return (
    <>
       <div className='customChart'>
         <TableData columns={columns} data={data} setColumns={setColumns} setData = {setData} addColumn = {addColumn}/>
       </div>
           <div className= 'btn-row'>
             <Button  onClick = {addRow} size = "slim" icon={MobilePlusMajor}>Row</Button>
             <Button onClick= {addColumn} size = "slim" icon={MobilePlusMajor}> Column</Button>
          </div> 
    </>
  );
};

export default SizeChart;