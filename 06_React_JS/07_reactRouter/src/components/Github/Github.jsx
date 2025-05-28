import React, { useState } from "react";
import { useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Anandkum4r")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="bg-gray-100 text-black p-4 rounded-lg shadow-md">
      Github Followers: {data.followers}
      <img
        className="w-24 h-24 rounded-full mx-auto mt-4"
        src="https://avatars.githubusercontent.com/u/130299086?v=4"
        alt="Git Picture"
      />
    </div>
  );
}

export default Github;
