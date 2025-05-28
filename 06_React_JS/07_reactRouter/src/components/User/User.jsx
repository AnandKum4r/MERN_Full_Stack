import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="bg-gray-100 text-black p-4 rounded-lg shadow-md">
      User: {userId}
    </div>
  );
}

export default User;
