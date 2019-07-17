import React from "react";
import { Board } from "./Board";
import { StartMenu } from './StartMenu';
export class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
        <div>
            <StartMenu />
            <Board className="board" />
        </div>);
    }
}
