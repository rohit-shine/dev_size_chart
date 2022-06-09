import React, { useState } from 'react'
import TableData from './TableData'
import { Button } from '@shopify/polaris';

let id = 3;

export default function Sheet() {
  
   const [tHeader, setTHeader] = useState(
       ["Size", "Sleeve", "Chest", "Hip"]
     );
 
   const [tData, setTData] = useState([
       {id: "1", items : ["S", '12', '15', '20' ]},
       {id: "2", items : ["M", '15', '16', '25' ]},
       {id: "3", items : ["L", '16', '20', '25' ]},
       {id: "4", items : ["L", '12', '20', '25' ]},
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
  console.log("Clicked on Add Row Btn");
     const newRow = [...tData];
     setTData[newRow];
     console.log(tHeader.length)
     const length = tHeader.length
     const arr = []
     for(let i=0; i<length; i++){
        arr.push('')
     }
     newRow.push({id: id + 1, items :arr}),
     setTData(newRow);
  }


  return (
        <>
          <div className="customChart">
             <TableData tHeader={tHeader} tData = {tData}/>
          </div>

          <div className= 'btn-row'>
             <Button  onClick = {addRow} size = "slim">Row</Button>
             <Button onClick= {addColumn} size = "slim"> Column</Button>
           </div> 
        </>
  )
}
