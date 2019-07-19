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
import Input from '../components/Input'


//Components

import { Board } from "./Board";
import { StartMenuCopy } from './StartMenuCopy';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          data: [{}],
          gameQuestions:[{}],
          photos: [Stage, AlexName, AlexAvatar],
          avatar: [
            { picture: Man, value: 'Man', className: 'avatar' },
            { picture: Woman, value: "Woman", className: 'avatar' },
            { picture: Robot, value: "Robot", className: 'avatar' },
          ],
          name: 'Kevin',
          score: 0,
          avatarSelected: 'Man',
          finalizeCharacter: false,
          startGame:false,
        };
      }



//METHODS
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

  handleQuestionBoxClick(){
    console.log("question box clicked")
  }

  //MOUNTING
  componentWillMount() {
    this.setState({gameQuestions:gameQuestions});
    this.setState({ data: jsonResponse });
  }
  //RENDERING
    render() {
        let state=this.state;
        if(state.startGame){
            return (
            <div className='game'>
                <StartMenuCopy 
                    state={state} 
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
                    state={state}
                    handleQuestionBoxClick={this.handleQuestionBoxClick}
                />
            )
        }
        
    }
}
