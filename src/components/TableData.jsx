import React, { useEffect, useState } from 'react';
import '../assets/style.css';

const tableStyle = {
  border: '1px solid black',
  borderCollapse: 'collapse',
  textAlign: 'center',
  width: '100%'
}

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

const TableData = ({ columns, data, setColumns, setData}) => {

  const [showRowContext,  setShowRowContext] = useState(false);
  const [headerIndex, setHeaderIndex] = useState('');
  const [fieldIndex, setFieldIndex] = useState('');
  const [checkRow, setCheckRow] = useState(true);
  
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
       let newArr = [...data];
       newArr[rowIndex][colIndex] = updatedData;
       setData(newArr);
  }

  /** Hanle Context Header */
  const handleContextHeader = (e, index) => {
        setHeaderIndex(index);
        setCheckRow(false);
        setShowRowContext(true);
  }

  /*** Handle Context Menu on Rows */
  const handleContextRow = (e, rowIndex, colIndex) => {
      setHeaderIndex(colIndex);
      setFieldIndex(rowIndex);
      (checkRow == false) ? setCheckRow(true) : '';
      setShowRowContext(true);
  }

  const handleAddColumn = () =>{
       const newCol = [...columns];
       newCol.splice(headerIndex, 0 , {title : ''});  
       setColumns(newCol);
       data.map((allData)=> {
          allData.splice(headerIndex, 0 , '')
       })
       setShowRowContext(false);
  }

  const handleDeleteColumn = () =>{
        const newColumn = [...columns];
        newColumn.splice(headerIndex, 1);
        setColumns(newColumn);
        data.map((allData) => {
          allData.splice(headerIndex, 1);
        })
        setShowRowContext(false);
  }

  const handleRowAbove = () => {
      const newRow = [...data];
      const arr = [];
      for(let i=0; i<columns.length; i++){
          arr.push('');
      }
      if(fieldIndex >= 0) {
         newRow.splice(fieldIndex, 0, arr);
         setData(newRow);
      }
      setShowRowContext(false);
  }

  const handleRowBelow = () => {
     const newRowBelow = [...data];
     const arr = [];
     for(let i=0; i<columns.length; i++){
      arr.push('');
      }
      if(fieldIndex < data.length) {
        newRowBelow.splice(fieldIndex +1, 0, arr);
        setData(newRowBelow);
      }
      setShowRowContext(false);
  }

  const deleteRow = () => {
      const rowDelete = [...data];
      rowDelete.splice(fieldIndex, 1);
      setData(rowDelete);
  }

   const contextMenuRow = (
       <ul className='rowMenu'>
           <li className='menu' onClick = {handleAddColumn}> Insert Column </li>
           <li className='menu' onClick={handleDeleteColumn}> Delete Column </li> 
          { (checkRow) ? <li className='menu' onClick={handleRowAbove} >Insert Row Above</li> : '' } 
           <li className='menu' onClick={handleRowBelow}>Insert Row Below</li>
           <li className='menu' onClick={deleteRow}>Delete Row</li>
       </ul>  
   )
   useEffect( ()=> {
      document.addEventListener('click', () => {
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
                { ( showRowContext ) ? contextMenuRow : ''}
   </div>
    </>
    )
  } 
export default TableData;