import React, { useState } from "react";

const Convertor = () =>{
    const [result, setResult] = useState(1);
    const [resultMM, setresultMM] = useState(1);
    const [resultMeter, setresultMeter] = useState(1);
    const [resultKM, setresultKM] = useState(1);

     const finalData = (e) => {
         console.log("Changing the data");
         setResult(e.target.value);
     }
    
     const HandleChangeMM = (e) => {
         setresultMM(e.target.value);
     }

     const handleChangeMeter = (e) => {
         setresultMeter(e.target.value);
     }

     const handleChangeKM = (e) => {
         setresultKM(e.target.value);
     }
    return (
        <> 
         <b> Conversion from Centimeter</b>
           <form >
              Enter a number ( in CM ) : <input type="number" value={result} onChange = {finalData}/>
              <p>Final Result in mm: {result * 10} mm</p>
              <p>Final result in inches : {result / 2.54} inches</p>
              <p>Final result in feet : {result / 30.48} feet</p>
           </form>

           <b> Conversion from Milimeter</b>
           <form >
              Enter a number ( in MM ) : <input type="number" value={resultMM} onChange = {HandleChangeMM}/>
              <p>Final Result in CM: {resultMM / 10} cm</p>
              <p>Final result in inches : {resultMM / 25.4} inches</p>
              <p>Final result in feet : {resultMM / 305} feet</p>
           </form>

           <b> Conversion from Meter</b>
                <form >
                    Enter a number ( in Meter ) : <input type="number" value={resultMeter} onChange = {handleChangeMeter}/>
                    <p>Final Result in CM: {resultMeter * 100} cm</p>
                    <p>Final result in inches : {resultMeter * 39.37} inches</p>
                    <p>Final result in feet : {resultMeter * 3.281} feet</p>
                </form>

            <b> Conversion from Kilometer</b>
            <form >
                Enter a number ( in Kilometer ) KM : <input type="number" value={resultKM} onChange = {handleChangeKM}/>
                <p>Final Result in Miles: {resultKM / 1.609} Miles</p>
                <p>Final Result in Centimeter : {resultKM * 100000} cm</p>
                <p>Final result in inches : {resultKM * 39370} inches</p>
                <p>Final result in feet : {resultKM * 3281} feet</p>
            </form>
        </>
    )
}

export default Convertor;