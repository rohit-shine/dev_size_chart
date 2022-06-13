import React, { useState } from 'react';

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
}

const Table = ({ columns, data, setColumns }) => {

  const handleChange = (e, index) => {
    const newState = columns.map((obj, id) => {
      if (index === id) {
        return { ...obj, title : e.target.value };
      }
      return obj;
    });
    setColumns(newState);

    data.map((rowData, index)=> {
         console.log(rowData)
    })
  };


  return (<table style={tableStyle}>
    <thead>
      <tr>
        {columns.map((cols, index) => (
          <th style={thStyle} key={index}>
            <input style={input} type='text' defaultValue={cols.title} onChange={(e) => handleChange(e, index)} />
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((rowData, index) => (
        <tr key={index}>
          {columns.map(({ title }) => (
            <td style={tdStyle} key={title}>
              {rowData[title]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>)
};


const SizeChart = () => {

  const [columns, setColumns] = useState([
    { title: "Size" },
    { title: "Sleeve" },
    { title: "Chest" },
    { title: "Hip" },
  ]);

  const [data, setData] = useState([
          { Size: 'XS', Sleeve: 16, Chest: 32, Hip: 36 },
          { Size: 'S', Sleeve: 17, Chest: 33, Hip: 37 },
          { Size: 'M', Sleeve: 18, Chest: 35, Hip: 35 },
  ]);
  
   console.log(columns);
   console.log(data);

  return (
    <div>
      <Table columns={columns} data={data} setColumns={setColumns} />
    </div>
  );
};

export default SizeChart;