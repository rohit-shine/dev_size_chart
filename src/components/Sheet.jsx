import React, { useState } from 'react'
import TableData from './TableData'
import { Button } from '@shopify/polaris';

export default function Sheet() {
  
   const [tHeader, setTHeader] = useState(
       ["Size", "Sleeve", "Chest", "Hip"]
     );
 
   const [tData, setTData] = useState([
       {items : ["S", '12', '15', '20' ]},
       {items : ["M", '15', '16', '25' ]},
       {items : ["L", '16', '20', '25' ]},
   ])

   const addColumn =() => {
    console.log("Clicked on Add column btn");
    const newCol = [...tHeader];
    newCol.push([""]);
    setTHeader(newCol);
    tData.map((element)=>{
        element.items.push('');
    })
   }

 const addRow = () => {
     const newRow = [...tData];
     setTData[newRow];
     const length = tHeader.length;
     const arr = [];
     for(let i=0; i<length; i++){
        arr.push('')
     }
     newRow.push({items : arr}),
     setTData(newRow);
  }

 
  return (
        <>
          <div className="customChart">
              <TableData tHeader={tHeader} tData = {tData} setTHeader={setTHeader} />
          </div>

          <div className= 'btn-row'>
             <Button  onClick = {addRow} size = "slim">Row</Button>
             <Button onClick= {addColumn} size = "slim"> Column</Button>
           </div> 
        </>
  )
}
