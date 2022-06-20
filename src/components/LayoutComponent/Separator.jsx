import { Divider } from "antd";
import React, { useState } from "react";

const Separator = () => {

    const [HandleTitle, setHandleTitle] = useState("Your Text Here");

    return(
     <>
        <Divider plain> { HandleTitle} </Divider>
     </>
    )
}

export default Separator;