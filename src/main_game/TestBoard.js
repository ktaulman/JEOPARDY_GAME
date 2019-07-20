import React from 'react';
import gameQuestions from './gameQuestions'
import { Column } from './Column';


export const TestBoard=()=>{

let renderColumns=gameQuestions.map(el=>{
    return(
        <Column 
            category={el.category} 
            questions={el.questions} 
        />
    )
})   

return(
    <div className="game question_board_container">
            {renderColumns}
    </div>
    )

}