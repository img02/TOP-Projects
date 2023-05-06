import "./Assets/App.css";
import { Component } from "react";
import PersonInfoComponent from "./Components/PersonInfo";
import Resume from "./Components/Resume";
import EducationInfoComponent from "./Components/EducationInfo";

class App extends Component {
    constructor() {
        super();
        this.state = {
            Name: "Fake Name",
            FirstName: "",
            LastName: "",
            Email: "fake@email.com",
            Phone: "012-345-678",
            //Education: [{ Institution: "1", Title: "2", Date: "" }],
            Education: []
        };
        this.updatePersonInfoBtnClicked =
            this.updatePersonInfoBtnClicked.bind(this);
        this.updateEducationInfoBtnClicked =
            this.updateEducationInfoBtnClicked.bind(this);
    }

    updatePersonInfoBtnClicked() {
        const name = document.getElementsByClassName("person-name")[0].value;
        const email = document.getElementsByClassName("person-email")[0].value;
        const phone = document.getElementsByClassName("person-phone")[0].value;
        this.setState({
            Name: name,
            Email: email,
            Phone: phone
        });
    }

    updateEducationInfoBtnClicked() {
        const institution = document.getElementsByClassName(
            "education-institution"
        )[0].value;
        const title =
            document.getElementsByClassName("education-title")[0].value;
        const date = document.getElementsByClassName("education-date")[0].value;

        this.setState({
            Education: [
                ...this.state.Education,
                { Institution: institution, Title: title, Date: date }
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header-temp"></header>
                <PersonInfoComponent
                    Name={this.state.Name}
                    Email={this.state.Email}
                    Phone={this.state.Phone}
                    updateBtnClicked={this.updatePersonInfoBtnClicked}
                />
                <EducationInfoComponent
                    Education={this.state.Education}
                    updateBtnClicked={this.updateEducationInfoBtnClicked}
                    // add props here
                />
                <Resume
                    Name={this.state.Name}
                    Email={this.state.Email}
                    Phone={this.state.Phone}
                    Education={this.state.Education}
                    //add education info data here
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
