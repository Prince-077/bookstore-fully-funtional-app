import React, { useState } from 'react'
import Login from './Login';
import axios from 'axios';
import { Navigate, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';



function Signup() {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [name,setname] = useState("");
    const navigate = useNavigate();
  


    const handlesubmit = async (e)=>{
      e.preventDefault();
      const formData =  new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("name",name);
    //console.log('email:', formData.get('email'));
    try{
      const resp =  await axios.post('http://localhost:3000/api/signup',formData,{
        headers:{
          "Content-Type": "application/json",
        },
      })
      if(resp.data){
        toast.success(resp.data.message);
        navigate('/');

      }
          
    }
    catch(err){
      toast.error(err.resp.data.message);
    }


    }

  return (
    <>
    <div className='flex justify-center items-center h-screen '>
    <div className='p-6 rounded-2xl border-[2px] shadow-md'>
        <div>
          <form>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
             <a href="/"> ✕</a> 
            </button>
          </form>
          <h3 className="font-bold text-lg mb-6 text-3xl">Signup</h3>
          <div>
            <form onSubmit={handlesubmit} >
                <label className="font-semibold">Name</label> <br />
                <input onChange={(e)=>setname(e.target.value)} value={name} className="my-3 border-0 font-semibold w-4/5 px-3" type="text" placeholder="enter your name" /> <br />
                <label className="font-semibold"> Email</label> <br />
                <input onChange={(e)=>setemail(e.target.value)} value={email} className="my-3 border-0 font-semibold w-4/5 px-3" type="email" placeholder="enter your mail id" /> <br />
                <label className="font-semibold">Password</label> <br />
                <input onChange={(e)=>setpassword(e.target.value)} value={password}  className="my-3 border-0 font-semibold w-4/5 px-3 " type="password" placeholder="enter your password" /> <br />
                <input className="bg-red-500 text-base-200 rounded-md p-2 mt-2  " type="submit" />
                <span className="ml-20 md:ml-52" >registered ? <a onClick={()=>document.getElementById('my_modal_3').showModal()} className="text-red-500 underline" >Login</a></span>
            </form>
            <Login />

          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Signup
