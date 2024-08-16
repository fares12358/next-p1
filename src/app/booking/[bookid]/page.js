import React from "react";
import BookDetails from "@/app/components/BookDetails";
import { Suspense } from "react";
const page = async (props) => {
  const id = props.params.bookid;
  return (
    <>
      <div>page booking id</div>
      <Suspense fallback={<><h1>loading the component</h1></>}>
        <BookDetails postId={id} />
      </Suspense>
    </>
  );
};

export default page;

//Suspense is use to view the component that is ready  not wait for all page to be ready
// fallback to view a component to like loading the component