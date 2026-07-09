import React from "react";

const Strength = ({ key, strength }) => {
  return (
      <div key={key} className="flex items-center gap-3 mb-5">
        <div>
          <h2 className="text-md text-black/70 font-semibold">{strength}</h2>
        </div>
      </div>
  );
};

export default Strength;
