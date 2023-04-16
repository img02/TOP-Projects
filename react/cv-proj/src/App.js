import logo from "./logo.svg";
import "./Assets/App.css";
import { Component } from "react";
import PersonInfoComponent from "./Components/PersonInfo";

class App extends Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            FirstName: "",
            LastName: "",
            Email: "",
            PhoneNumber: ""
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <PersonInfoComponent />
            </div>
        );
    }
}

export default App;

/**
 * keep it simple
 * focus on bare minimum requirements
 * document html tag/divs at top
 * worry about styling afterwards~
 *
 * worry about extra functionality or ux later
 *
 * focus on min viable product
 */
