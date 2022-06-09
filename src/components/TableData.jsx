import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export default function TableData({tHeader, tData, customClass}) {
  return (
    <>
      <table className={customClass}>
          <thead>
              <tr>
                  {
                    tHeader.map((headerData, index)=>{
                       return(
                           <TableHeader key={index} item= {headerData} />
                       )
                    } )
                  }
              </tr>
          </thead>
                <tbody>
                    {tData.map((item) => {
                        return (
                        <TableRow key={item.id} data={item.items} />
                        )
                    })}
                </tbody>
      </table>
    </>
  )
}
