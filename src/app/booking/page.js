import Link from "next/link";
import React from "react";
const page = async () => {
  // server side generation ssg api
  //cache : ="force-cache"    /// to stor the data that fetch for ever in the server ssg
  // cache: "no-store", /// to not stor the data that fetch for ever in the server ssr

  const link = "https://66bc6d0124da2de7ff6a72f4.mockapi.io/api/v1/booking";

  const result = await fetch(link, {
    // cache:"force-cache",
    // cache: "no-store",
    // to cache data  and remove it after 60 s
    next:{
      revalidate:60, //60 scnd
    }
  });
  const todo = await result.json();

  return (
    <>
      <h1>booking page</h1>
      {todo.length > 0 ? (
        todo.map((ele, i = 0) => (
          <Link
            key={ele.id}
            className="bg-white mx-5 my-5 text-black flex justify-around font-bold"
            href={`booking/${ele.id}`}
          >
            <p>{i++}</p>
            <h2>{ele.name}</h2>
            <p>{ele.code}</p>
            <p>{ele.phone}</p>
            <p>{ele.services}</p>
            <p>{ele.day}</p>
            <p>{ele.time}</p>
          </Link>
        ))
      ) : (
        <p>No bookings available</p>
      )}
    </>
  );
};

export default page;

// y can use the fetch nad async await prommis fetch in server side render only it only allow with next not with react for not making have lopping rendering
