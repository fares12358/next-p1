import React from "react";

const BookDetails = async (props) => {
  const id=props.postId;
  await new Promise((resolve) =>{
    setTimeout(() => {
      resolve();
    }, 2000);
  })
  const result = await fetch(
    `https://66bc6d0124da2de7ff6a72f4.mockapi.io/api/v1/booking/${id}`
  );
  const todo = await result.json();
  return (
    <>
      <div
        key={todo.id}
        className="bg-white mx-5 my-5 text-black flex justify-around items-center font-bold h-28 "
      >
        <h2>{todo.name}</h2>
        <p>{todo.code}</p>
        <p>{todo.phone}</p>
        <p>{todo.services}</p>
        <p>{todo.day}</p>
        <p>{todo.time}</p>
      </div>
    </>
  );
};

export default BookDetails;
