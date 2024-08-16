"use client";
import React from "react";
import { useEffect, useState } from "react";
const page = () => {
  const [data, setdata] = useState([]);
  const fetchData=(e)=>{
    e.preventDefault()
    const fetchData = async () => {
      try {
        const link =
          "https://66bc6d0124da2de7ff6a72f4.mockapi.io/api/v1/booking";
        const result = await fetch(link);
        const todo = await result.json();
        setdata(todo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }
  

  return (
    <>
      <h1>client side rendering</h1>
      <button className="bg-lime-500 p-2 text-black font-bold" onClick={fetchData}>fetch data</button>
      {data.length > 0 ? (
        data.map((ele) => (
          <div
            key={ele.id}
            className="bg-white mx-5 my-5 text-black flex justify-around font-bold w-[200px]"
          >
            <h2>{ele.name}</h2>
            <p>{ele.code}</p>
          </div>
        ))
      ) : (
        <p>No bookings available</p>
      )}
    </>
  );
};

export default page;

// in next it use server side render by default and it not alow to use usesate and iueeffect like react bc its use in client side render for that we can make a client side render component buy add "use client"
