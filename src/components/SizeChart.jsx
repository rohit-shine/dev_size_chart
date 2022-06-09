import {MobilePlusMajor} from '@shopify/polaris-icons';
import { React,useState, useEffect, useCallback} from 'react';
import {Divider, Switch,Table} from 'antd';
import 'antd/dist/antd.css';
import "../assets/style.css";     //External CSS used to customize the table
import { Button , TextContainer, Select } from '@shopify/polaris';

const SizeChart = () => {
  
  const [selected, setSelected] = useState('noUnits');
  const handleSelectChange = useCallback((value) => setSelected(value), []);
  /**---------------- Code for Table------------------- */


  const [data, setData] = useState([
    { Size: 'S', Sleeve: 32, Chest: 30},  
  ]);

 const [titleHeader, setTitleHeader] = useState('Ho');

  const checkData = (e) =>{
     console.log(e.target.value);
  }
  
  const [columns, setColumns] = useState([
    { title: <input type='text' onChange={checkData} />, dataIndex: 'Size', key: '0'},
    {title: 'Sleeve', dataIndex: 'Sleeve', key: '1'},
    { title: 'Chest', dataIndex: 'Chest', key: '2'},
  ]);


  /***-------------End Code for Table--------------------------  */

  const options = [
    {label: 'No Units', value: 'noUnits'},
    {label: `Centimeter → Inches`, value: 'cmToIn'},
    {label: 'Millimeter → Inches', value: 'mmToIn'},
  ];

  console.log(selected);
  // data.map(myData => {
  //     let totalValues = Object.values(myData);
  //     totalValues.map(dan => {
  //           const check  = dan/2.54;
  //           const finalValue = parseFloat(check).toFixed(2);
  //           console.log(finalValue);
  //     })
  // })

   const addColumn =() => {
      console.log("Clicked on Add column btn");
      const newCol = [...columns];
      setColumns[newCol];
      newCol.push({title : 'Hi', dataIndex : 'hy', key: ''});
      setColumns(newCol);

  }

  const addRow = () => {
    console.log("Clicked on Add Row Btn");
       const newRow = [...data];
       setData[newRow];
       newRow.push(columns);
       setData(newRow);
  }

  const changeToggle = (checked) => {
    if(checked == false) {
       console.log(`Switched to ${checked}`);
    } else {
      console.log("Switched to true!");
    }
  }

  /**---------------Return Keywords starts---------------------- */
  console.log(columns);

  return (
    <> 
        <div  style={{ marginBottom : '30px'}} className="selectBlock">
             <div className='selectUnits'>
                <Select
                    label = "Table Unit Conversion"
                    options={options}
                    onChange={handleSelectChange}
                    value={selected}
                 />
             </div>
        </div>
        <Divider></Divider>
         <div style={{textAlign : 'center', marginBottom : '30px'}}>
              <TextContainer>
                              <div style={{textAlign : 'center'}}>
                                { selected == 'cmToIn'  ? <Switch
                                     checkedChildren= "IN"
                                     unCheckedChildren= "CM"
                                     onChange={changeToggle}
                                 /> : ''
                                }
                                { selected == 'mmToIn'  ? <Switch
                                     checkedChildren= "IN"
                                     unCheckedChildren= "MM"
                                     onChange={changeToggle}
                                 /> : ''
                                }
                              </div>
               </TextContainer>
         </div>
         <div className='customChart'>
            <Table
                 columns={columns} 
                 dataSource={data} 
                 pagination={false}
              />
          </div>
        <div className= 'btn-row'>
          <Button icon = {MobilePlusMajor} onClick = {addRow} size = "slim">Row</Button>
          <Button icon ={MobilePlusMajor} onClick= {addColumn} size = "slim"> Column</Button>
        </div> 
    </>
  ) 
}
export default SizeChart;  






 
 
   
 
