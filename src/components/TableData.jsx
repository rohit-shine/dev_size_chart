import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export default function TableData({tHeader, tData, customClass, setTHeader}) {
  return (
    <>
      <table className = {customClass}>
          <thead>
              <tr>
                  {
                    tHeader.map((headerData, index) => {
                       return(
                              <TableHeader key={index} item= {headerData} tHeader={tHeader} setTHeader={setTHeader} />
                            )
                    } )
                  }
              </tr>
          </thead>
                 <tbody>
                    {tData.map((item, index) => {
                        return (
                        <TableRow key={index} data={item.items} />
                        )
                    })}
                </tbody>
      </table>
    </>
  )
}
