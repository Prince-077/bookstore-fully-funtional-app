import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

function Cour() {

  const [book,setbook] = useState([]);

  useEffect(()=>{
    const data = async()=>{
      const response = await axios.get("http://localhost:3000/api");
      console.log(response.data);
      setbook(response.data);
    }
    data();

  },[]);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-32 mx-3">
        <div className="items-center justify-center text-center ">
          <h1 className="font-bold text-3xl mt-auto">
            WE are fdvkjf fdskff delighenbf fsjd bfeefg((
            <span className="text-pink-600">jejdejb</span>
          </h1>
          <p className="font-semibold my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            autem assumenda dignissimos deserunt atque maxime sapiente aperiam
            ducimus distinctio aut.
          </p>
          <a href="/">
            {" "}
            <input
              className=" w-16 border-indigo-600 p-1 font-semibold px-2 bg-red-600 rounded-lg text-base-200 cursor-pointer hover:bg-red-400 hover:scale-110 transition-all ease-in-out duration-200"
              type="button"
              value="back"
            />
          </a>
        </div>
        <div className="mr-28">
          <div className="mt-12 grid grid-cols-1  md:grid-cols-3">
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cour;
