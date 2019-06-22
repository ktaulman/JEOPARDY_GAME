import "../src/index.js";

export const steps=[
    {
        id:0,
        step:0,
        window:require("./photos/Stage.png"),
        text:"Welcome to JEOPARDY!",
        button:"Start",
        displayInput:false,
        displayCharacters:false,
    },
    {
        id:1,
        window:require("./photos/Alex_Name.png"),
        text:"Please enter your name",
        button:"Submit Name",
        displayInput:true,
        displayCharacters:false,
    },
    {
        id:2,
        window:require("./photos/Alex_Avatar.png"),
        text:"Please choose a character",
        button:"Choose Character",
        displayInput:false ,
        displayCharacters:true,
        manPhoto:require("./photos/man.png"),
        womanPhoto:require("./photos/woman.png"),
        robotPhoto:require("./photos/robot.png"),
    }
]