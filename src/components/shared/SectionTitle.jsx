import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const SectionTitle = ({ title, icon }) => {
  const { isDark } = useContext(AuthContext);
  const theme = isDark;

  return (
    <div key={theme} className="max-w-fit mx-auto">
      <h2
        className={`text-2xl sm:text-3xl font-semibold text-center pt-4 ${
          theme ? "!text-white" : "!text-black"
        }`}
      >
        {icon}
        {title}
      </h2>
      <div className="border mb-12 mt-1 mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
