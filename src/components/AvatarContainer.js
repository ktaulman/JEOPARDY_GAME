import React from "react";

export const AvatarContainer=({src,handleAvatarClick,step})=>{
  function renderAvatar(i){
      return(
        <div>
          <input 
            type="image" className={src[i].className} src={src[i].picture} 
            onClick={()=>handleAvatarClick(i)} 
            alt='' 
            value={src[i].value} 
            key={i} 
          />
      </div>
      )
    }
    
  if (step === 2) {
    const mapped = src.map((el, i) =>renderAvatar(i));
    return (
      <div className="avatarsContainer">
        {mapped}
      </div>
      );
    }
    else {
      return (
      <div></div>
      ) 
    }
}
