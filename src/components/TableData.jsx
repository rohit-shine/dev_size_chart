import {React, useState} from 'react';
import '../assets/style.css';

const TableData = () =>{
   
    const [data, setData] = useState([
        {Size:'S', Sleeve:'20', Chest:'30'},
        {Size:'M',  Sleeve:'25', Chest:'35'},    
    ])

    const [column, setColumn] = useState([
        {title : 'Size'},
        {title : 'Sleeve'},
        {title : 'Chest'},
    ])

   const addRow = () => {
       console.log("You clicked on Btn row");
       const newRow = [...data];
       setData[newRow];
       newRow.push(column);
       setData(newRow);
       console.log(data);
   }
      
   const addColumn = () => {
    console.log("You clicked on Btn Column");
    //   const newCol = [...column];
    //    setColumn[newCol];
    //    newCol.push(data);
    //    setColumn(newCol);
    //    console.log(column);
   }

   /***------------------return Code Goes Here---------------------XXX */
  return (
      <>
         <p style = {{textAlign: 'center'}}>Table data</p>
            <table>
                <tbody>
                    <tr>
                       {
                          column.map((Cols)=> {
                            return(
                                    <td>{Object.values(Cols)}</td>
                                    )
                                })
                            }
                    </tr>
                    {
                        data.map((element, key)=>{
                            return(
                                   <tr key={key}>
                                      <td >{element.Size} </td>
                                      <td >{element.Sleeve} </td>
                                      <td > {element.Chest}</td>
                                    </tr>
                                    )
                                })
                    }
                </tbody>
            </table>
            
         <br/>
            <div>
                <button onClick={addRow}>Add Row</button>
                <button onClick={addColumn}>Add Column</button>
            </div>
      </>
  )
}

export default TableData;