import React from 'react';

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

const TableData = ({ columns, data, setColumns, setData }) => {

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

  console.log(data);
  console.log(columns);
 return(
     <table style={tableStyle}>
      <thead>
        <tr>
          {columns.map((cols, index) => (
            <th style={thStyle} key={index}>
              <input style={input} type='text' defaultValue={cols.title} onChange={(e) => handleChangeCol(e, index)} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
                {
                  rowData.map((values, colIndex)=>{
                    return(
                    <td key={colIndex}>
                        <input type='text' defaultValue = {values} onChange = {(e)=> handleChangeData(e, rowIndex, colIndex)} />
                      </td>
                  )})
                }
            </tr>
          ))}
      </tbody>
    </table>
    )
 } 
export default TableData;