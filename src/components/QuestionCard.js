import React from 'react';

export const QuestionCard=(props)=>{
    let {card}=props;
    return(
        <div className="clickedQuestion">
        
            <div className="question_container">
                <h1 className='h1'>{card.question}</h1>
                <div className="question_submit_form">
                    <h2 className="h2_question_card">
                        {card.format}
                    </h2>
                    <input onChange={props.onChange}></input>
                    <button onClick={props.onSubmit}>Submit</button>
                </div>
            </div>
            <div className="answer_container">
                <p id="question_result"></p>
            </div>
        </div>
    )
}