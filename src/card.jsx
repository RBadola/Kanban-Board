import React from "react";

const Card = ({ name, desc }) => {
  return (
    <div
      draggable={true}
      className="h-24 w-full bg-gray-600 text-white text-center p-1 my-1 rounded-md select-none"
    >
      <p>{name}</p>
      {desc}
    </div>
  );
};

export default Card;
