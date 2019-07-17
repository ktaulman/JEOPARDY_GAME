import React from "react";

import {TrebekWindow } from "../components/TrebekWindow";
import {Text } from "../components/Text";
import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {AvatarContainer} from "../components/AvatarContainer";


export const StartMenuCopy=(props)=>{
 
    const { data, counter, photos,name, avatar,avatarSelected,finalizeCharacter} = props.state;
    if(!finalizeCharacter){
    return (
    <div id="game_menu">

        <div className="startMenu_Top">
          <h1 className="game-title">16-bit JEOPARDY</h1>
          <TrebekWindow 
            className="window" 
            src={photos[counter]} 
            />
          
          <Text 
            step={data[counter].text} 
            />
        </div>

        <div className="startMenu_Bottom">
          <Input 
            step={counter} 
            onEnter={props.handleEnter} 
            onChange={props.handleInputChange} 
          />
          
          <AvatarContainer 
            step={counter} 
            src={avatar} 
            onClick={props.handleAvatarClick}    
          />

          <Button 
            step={data[counter].button} 
            onClick={props.handleButtonClick}     
            />
        </div>
    </div>
    )}
    else {
        let avatarsArray = avatar;
        let filteredAvatar = avatarsArray.filter(el => el.value === `${avatarSelected}`);
        console.log(filteredAvatar);
        return (
          <div className="game finalized">
            <h1>You Selected...</h1>
            <p>Name: {name}</p>
            <img 
                className="finalizedImage" 
                src={filteredAvatar[0].picture} 
                alt='' 
            />
             <Button 
                step={data[counter].button} 
                onClick={props.handleButtonClick}     
            /> 
          </div>
        );
      }
}
