import React from "react";
import ReactDOM from "react-dom";
//Photos
import Stage from './photos/Stage.png';
import AlexName from './photos/Alex_Name.png';
import AlexAvatar from './photos/Alex_Avatar.png';

import Man from './photos/man.png';
import Woman from './photos/woman.png';
import Robot from './photos/robot.png';

//CSS
import "./index.css";
import jsonResponse from "./steps";

//FUNCTIONS ALL SO FAR ARE FOR THE <STARTMENU />
//ALL BELOW ARE "PURE FUNCTIONS"
function Window(props) {
  // const path=props.src;
 return (
  <div>
    <img src={props.src} alt=""/>
  </div>
 );
}
function Text(props) {
 if(props.step){return (
  <div>
   <h2 className="text">{props.step}</h2>
   <h5>{props.name}</h5>
  </div>
 )}else{
   return <div></div>
 }
}

function Button(props) {
 return (
  <div>
   <button onClick={props.onClick}>{props.step}</button>
  </div>
 );
}

function Input(props) {
 if (props.step===1) {
  return (
   <div>
    <input onKeyPress={props.onEnter} type="text" />
   </div>
  );
 } else {
  return <div> </div>;
 }
}
function Square(props){
  return(
      <img 
        src={props.src} 
        onClick={props.onClick}
        alt=''
        value={props.value}//detail here 
        className="avatar"
        /> 
  )
}

class Avatar extends React.Component{
  renderSquare(i){
    return(
      <Square 
        src={this.props.src[i].picture}
        value={this.props.src[i].gender}
        onClick={()=>this.props.onClick(i)}
      />
    )
  }
  render(){
    const array=this.props.src;
    const mapped= array.map((el,i)=>this.renderSquare(i));
  if(this.props.step===2){
    return(
      <div className="avatarsContainer">
        {mapped}
      </div>
    )
  }else{
    return <div></div>
  }


}
}

function State(props){
  return(
    <div>
      Counter: {props.step.counter},
      Name: {props.step.name},
      Score: {props.step.score},
      Player: {props.step.player.gender}
    </div>
  )
}
//MAIN START MENU
class StartMenu extends React.Component {
 ///PROPS
 constructor(props) {
  super(props);
  this.state = {
    counter:0,
   data: [{}],
   photos:[Stage,AlexName,AlexAvatar],
   avatar:[
      {picture:Man,gender:'man'},
      {picture:Woman,gender:"woman"},
      {picture:Robot,gender:"Robot"},
    
    ],
   name: "empty",
   score: 0,
   player:[]
  };
 }
//METHODS
handleClick(){
  this.setState({
    counter:this.state.counter+1
  });
}
handleAvatarClick(i){
  const {player,avatar}=this.state;

  this.setState({
    player:player.push(avatar[i])
  })
  player.className="selected";
  console.log(this.player.selected)
}

handleEnter(e){
  if(e.key==='Enter'){
  console.log('Enter')
  this.setState({
    name:e.target.value,
    counter:this.state.counter+1
    });
  }
}

//MOUNTING
  componentWillMount(){
    console.log(jsonResponse)
    this.setState({data:jsonResponse});
   }

//RENDERING
 render() {
  const {data,counter,photos,avatar}=this.state;
  
  return (
   <div className="game">
    <h1 className="game-title">8-bit JEOPARDY</h1>

    <Window src={photos[counter]} />

    <Text step={data[counter].text} />

    <Input
     step={counter}
     onEnter={this.handleEnter.bind(this)}
    />

    <Avatar 
      step={counter}
      src={avatar}
      onClick={(i) => this.handleAvatarClick(i)}
    />
     <Button
     step={data[counter].button}
     onClick={this.handleClick.bind(this)}
    />
    <div>
      <State step={this.state}/>
    </div>
   </div>
  );
 }
}


class Board extends React.Component {
  render(){
    return(
      <div className='board'>
        <StartMenu/>
      </div>
    )
  }
}

class App extends React.Component {
 render() {
  return (
   <div>
    <Board />
   </div>
  );
 }
}

ReactDOM.render(<App />, document.getElementById("root"));
