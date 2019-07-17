import React from "react";
export const Button=({onClick,step})=>{
  return (
  <div>
    <button 
      onClick={onClick}
    >
      {step}
    </button>
  </div>
  );
}
