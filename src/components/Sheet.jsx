import {React, useEffect, useState} from "react";
import '../assets/style.css';
import Separator from "./LayoutComponent/Separator";
import TextEditor from './LayoutComponent/TextEditor';
import VideoComp from './LayoutComponent/VideoComp';

const Sheet = () => {

    //  const [data, setData] = useState([
    //      { Sleeve : '10' , Chest : '32' , Hip : '40'},
    //      { Sleeve : '12' , Chest : '33' , Hip : '41'}
    //  ]);

    //  const [column, setColumn] =  useState([
    //      { title : 'Sleeve'},
    //      { title : 'Chest'},
    //      {  title : 'Hip'}
    //  ])

    //  console.log(data);

    //  const addRow = () =>{
    //      console.log("Clicked!!!");
    //      const newRow = [...data];
    //      setData[newRow];
    //      newRow.push( { Sleeve : '12' , Chest : '33' , Hip : '41'});
    //      setData(newRow);
    //  }

    //  console.log(data);

    //  const addColumn = () => {
    //      const newCol = [...column];
    //      setColumn[newCol];
    //      newCol.push({ id : '', value : 'Hip' ,  title : 'Hip'});
    //      setColumn(newCol);
    //  }

    return(
        <>
          <Separator/>
  
           <br/>
           <br/>
            <TextEditor />

            <br/>
            <br/>
            <VideoComp/>
        </>
    )
}

export default Sheet;
    {/* <div className="customChart">
        <table>
            <thead>
                    {/* <tr>
                        <th><input type="text" value={data} onChange={(e)=> setData(e.target.value)} /></th>
                        <th>Test 1</th>
                        <th>Test 2</th>
                        <th>Test 3</th>
                    </tr> */}

    //                 {
    //                     column.map((dynamicCols, key) =>{
    //                          <tr key={key}>
    //                              <th>{dynamicCols.title}</th>
    //                              <th>{dynamicCols.title}</th>
    //                              <th>{dynamicCols.title}</th>
    //                          </tr>
    //                          console.log(key);
    //                     })  
    //                 }
    //         </thead>
    //         <tbody>
    //             {
    //                 data.map((dynamicData, key)=>{
    //                     return (
    //                         <tr key={key}>
    //                              <td>{dynamicData.Sleeve}</td>
    //                              <td>{dynamicData.Chest}</td>
    //                              <td>{dynamicData.Hip}</td>
    //                         </tr>
    //                     )
    //                 })
    //             }
    //         </tbody>
    //     </table>
    //        <br></br>
    //     <button onClick={addRow}>Add Row</button>
    //     <button onClick={addColumn}>Add Column</button>
    // </div> 