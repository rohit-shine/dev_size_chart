import React from 'react';
import '../assets/style.css';

const TableData = () =>{
   
    const data = [
        {title:'head1', firstname:'Nahid', lastName:'Prawez'},
        {title:'head2', firstname:'Nahid1', lastName:'Prawez1'},
        {title:'head3', firstname:'Nahid2', lastName:'Prawez2'},
        {title:'head3', firstname:'Nahid3', lastName:'Prawez3'},
    ]


    return (
      <>
        <div>
            <table>
                <thead>
                    <tr>
                    {data.map((heading, key)=>{ 
                      return (
                            <th key={key}> {heading.title}</th>
                        )})}
                        </tr>
                    </thead>
                <tbody>
                    {data.map((myData, index)=>{
                        return(
                            <>
                            <tr>
                                <td key={index}>{myData.firstname}</td>
                            </tr>
                            <tr>       
                                <td key={index}>{myData.lastName}</td>    
                            </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
      </>
  )
}

export default TableData;