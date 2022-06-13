import React, { useState } from 'react';

export default function TableRow({data}) {
const [test , setTest]  = useState("")

  const handleInputs =(e) => {
    setTest(e.target.value)
  }


  console.log(test);
  return (
        <>
            <tr>
                {
                  data.map((item)=>{
                      return(
                          <td key={item}> <input defaultValue={item} type='text' onChange={handleInputs} /> </td>
                      )
                  })
                }
            </tr>
        </>
  )
}
