import React from "react";

const HeroItem = (props) => {
  const {
   text,
   value
  } = props
  return (
    <div className="flex flex-col">
      <h2 className="text-xl">{value}</h2>
      <h3 className="text-lg">{text}</h3>
    </div>
  );
};

export default HeroItem;
