import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-11/12 mx-auto max-w-screen-xl bg-base-100 border border-transparent">
      {children}
    </div>
  );
};

export default Container;
