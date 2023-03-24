import { Component } from "react";
import "./App.css";
import Overview from "./components/Overview";

class App extends Component {
    constructor() {
        super();
        this.state = {
            listItems: []
        };
        this.btnClicked = this.btnClicked.bind(this);
    }

    btnClicked() {
        const input = document.getElementById("submitInput");
        this.setState({ listItems: [...this.state.listItems, input.value] });
    }

    render() {
        return (
            <div className="App">
                <input id="submitInput"></input>
                <button name="submit" value="submit" onClick={this.btnClicked}>
                    Submit
                </button>
                <Overview listItems={this.state.listItems}></Overview>
            </div>
        );
    }
}

export default App;
