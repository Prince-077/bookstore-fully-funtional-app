import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from 'axios';
import Nodecontext from "./Nodecontext";
import { useContext } from "react";


function Freebook(props) {
  //const elem = list.filter((data) => data.category === "free");
  const [book,setbook] = useState([]);
  const a = useContext(Nodecontext);
  useEffect(()=>{
    const book =  async ()=>{
        const response = await axios.get("http://localhost:3000/api");
        const elem = response.data.filter((item) => item.category ==='free');
        console.log(elem);
        setbook(elem);
    }
    book();    

  },[a]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free book courses</h1>
          <p className="font-bold ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            explicabo veritatis ratione officiis labore eum?
          </p>
        </div>
      </div>
      <div className="mt-3">
        <div className="r">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
