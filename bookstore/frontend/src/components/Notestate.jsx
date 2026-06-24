import React, { useState } from "react";
import Nodecontext from "./Nodecontext";


const Notestate = (props)=>{
    const user = localStorage.getItem('user');

    const [isauth,setauth] = useState(user? JSON.parse(user):null);

    return(
    <Nodecontext.Provider value={{isauth,setauth}}>
        {props.children}
    </Nodecontext.Provider>
    )
}

export default Notestate;