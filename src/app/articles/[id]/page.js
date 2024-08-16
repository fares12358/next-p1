import React from "react";

const page = (props) => {
  return (
    <>
      <h1 className="text-xl text-red-700">id</h1>
      
      <span className="text-amber-300 text-3xl">{props.params.id}</span>
    </>
  );
};

export default page;
