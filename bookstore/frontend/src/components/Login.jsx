import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import Nodecontext from "./Nodecontext";
import { useContext } from "react";
import toast from "react-hot-toast";


function Login() {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const{isauth,setauth} = useContext(Nodecontext);



  const handlesubmit = async (e)=>{
    e.preventDefault();
    const formData =  new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try{
    //console.log('password:', formData.get('password'));
    const responce = await axios.post('http://localhost:3000/api/login' , formData,{
      headers:{
        "Content-Type":"application/json",   
      },
    });
    if(responce.data){
      const res = responce.data.user;
      toast.success("user loggedin sucessfully");
      //console.log(res);
       localStorage.setItem("user", JSON.stringify(res.email));
       document.getElementById('my_modal_3').close();
       window.location.reload();
    }
  }

    catch(err){
      if(err){
      toast.error(err.data.user.message);
      }
    }
   
  }

  

  //console.log(email);
  //console.log(password)
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <a href="/">✕</a>
            </button>
          </form>
          <h3 className="font-bold text-lg mb-6 text-2xl">Login</h3>
          <div>
            <form onSubmit={handlesubmit} >
                <label className="font-semibold"> Email</label> <br />
                <input onChange={(e)=>setemail(e.target.value)} value={email} className="my-3 border-0 font-semibold w-4/5 px-3" type="email" placeholder="enter your mail id" /> <br />
                <label className="font-semibold">Password</label> <br />
                <input onChange={(e)=>setpassword(e.target.value)} value={password}  className="my-3 border-0 font-semibold w-4/5 px-3 " type="password" placeholder="enter your password" /> <br />
                <input className="bg-red-500 text-base-200 rounded-md p-2 mt-2  font-bold text-white " type="submit" />
                <span className="ml-20 md:ml-52" >not registered <a  className="text-red-500 underline" href="/Signup">signup </a></span>
            </form>

          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
