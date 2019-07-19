import React from "react";
import Man from '../photos/man_scoreboard.png';
import Woman from '../photos/woman_scoreboard.png';
import Robot from '../photos/robot_scoreboard.png';

export const Board=({state})=>{
  
  const {avatar,avatarSelected,score,name} = state;
  let pixelatedPhotos=[Man,Woman,Robot];

  avatar.map((el,i)=>{
        el.picture=pixelatedPhotos[i];
    })
  let filteredAvatar = avatar.filter(el => el.value === `${avatarSelected}`);
  
  
  return(
    <div className="game"> 
        <div className="question_board_container">
          <div className="question_board_column">
            <div className="question_board_category">
              {state.gameQuestions[0].category}
            </div>
            <div className="question_board_question">$100</div>
            <div className="question_board_question">$200</div>
            <div className="question_board_question">$300</div>
          </div>

          <div className="question_board_column">
            <div className="question_board_category">
              {state.gameQuestions[1].category}
            </div>
            <div className="question_board_question">$100</div>
            <div className="question_board_question">$200</div>
            <div className="question_board_question">$300</div>
          </div>

          <div className="question_board_column">
            <div className="question_board_category">
              {state.gameQuestions[2].category}
            </div>
            <div className="question_board_question">$100</div>
            <div className="question_board_question">$200</div>
            <div className="question_board_question">$300</div>
        </div>
        
    </div>
    <div className='score_board_container'>
         
         <p className="score_board_name">
           <u>Name:</u> {name}
         </p>
         <img 
                 className="score_board_image" 
                 src={filteredAvatar[0].picture} 
                 alt=''  
         />
         <p className="score_board_score">
           <u>Score:</u>${score}
         </p>
         
    </div>
  </div>
  )
}
