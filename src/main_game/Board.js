import React from "react";

export const Board=({state})=>{
  state.gameQuestions.map(el=>console.log(el))
  return(
   
    <div className='game' id="game_board"> 
        <div>
          <img src={state.}"/>
        </div>
        <div id="question_board">
          <div>Athletes</div>
          <div>$100</div>
          <div>$200</div>
          <div>$300</div>
        </div>
        <div>
          <div>Movies</div>
          <div>$100</div>
          <div>$200</div>
          <div>$300</div>
        </div>
        <div>
          <div>Category</div>
          <div>$100</div>
          <div>$200</div>
          <div>$300</div>
        </div>
    </div>
  )
}
