import React from "react";
// custom the page title meta data html element for seo
export const metadata = {
  title: "articles main page",
};
const layout = ({ children }) => {
  return (
    <>
      <h1>articles main</h1>
      {children}
    </>
  );
};

export default layout;
