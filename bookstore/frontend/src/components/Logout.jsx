import React from 'react'
import Nodecontext from './Nodecontext'
import { useContext } from 'react'
import toast from 'react-hot-toast';

function Logout() {
    const {isauth,setauth}= useContext(Nodecontext);
    const out = ()=>{
        try{
        console.log(isauth);
        setauth({...isauth,user: null});
        localStorage.removeItem("user");
        toast.success("logout out sucessfully");
        window.location.reload();
    }
        catch(e){
            console.log("errorrr" ,e );
        }


    }

  return (
    <>
    <button onClick={out} className='bg-red-800 p-2 font-semibold text-white rounded-md'>Logout</button>
    </>
  )
}

export default Logout
