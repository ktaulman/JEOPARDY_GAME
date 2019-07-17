import React from "react";
export function Button({onClick,step}) {
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
