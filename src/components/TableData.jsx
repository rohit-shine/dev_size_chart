import React, { useEffect, useState } from 'react';
import '../assets/style.css';

const tableStyle = {

  border: '1px solid black',
  borderCollapse: 'collapse',
  textAlign: 'center',
  width: '100%'
}

const tdStyle = {
  border: '1px solid #85C1E9',
  background: 'white',
  padding: '5px'
};

const thStyle = {

  border: '1px solid #3498DB',
  background: '#9EE1FF',
  color: 'black ',
  padding: '5px'
};

const input = {
  width: '100%',
  border: 'hidden'
}


let headerIndex = '';   // Header Column Index when right Click
 
const TableData = ({ columns, data, setColumns, setData}) => {

  const [ showContext , setShowContext] = useState(false);
  const [showRowContext,  setShowRowContext] = useState(false);

  /** Remove Default Context Menu */
  const removeDefaultMenu = (e) => {
        e.preventDefault();
  }
useEffect(()=>{
     const allTr = document.getElementsByClassName('trDefault');
     for( let i = 0; i < allTr.length; i++) {
           allTr[i].addEventListener('contextmenu', removeDefaultMenu);
     }
})

  const handleChangeCol = (e, index) => {
    const updatedVal = e.target.value;
    const newState = columns.map((obj, id) => {
      if (index === id) {
        return { ...obj, title : updatedVal };
      }
      return obj;
    });
    setColumns(newState);
  };

  const handleChangeData = (e, rowIndex , colIndex ) =>{
      const updatedData = e.target.value;
        DataIndex = colIndex;
       let newArr = [...data];
       newArr[rowIndex][colIndex] = updatedData;
       setData(newArr);
  }

  /** Hanle Context Header */
  const handleContextHeader = (e, index) => {
        console.log(e.target.value);
        headerIndex = index;
        setShowContext(true);
  }

  /*** Handle Context Menu on Rows */
  const handleContextRow = (e, rowIndex, colIndex) => {
      console.log(e.target.value);
      console.log(rowIndex);
      console.log(colIndex);
      setShowRowContext(true);
  }

  const handleAddColumn = () =>{
       const newCol = [...columns];
       newCol.splice(headerIndex, 0 , {title : ''});  
       setColumns(newCol);
       data.map((allData)=> {
          allData.splice(headerIndex, 0 , '')
       })
       setShowContext(false);
  }

  const handleDeleteColumn = () =>{
        const newColumn = [...columns];
        newColumn.splice(headerIndex, 1);
        setColumns(newColumn);
        data.map((allData) => {
          allData.splice(headerIndex, 1);
        })
        setShowContext(false);
  }

  const contextCustomMenu = (
    <ul className='contextMenu' id='contextMenu'>
        <li className='menuLists' onClick = {handleAddColumn}> Insert Column </li>
        <li className='menuLists' onClick={handleDeleteColumn}> Delete Column </li> 
    </ul>
   )

   const contextMenuRow = (
       <ul className='rowMenu'>
           <li className='menu' onClick = {handleAddColumn}> Insert Column </li>
           <li className='menu' onClick={handleDeleteColumn}> Delete Column </li> 
           <li className='menu'>Insert Row Above</li>
           <li className='menu'>Insert Row Below</li>
           <li className='menu' >Delete Row</li>
       </ul>  
   )
   useEffect( ()=> {
      document.addEventListener('click', () => {
            setShowContext(false);
            setShowRowContext(false);
      })
   })

  return(
    <>
     <div className='sizeTable'>
      <div className='tableDiv'> 
          <table style={tableStyle}>
            <thead>
              <tr className='trDefault'>
                {columns.map((cols, index) => (
                  <th style={thStyle} key={index}>
                    <input 
                      style={input} 
                      type='text'
                      value={cols.title}
                      onChange={(e) => handleChangeCol(e, index)}
                      onContextMenu = {(e)=>handleContextHeader(e, index)}/>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
                {data.map((rowData, rowIndex) => (
                  <tr key={rowIndex} className='trDefault'>
                      {
                        rowData.map((values, colIndex)=>{
                          return(
                            <td key={colIndex}>
                              <input 
                                  type='text'
                                  value = {values}
                                  onChange = {(e)=> handleChangeData(e, rowIndex, colIndex)}
                                  onContextMenu = {(e)=> handleContextRow(e, rowIndex, colIndex)}
                                  />
                            </td>
                        )})
                      }
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
                { ( showContext ) ? contextCustomMenu : ''}
                { ( showRowContext ) ? contextMenuRow : ''}
                
   </div>
    </>
    )
  } 
export default TableData;