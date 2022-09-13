import React, { useEffect } from "react";

function Llink() {
  useEffect(() => {
    window.location.href = "https://docs.flagright.com";
  }, []);

  return (
    <div>
      <h2 className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out ">
        {" "}
        Contact
      </h2>
    </div>
  );
}

export default Llink;
