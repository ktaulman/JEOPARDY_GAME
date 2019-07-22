import React from "react";

//Photos
import Stage from '../photos/Stage.png';
import AlexName from '../photos/Alex_Name.png';
import AlexAvatar from '../photos/Alex_Avatar.png';
import Man from '../photos/man.png';
import Woman from '../photos/woman.png';
import Robot from '../photos/robot.png';
//Mock JSON 
import jsonResponse from "./steps";
import gameQuestions from './gameQuestions';


//Components

import { Board } from "./Board";
import { StartMenuCopy } from './StartMenuCopy';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          //GAME DATA STATES
          counter: 0,
          data: [{}],
          gameQuestions:[{}],
          //START MENU STATEES
          photos: [Stage, AlexName, AlexAvatar],
          avatar: [
            { picture: Man, value: 'Man', className: 'avatar' },
            { picture: Woman, value: "Woman", className: 'avatar' },
            { picture: Robot, value: "Robot", className: 'avatar' },
          ],
          name: '',
          avatarSelected: '',
          finalizeCharacter: false,
          startGame:false,
          //GAME BOARD STATES 
          score: 0,
          clickedCoordinates:[],
          clickedQuestionToggle:false,
          clickedQuestion:{},
          clickedAnswer:'',
          answeredCounter:0,
        };
      }



//METHODS

//FOR THE START MENU **********///
  handleButtonClick() {
    let {counter,avatarSelected,finalizeCharacter,name,data,startGame}=this.state;
    if (counter === 0) {
      this.setState({
        counter: counter + 1,
      });
    }
    else if (counter === 1) {
      if(!name){
            let dataCopy=[...data];
            let text=document.getElementById('text')
            text.classList.add('yellow_text');

            dataCopy[1].text="Please enter a name";
            this.setState({data:dataCopy})
        }
        else{
            this.setState({
                counter:counter + 1,
            });
        }
    }
    else if (counter === 2 && avatarSelected) {
      this.setState({ finalizeCharacter: !finalizeCharacter,counter:counter+1 });
    }
    else if(counter===3){
        this.setState({startGame:!startGame});
        this.setState({})
    }
  }

  handleAvatarClick(i) {
    let avatarCopy = [...this.state.avatar];
    if (this.state.avatarSelected) {return;};
    avatarCopy[i].className = "avatar selected";
    console.log(avatarCopy[i]);
    this.setState({ avatarSelected: this.state.avatar[i].value, avatar: avatarCopy });
    let dataCopy = [...this.state.data];
    console.log(dataCopy[2]);
    dataCopy[2].button = "Finalize Character";
    this.setState({ data: dataCopy });
    }
  handleEnter(e) {
    if (e.key === 'Enter') {
      console.log('Enter');
      this.setState({
        name: e.target.value,
        counter: this.state.counter + 1
      });
    }
  }
  handleInputChange(e) {
    this.setState({ name: e.target.value });
  }
//FOR THE GAME BOARD**************//

  handleQuestionClick(x,y){
    console.log(this.state.clickedCoordinates);
    if(this.state.gameQuestions[x].questions[y].answered==='yes') return;
    
    let questionsCopy=this.state.gameQuestions.slice();
    questionsCopy[x].questions[y].answered="yes";
    
    this.setState({
      clickedCoordinates:[x,y],
      clickedQuestion:this.state.gameQuestions[x].questions[y],
      clickedQuestionToggle:!this.state.clickedQuestionToggle,
      gameQuestions:questionsCopy,
    })
    document.getElementById(`question_${x}_${y}`).innerHTML='';
  }
  handleAnswerInput(e){
    this.setState({clickedAnswer:e.target.value})
  }
  handleReloadClick(){
    window.location.reload();
  }
  handleQuestionSubmit(){
    if(!this.state.clickedAnswer){console.log('no answer')}
    else{
      console.log("there's input")
      //logic for finding answer
      let userAnswer=this.state.clickedAnswer.toLowerCase().replace(' ','');
      let correctAnswer=this.state.clickedQuestion.answer.toLowerCase().replace(' ','');
      
      let displayCorrect=()=>{
        document.getElementById('question_result').innerHTML='CORRECT!';
        let scoreCopy=Number(String(this.state.score).slice());
        let total=scoreCopy+Number(this.state.clickedQuestion.points.replace('$',''));
        this.setState({score:total})

        let x=this.state.clickedCoordinates[0];
        let y=this.state.clickedCoordinates[1];
        let questionsCopy=this.state.gameQuestions;
        questionsCopy[x].questions[y].points='';
        this.setState({gameQuestions:questionsCopy})

      }
      let displayIncorrect=()=>{
        document.getElementById('question_result').innerHTML=`Incorrect the answer was ${this.state.clickedQuestion.answer.toUpperCase()}`;
        let scoreCopy=Number(String(this.state.score).slice());
        let total=scoreCopy-Number(this.state.clickedQuestion.points.replace('$',''));
        this.setState({score:total})

        let x=this.state.clickedCoordinates[0];
        let y=this.state.clickedCoordinates[1];
        let questionsCopy=this.state.gameQuestions;
        questionsCopy[x].questions[y].points='';
        this.setState({gameQuestions:questionsCopy})
      }
      userAnswer===correctAnswer?displayCorrect():displayIncorrect();
      
      let exitCard=()=>{
        this.setState({
          clickedQuestionToggle:!this.state.clickedQuestionToggle,
          answeredCounter:this.state.answeredCounter+1,
        })
      }

      setTimeout(exitCard,2000)
    }
    
  }
 

  //MOUNTING
  componentWillMount() {
    this.setState({gameQuestions:gameQuestions});
    this.setState({ data: jsonResponse });
  }
  //RENDERING
    render() {

        //End Game Screen
        if(this.state.answeredCounter===9){
            let avatarsArray = this.state.avatar;
            let filteredAvatar = avatarsArray.filter(el => el.value === `${this.state.avatarSelected}`);
            console.log(filteredAvatar);
            return (
              <div className="game finalized">
                <h1>Congrats!!!</h1>
                <p>{this.state.name}</p>
                <img 
                    className="finalizedImage" 
                    src={filteredAvatar[0].picture} 
                    alt='' 
                />
                <p>Your score was:${this.state.score}</p>
                 <button onClick={this.handleReloadClick}>Restart</button>
              </div>
            )
        }

      if(!this.state.startGame){
          return (
            <div className='game'>
                <StartMenuCopy 
                    state={this.state} 
                    handleEnter={this.handleEnter.bind(this)}
                    handleInputChange={this.handleInputChange.bind(this)}

                    handleAvatarClick={(i)=>this.handleAvatarClick(i)}

                    handleButtonClick={this.handleButtonClick.bind(this)}
                />
            </div>
        
        )
      }
      else{
          return(
               <Board 
                    state={this.state}
                    
                    onClick={(x,y)=>this.handleQuestionClick.bind(this,x,y)}
                    
                    handleAnswerInput={(e)=>this.handleAnswerInput(e)}

                    handleQuestionSubmit={this.handleQuestionSubmit.bind(this)}
                />
            )
        }
        
    }
}
