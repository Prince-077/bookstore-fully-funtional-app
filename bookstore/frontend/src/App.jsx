import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Base from "./components/base/Base";
import toast, { Toaster } from 'react-hot-toast';
import Course from "./components/courses/Course";
import Signup from "./components/Signup";
import { useContext } from "react";
import Nodecontext from "./components/Nodecontext";

function App() {
  const{isauth,setauth}= useContext(Nodecontext);
  console.log(isauth);
  return (
    <div>
    <Routes>
      <Route path="/" element={<Base />} />
      <Route path="/Course" element={isauth ? <Course /> :<Navigate to="/Signup"/>} />
      <Route path="/Signup" element={<Signup />}/>
    </Routes>
     <Toaster />
     </div>
  
  );
}

export default App;
