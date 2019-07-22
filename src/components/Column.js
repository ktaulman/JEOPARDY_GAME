import React from 'react';

export const Column = (props) => {
    console.log("rendering of column "+props.column);
    
    return (
    <div className="question_board_column">
        <div className="question_board_category">
            {props.category}
        </div>
        <div 
            
            className="question_board_question"
            onClick={props.onClick(props.column,0)}
        >
           <p id={`question_${props.column}_0`}>
           {props.questions[0].points}</p>
           
        </div>
        <div 
            id={`question_${props.column}_1`}
            className="question_board_question" 
            onClick={props.onClick(props.column,1)}
        >
             <p id={`question_${props.column}_1`}>
           {props.questions[1].points}</p>

        </div>
        <div 
            className="question_board_question"
            onClick={props.onClick(props.column,2)}
        >
            
            <p id={`question_${props.column}_2`}>
           {props.questions[2].points}</p>

        </div>
    </div>);
};


//LEFTOVER CODE TO TRY 
   // console.log("column "+props.column+" being rendered")
    // let renderQuestions=(column)=>{
    //     console.log("logging input variables"+column);
    // let boxes=props.questions.map((question,index) => {
    //     console.log('mapping of'+index+""+question.points );
    //     return (
    //     <div 
    //         className="question_board_question"
    //         key={index}
    //         onClick={props.onClick}
    //     >
    //         {question.points}<br/><br/>
    //         i= {index}
    //     </div>
    //     );
    // })
    // return boxes;
    // }