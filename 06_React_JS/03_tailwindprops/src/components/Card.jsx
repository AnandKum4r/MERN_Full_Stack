import React from "react";

function Card({ username, btnText="Click Here" }) {
  console.log(username);

  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt=""
          src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png"
        />
      </div>
      <div className="flex items-center md:items-start">
        <span className="text-2xl font-medium">Geeky {username} </span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400"> <br/>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {btnText}
          </button>
        </span>
      </div>
    </div>
  );
}

export default Card;
