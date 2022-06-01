import {
  DynamicDataSheetGrid ,
  keyColumn,
  textColumn,
} from 'react-datasheet-grid';
import {MobilePlusMajor} from '@shopify/polaris-icons';
import { React,useState, useEffect, useCallback} from 'react';
import {Divider, Switch} from 'antd';
// Import the style only once in your app!
// import 'react-datasheet-grid/dist/style.css';  
import "../assets/style.css";     //External CSS used to customize the table
import { Button , TextContainer, Select } from '@shopify/polaris';

let h = 3;

const SizeChart = () => {
   
  const [ data, setData ] = useState([
    { Sleeve: '10', Chest: '32', Hip:'40'},
  ])

  const [selected, setSelected] = useState('noUnits');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {label: 'No Units', value: 'noUnits'},
    {label: `Centimeter → Inches`, value: 'cmToIn'},
    {label: 'Millimeter → Inches', value: 'mmToIn'},
  ];


  console.log(selected);
  
  console.log(Object.values(data));

  let Sleeve;
  let Chest;
  let Hip;

  data.map(myData => {
      let totalValues = Object.values(myData);
      totalValues.map(dan => {
            const check  = dan/2.54;
            const finalValue = parseFloat(check).toFixed(2);
            console.log(finalValue);
      })
  })

  const [columns, setcolumns ]= useState( [
    { title: <input type='text' value='Sleeve' style={{height:'100%', width: '100%', border : 'none'}}/>, id: 'sleeve', ...keyColumn('Sleeve' , textColumn)},
    { title: 'Chest', id: 'chest', ...keyColumn('Chest' , textColumn)},
    { title: 'Hip', id: 'hip', ...keyColumn('Hip' , textColumn)},
  ])

   const addColumn =() => {
      h++;
     let dynamicHeading = `Heading ${h}`;
      let newArr = [...columns];
      newArr.push({title : 'New' , id : '',  ...keyColumn(`${dynamicHeading}`, textColumn)});
      setcolumns(newArr); 
  }

  const addRow = () => {
       const newRow = [...data];
       setData[newRow];
       newRow.push(columns);
       setData(newRow);
  }

  const changeToggle = (checked) => {
    if(checked == false) {
       console.log(`Switched to ${checked}`);
       // Code goes here
    } else {
      console.log("Switched to true!");
    }
  }


  useEffect(()=>{
    const edit = document.getElementsByClassName('dsg-cell-header');

     for ( let i = 0 ; i < edit.length; i++) {
      //  console.log(i);rs

        // edit[i].addEventListener("click", ()=>{
        //      edit[i].classList("dsg-cell-header-active").remove();
        // })
        
     }
    //  edit.addEventListener("click", ()=>{
    //     console.log("Clicked");
    //  })
  })

  /**---------------Return Keywords starts---------------------- */

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
            <DynamicDataSheetGrid 
              value={data}
              onChange={setData}
              columns={columns}
              lockRows
            />
        <div className= 'btn-row'>
          <Button icon = {MobilePlusMajor} onClick = {addRow} size = "slim">Row</Button>
          <Button icon ={MobilePlusMajor} onClick= {addColumn} size = "slim"> Column</Button>
        </div> 
    </>
  ) 
}
export default SizeChart;  

 
 
   
 
