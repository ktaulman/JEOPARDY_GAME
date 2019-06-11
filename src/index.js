import React from "react";
import ReactDOM from "react-dom";
//STEPS
import { steps } from "./steps";

//CSS
import "./index.css";

//FUNCTIONS ALL SO FAR ARE FOR THE <STARTMENU />
//ALL BELOW ARE "PURE FUNCTIONS"
function Window(props) {
 return (
  <div>
   <img src={props.step} alt="" />
  </div>
 );
}
function Text(props) {
 return (
  <div>
   <h2 className="text">{props.step}</h2>
  </div>
 );
}

function Button(props) {
 return (
  <div>
   <button onClick={props.onClick}>{props.step}</button>
  </div>
 );
}

function Input(props) {
 if (props.true) {
  return (
   <div onKeyDown={props.onEnter}>
    <input type="text" />
   </div>
  );
 } else {
  return <div> </div>;
 }
}

//MAIN START MENU
class StartMenu extends React.Component {
 constructor(props) {
  super(props);
  //STATES
  this.state = {
   step: 0,
   name: "",
   score: 0,
   player: ""
  };
  this.handleInputEnter = this.handleInputEnter.bind(this);
 }
 handleClick() {
  //DO NOT MUTATE STATE, so I made a copy.
  const step = this.state.step;
  const recycle = 0;
  //Increment step by adding it to itself.
  if (this.state.step < 2) {
   if (this.state.name) {
    console.log(this.state.name);
   }
   this.setState({
    step: step + 1
   });
  } else {
   this.setState({
    step: recycle
   });
  }
 }

 handleInputEnter(e) {
   this.setState({ name: e.target.value });
   }

 render() {
  return (
   <div className="game">
    <h1 className="game-title">8-bit JEOPARDY</h1>

    <Window step={steps[`${this.state.step}`].window} />

    <Text step={steps[`${this.state.step}`].text} />

    <Input
     true={steps[`${this.state.step}`].displayInput}
     onEnter={this.handleInputEnter}
    />

    <Button
     step={steps[`${this.state.step}`].button}
     onClick={this.handleClick.bind(this)}
    />
   </div>
  );
 }
}

class App extends React.Component {
 render() {
  return (
   <div>
    <StartMenu />
   </div>
  );
 }
}

ReactDOM.render(<App />, document.getElementById("root"));
