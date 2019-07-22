import React from "react";
import Man from '../photos/man_scoreboard.png';
import Woman from '../photos/woman_scoreboard.png';
import Robot from '../photos/robot_scoreboard.png';
import { Column } from '../components/Column';
import {QuestionCard} from '../components/QuestionCard'

export const Board=({state,onClick,handleAnswerInput,handleQuestionSubmit})=>{
  //Destructuring Props 
  const {avatar,avatarSelected,score,name,gameQuestions} = state;
  let pixelatedPhotos=[Man,Woman,Robot];
    //Score Board Filtering
    avatar.map((el,i)=>el.picture=pixelatedPhotos[i])
let filteredAvatar = avatar.filter(el => el.value === `${avatarSelected}`);
  

  //Rendering of Game Categories
  let renderColumns=gameQuestions.map((el,i)=>{
   return(
        <Column 
            category={el.category} 
            questions={el.questions}
            column={i}
            key={i} 
            onClick={onClick}
          />
    )
})  
//Check to see if all questions are answered
  //RENDERING
  if(!state.clickedQuestionToggle){
  return(
    <div className="game"> 
        
        <div className="question_board_container">
          {renderColumns}
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
}else{
  return(
  <div className="game"> 
    <QuestionCard 
      card={state.clickedQuestion}
      onChange={handleAnswerInput}
      onSubmit={handleQuestionSubmit}
    />
  </div>)
}
}
