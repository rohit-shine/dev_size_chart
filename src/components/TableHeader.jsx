import React from 'react'

export default function TableHeader({item}) {

  return (
        <>
          <th title={item}>
              <input type='text' value={item}/>
          </th>
        </>
  )
}
