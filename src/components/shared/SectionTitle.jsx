import React from "react";

const SectionTitle = ({ title, icon }) => {
  return (
    <div className="max-w-fit mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center pt-4">
        {icon}
        {title}
      </h2>
      <div className="border mb-12 mt-1 mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
