import React from "react";

export const Input=({step,onChange,onEnter})=>{
  if (step === 1) {
    return (
    <div>
      <input 
        type="text" 
        className='input' 
        onChange={onChange} 
        onKeyPress={onEnter} 
      />
    </div>
    );
  }
  else {
    return <div> </div>;
  }
}

export default Input;