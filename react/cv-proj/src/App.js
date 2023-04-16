import logo from "./logo.svg";
import "./Assets/App.css";
import { Component } from "react";
import PersonInfoComponent from "./Components/PersonInfo";
import Resume from "./Components/Resume";

class App extends Component {
    constructor() {
        super();
        this.state = {
            Name: "test",
            FirstName: "",
            LastName: "",
            Email: "",
            Phone: ""
        };
        this.updatePersonInfoBtnClicked =
            this.updatePersonInfoBtnClicked.bind(this);
    }

    updatePersonInfoBtnClicked() {
        const name = document.getElementsByClassName("person-name")[0].value;
        // const email =
        //     document.getElementsByClassName("person-email")[0].textContent;
        // const phone =
        //     document.getElementsByClassName("person-phone")[0].textContent;
        this.setState({
            Name: name
            // Email: email,
            // Phone: phone
        });
        console.log(name);
        console.log(`hello  ${this.state.Name}`);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <PersonInfoComponent
                    Name={this.state.Name}
                    Email={this.state.Email}
                    Phone={this.state.Phone}
                    updateBtnClicked={this.updatePersonInfoBtnClicked}
                />
                <Resume
                    Name={this.state.Name}
                    Email={this.state.Email}
                    Phone={this.state.Phone}
                />
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
