import {React, useCallback, useState} from "react";
import {YoutubeOutlined} from '@ant-design/icons';
import '../../assets/style.css';
import { TextField } from "@shopify/polaris";



const VideoComp = () => {
    const [url, setUrl] = useState("");
    const [value, setValue] = useState('');


    const handleChange =  useCallback((newVal) => setValue(newVal),[]);

    console.log(value);

    const checkUrl = () => {
         const UrlSet = value;
         console.log('Final url is :'+UrlSet);
         setUrl(UrlSet);
    }
    // setUrl(value);


    return(
        <>
          <TextField 
                 label = "Enter Youtube Url"
                 value= {value}
                 onChange = {handleChange}
                 autoComplete = 'off'
            /> 
             <button onClick={checkUrl}>Run Demo</button>
          <div className="youtubeComp">
              <YoutubeOutlined />
              <iframe src= {url} height ="100%" referrerPolicy="allow-same-origin" width='500px'> </iframe>
          </div>
        </>
    )
}

export default VideoComp;