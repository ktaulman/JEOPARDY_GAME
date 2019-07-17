import React from "react";

//Photos
import Stage from '../photos/Stage.png';
import AlexName from '../photos/Alex_Name.png';
import AlexAvatar from '../photos/Alex_Avatar.png';
import Man from '../photos/man.png';
import Woman from '../photos/woman.png';
import Robot from '../photos/robot.png';
import jsonResponse from "./steps";


//Components
import { TrebekWindow } from "../components/TrebekWindow";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import {AvatarContainer} from "../components/AvatarContainer";

//MAIN START MENU
export class StartMenu extends React.Component {
  ///PROPS
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      data: [{}],
      photos: [Stage, AlexName, AlexAvatar],
      avatar: [
        { picture: Man, value: 'Man', className: 'avatar' },
        { picture: Woman, value: "Woman", className: 'avatar' },
        { picture: Robot, value: "Robot", className: 'avatar' },
      ],
      name: '',
      score: 0,
      avatarSelected: '',
      finalizeCharacter: false,
    };
  }
  //METHODS
  handleButtonClick() {
    if (this.state.counter === 0) {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
    if (this.state.counter === 1) {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
    if (this.state.counter === 2 && this.state.avatarSelected) {
      this.setState({ finalizeCharacter: !this.state.finalizeCharacter });
    }
  }
  handleReload() {
    window.location.reload();
  }
  handleAvatarClick(i) {
    let avatarCopy = [...this.state.avatar];
    if (this.state.avatarSelected) {
      return;
    }
    ;
    avatarCopy[i].className = "avatar selected";
    this.setState({ avatarSelected: this.state.avatar[i].value, avatar: avatarCopy });
    let dataCopy = [...this.state.data];
    console.log(dataCopy[2]);
    dataCopy[2].button = "Finalize Character";
    this.setState({ data: dataCopy });
    console.log(this.state.finalizeCharacter);
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
  //MOUNTING
  componentWillMount() {
    console.log(jsonResponse);
    this.setState({ data: jsonResponse });
  }
  //RENDERING
  render() {
    const { data, counter, photos, avatar } = this.state;
    if (!this.state.data) {
      return (<div>Loading...</div>);
    }
    if (!this.state.finalizeCharacter) {
      return (<div className="game lvl2">

        <div className="startMenu_Top">
          <h1 className="game-title">8-bit JEOPARDY</h1>
          <TrebekWindow className="window" src={photos[counter]} />
          <Text step={data[counter].text} />
        </div>

        <div className="startMenu_Bottom">
          <Input step={counter} onEnter={this.handleEnter.bind(this)} onChange={this.handleInputChange.bind(this)} />
          <AvatarContainer step={counter} src={avatar} onClick={(i) => this.handleAvatarClick(i)} />
          <Button step={data[counter].button} onClick={this.handleButtonClick.bind(this)} />
        </div>
      </div>);
    }
    else {
      let avatarsArray = this.state.avatar;
      let {avatarSelected,name}=this.state;
      let filteredAvatar = avatarsArray.filter(el => el.value === `${avatarSelected}`);
      console.log(filteredAvatar);
      return (
        <div className="game finalized">
          <h1>You Selected...</h1>
          <p>Name: {name}</p>
          <img className="finalizedImage" src={filteredAvatar[0].picture} alt='' />
          <button className="button" onClick={this.handleReload.bind(this)}>Reload</button>
        </div>
      );
    }
  }
}
