import React, { useState } from 'react';

export default function TableRow({data}) {
const [test , setTest]  =useState('')

  const handleInputs =(e) => {
    setTest(e.target.value)
  }
  return (
        <>
            <tr>
                {
                  data.map((item)=>{
                      return(
                          <td key={item}> <input defaultValue={item}  value={test} type='text' onChange={handleInputs}/> </td>
                      )
                  })
                }
            </tr>
        </>
  )
}
