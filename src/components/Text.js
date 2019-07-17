import React from "react";
export const Text=({step,name})=>{
  if (step) {
    return (<div>
      <h2 className="text" id="text">{step}</h2>
      <h5>{name}</h5>
    </div>);
  }
  else {
    return <div></div>;
  }
}
