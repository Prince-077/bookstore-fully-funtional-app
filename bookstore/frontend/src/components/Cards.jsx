import React from "react";

function Cards(props) {
  // console.log(props.item);

  return (
    <>
    <div>
      <div className="card bg-base-100 shadow-xl z-0 my-3 ml-4 cursor-pointer hover:scale-110 transition-all ease-in-out min-w-96 ">
        <figure>
          <img
            src="../../public/book.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.item.name}
            <div className="badge badge-secondary">{props.item.category}</div>
          </h2>
          <p>{props.item.tittle}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{props.item.price}</div>
            <div className="badge badge-outline font-semibold p-1 rounded-md hover:text-white hover:bg-red-500">Buy now</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
