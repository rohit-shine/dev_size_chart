import React, { useState } from 'react';

export default function TableHeader({item, setTHeader, tHeader}) {
  const [header, setHeader] = useState(
  );
  
  const handleChange = (e) => {
    setHeader(e.target.value);
  }

  return (
        <>
          <th title={item}>
              <input type='text' defaultValue={item} value={header} onChange={handleChange} name={item}/>
          </th>
        </>
  )
}
