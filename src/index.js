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
    <img className="window"src={props.src} alt=""/>
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
    <input onKeyPress={props.onEnter} type="text" className='input'/>
   </div>
  );
 } else {
  return <div> </div>;
 }
}
function AvatarSquare(props){
  return(
      <div >
      <input
        type="image"
        className={props.avatarClassName}
        src={props.src} 
        onClick={props.onClick}
        alt=''
        value={props.value}
        key={props.keyValue}
        /> 
        </div>
  )
}

class Avatar extends React.Component{
  renderAvatar(i){
    return(
      <AvatarSquare
        src={this.props.src[i].picture}
        value={this.props.src[i].value}
        onClick={()=>this.props.onClick(i)}
        key={i}
        avatarClassName={this.props.src[i].className}
      />
    )
  }
  render(){
    const array=this.props.src;
    const mapped= array.map((el,i)=>this.renderAvatar(i));
    
    if(this.props.step===2){
      return(
        <div className="avatarsContainer">
          {mapped}
        </div>
      )
    }
    else{
      return(
        <div></div>
      )
    }
  }
}

//MAIN START MENU
//
//
class StartMenu extends React.Component {
 ///PROPS
 constructor(props) {
  super(props);
  this.state = {
   counter:0,
   data: [{}],
   photos:[Stage,AlexName,AlexAvatar],
   avatar:[
      {picture:Man,value:'Man',className:'avatar'},
      {picture:Woman,value:"Woman",className:'avatar'},
      {picture:Robot,value:"Robot",className:'avatar'},
    ],
   name: '',
   score: 0,
   avatarSelected:'',
   finalizeCharacter:false,
  };
 }
//METHODS
handleButtonClick(){
  if(this.state.counter===0){
    this.setState({
      counter:this.state.counter+1,
    })
  }
  if(this.state.counter===1){
    this.setState({
      counter:this.state.counter+1,
    })
  }
  if(this.state.counter===2&&this.state.avatarSelected){
    this.setState({finalizeCharacter:!this.state.finalizeCharacter})
  }
}
handleReload(){
  window.location.reload();
}

handleAvatarClick(i){
  let avatarCopy=[...this.state.avatar]
  if(this.state.avatarSelected){
    return
  };
  avatarCopy[i].className="avatar selected"  
  this.setState({avatarSelected:this.state.avatar[i].value,avatar:avatarCopy})
  let dataCopy=[...this.state.data];
  console.log(dataCopy[2]);
  dataCopy[2].button="Finalize Character";
  this.setState({data:dataCopy});
  console.log(this.state.finalizeCharacter);
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
    console.log(jsonResponse);
    this.setState({data:jsonResponse});
   }

//RENDERING
 render() {
  const {data,counter,photos,avatar}=this.state;
  if(!this.state.data){
    return(<div>Loading...</div>)
  }
  
  if(!this.state.finalizeCharacter){
    return (
   <div className="game">

    <div className="startMenu_Top">
      <h1 className="game-title">8-bit JEOPARDY</h1>
      <Window className="window" src={photos[counter]} />
      <Text step={data[counter].text} />
    </div>

    <div className="startMenu_Bottom">
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
          onClick={this.handleButtonClick.bind(this)}
      />
    </div>
    </div>
  )
  }
  else{
    let avatars=this.state.avatar;
    let filteredAvatar=avatars.filter(el=>el.value===`${this.state.avatarSelected}`);
    console.log(filteredAvatar);
    return(
    <div className="game finalized">
      
      <h1>You Selected...</h1>
      <p>Name: {this.state.name}</p>
      <img className="finalizedImage" src={filteredAvatar[0].picture }alt=''/>
      <button className="button" onClick={this.handleReload.bind(this)}>Reload</button>
      
    </div>
    )
  }
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
